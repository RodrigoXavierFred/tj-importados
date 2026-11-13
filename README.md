This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Campanhas sazonais

Em `src/config/campaign.ts`, altere `activeCampaign` para `"black-friday"`,
`"christmas"` ou `null` (sem campanha). Os presets permitem editar os textos,
link e cor do destaque no início, além dos títulos e etiquetas do catálogo.
Os produtos e descontos são independentes: revise `src/data/promotions.ts` e os
preços em `src/data/products.ts` antes de mudar a campanha. Execute `npm run build`
e publique a nova versão para aplicar as alterações.

O ícone e a prévia de compartilhamento usam a marca com fundo preto em
`src/app/icon.png` e `public/tj/logo-black.png`, com metadados em `src/app/layout.tsx`.

## Segurança

A revisão, limitações e ações pendentes de domínio/Render estão em
[`docs/security-review.md`](docs/security-review.md).
Execute `node --test tests/cart-storage.test.mjs` com Node 24 para verificar a
restauração e validação da sacola. Preços continuam sujeitos à conferência pela loja
no WhatsApp; não há checkout nem validação de pedido no servidor.
