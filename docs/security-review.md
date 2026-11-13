# Revisão de segurança — TJ Importados

Data: 13/11/2026. Base inspecionada: `e60b9aa`.

## Escopo e limites

Revisão do código, dependências instaladas/lockfile, exportação estática e configuração
Render. Inclui tentativas de leitura do domínio público; não houve exploração,
varredura de portas, alteração de DNS ou acesso a contas administrativas.

O site gera arquivos estáticos (`output: export`). Não há API de pedidos, login,
processamento de cartão ou banco de dados nesta versão. A sacola prepara uma
mensagem para confirmação manual pelo WhatsApp. Isso reduz a superfície de ataque,
mas não garante a segurança do domínio, da hospedagem ou das contas dos provedores.

## Achados e correções

### Sacola: validação de dados persistidos — prioridade média

O navegador armazenava o objeto completo do produto e o restaurava com um cast de
TypeScript, sem validar o conteúdo. JSON válido com estrutura inválida podia quebrar
a interface; preço/nome/imagem adulterados eram usados no pedido. A reprodução com
Lily a R$ 0,01 confirmou a ausência de reconstrução pelo catálogo.

Correção: guardar somente identificador e quantidade, reconstruir os produtos a
partir do catálogo atual, validar formato/limites e tolerar falhas de armazenamento.
A migração aceita identificadores de sacolas antigas e descarta os demais dados.

Limite: código de frontend não torna o preço inviolável. O cliente ainda pode editar
a mensagem no WhatsApp. A loja deve conferir o pedido; se houver checkout no futuro,
o servidor deverá calcular preços e validar estoque, sem confiar no navegador.

### Cabeçalhos ausentes na configuração versionada — melhoria de defesa

O `render.yaml` não declarava cabeçalhos de segurança. Adicionados para todas as rotas:

- `X-Content-Type-Options: nosniff`;
- `X-Frame-Options: DENY` e CSP `frame-ancestors 'none'`, contra incorporação em outros sites;
- `Referrer-Policy: strict-origin-when-cross-origin`;
- `Permissions-Policy` negando câmera, microfone e localização;
- CSP limitando `base-uri`, `object-src` e `form-action`.

Essa CSP é deliberadamente parcial: não restringe scripts e não equivale a uma defesa
completa contra XSS. Uma política de scripts mais forte requer hashes gerados por
build ou suporte na camada que serve o site; um nonce fixo não é uma solução segura.
Não se adicionaram nonces dinâmicos em um site exportado estaticamente.

Esses cabeçalhos pertencem ao Render, não ao `next.config.ts`: cabeçalhos do servidor
Next não são executados quando o Render serve o diretório `out/`.

**Aplicação em produção pendente:** alterações no YAML precisam ser sincronizadas
pelo Blueprint do Render ou copiadas para Settings → Headers do serviço. Um deploy
do código, sozinho, não comprova que configurações do serviço foram atualizadas.
Não foi possível confirmar os cabeçalhos públicos nesta revisão.

### Dependências — aviso em ferramentas de desenvolvimento

`npm audit --omit=dev --json`: zero vulnerabilidades reportadas na consulta.
`npm audit --json`: oito entradas moderadas propagadas de um único aviso de
`minimatch`, GHSA-g3hv-75wg-m249, por meio de ESLint/TypeScript ESLint.

O aviso envolve consumo de recursos com padrões glob controlados pelo atacante e
`optimizationLevel >= 2`; não foi demonstrado caminho de exploração por um visitante
do site estático. A versão corrigida é 11.0.1, fora da faixa major 10 aceita pelo
consumidor atual. Não se forçou override de major nem se executou `npm audit fix
--force`. Acompanhar atualização compatível de `@typescript-eslint/typescript-estree`.
Auditoria sem alertas de produção é uma fotografia da base consultada, não garantia
contra falhas ainda não publicadas.

## Domínio: verificações externas não concluídas

A política de saída deste ambiente bloqueou HTTP e HTTPS para
`tjimportados.com.br` e `www.tjimportados.com.br` com resposta 403 de `envoy`.
No HTTPS, o bloqueio ocorreu no CONNECT, antes de estabelecer TLS com o site.
A resolução DNS local retornou `EAI_AGAIN`. Não são evidências de erro no domínio.

Permanecem **não verificados**:

- validade, cadeia e renovação do certificado;
- redirecionamento HTTP → HTTPS e escolha consistente entre apex e `www`;
- cabeçalhos efetivamente entregues em produção, incluindo HSTS;
- registros DNS, apontamentos para serviços removidos, CAA e DNSSEC;
- proteção de contas, bloqueio de transferência e renovação do registro.

Para retomar a verificação HTTP/TLS, liberar na rede deste ambiente os destinos
`tjimportados.com.br` e `www.tjimportados.com.br`. DNS detalhado precisa também de
uma rota de consulta autorizada. Não se tentou contornar a política por IPs ou proxies.

## Ações no registrador/DNS e Render

1. Ativar autenticação em dois fatores no registrador, DNS, GitHub e Render; revisar
   usuários com acesso e manter recuperação da conta atualizada.
2. Conferir vencimento/renovação do domínio e bloqueio contra transferência indevida.
3. Conferir apontamentos apex/`www` e remover referências a recursos desativados,
   preservando os registros necessários a e-mail e outros serviços.
4. Validar HTTPS e redirecionamentos. Só então definir HSTS; decidir separadamente
   `includeSubDomains` e preload após verificar todos os subdomínios.
5. Habilitar DNSSEC conforme suporte do registrador/provedor, com DS correto.
   Configurar CAA somente após confirmar os emissores usados na renovação do Render.
6. Se o domínio usa e-mail, revisar SPF, DKIM e DMARC no provedor correspondente.

Nenhuma dessas configurações de conta/DNS foi alterada ou verificada por acesso
administrativo. Não é necessário compartilhar senhas ou tokens em chat.

## Validação executada

- `npm run build`: exportação estática e TypeScript aprovados.
- `npm run lint`: aprovado em todo o projeto.
- `node --test tests/cart-storage.test.mjs`: 6 testes aprovados; o runner usa o
  suporte nativo a TypeScript do Node 24 utilizado neste ambiente.
- Navegador Chromium/Playwright contra a exportação local servida com os cabeçalhos
  do `render.yaml`: cinco rotas carregaram sem erros; iframe bloqueado pelo navegador.
- Reproduções no navegador com sacola adulterada e JSON inválido: interface se recupera,
  dados antigos são migrados para ID/quantidade e preço vem do catálogo.
- Navegador sem acesso a `localStorage`: adição à sacola e geração da mensagem WhatsApp
  continuam funcionando em memória no celular.

Esses resultados validam o código e a configuração proposta localmente, sem comprovar
publicação, aplicação dos cabeçalhos no Render ou segurança do domínio em produção.
