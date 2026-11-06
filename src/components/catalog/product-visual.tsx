import Image from "next/image";
import type { CSSProperties } from "react";
import type { Product } from "@/data/products";

type CropStyle = CSSProperties & {
  "--crop-ratio"?: string;
  "--crop-image-width"?: string;
  "--crop-image-height"?: string;
  "--crop-left"?: string;
  "--crop-top"?: string;
};

export function ProductVisual({ product, priority = false, variant = "card" }: { product: Product; priority?: boolean; variant?: "card" | "modal" }) {
  const alt = `${product.brand} ${product.name}`;
  const modalImage = variant === "modal" ? product.modalImage : undefined;

  if (modalImage) {
    return <div className="product-visual product-visual-clean product-visual-modal-clean">
      <Image
        src={modalImage}
        alt={alt}
        width={product.modalImageWidth ?? product.imageWidth}
        height={product.modalImageHeight ?? product.imageHeight}
        sizes="(max-width: 760px) 58vw, 380px"
        priority={priority}
      />
    </div>;
  }

  if (product.image.includes("/catalogo-compartilhado/studio/")) {
    return <div className="product-visual product-visual-studio">
      <Image className="studio-backdrop" src={product.image} alt="" aria-hidden="true" width={product.imageWidth} height={product.imageHeight} sizes="(max-width: 760px) 46vw, 340px" priority={priority} />
      <Image className="studio-product" src={product.image} alt={alt} width={product.imageWidth} height={product.imageHeight} sizes="(max-width: 760px) 46vw, 340px" priority={priority} />
    </div>;
  }

  if (!product.imageCrop) {
    return <div className="product-visual product-visual-clean">
      <Image src={product.image} alt={alt} width={product.imageWidth} height={product.imageHeight} sizes="(max-width: 760px) 42vw, 320px" priority={priority} />
    </div>;
  }

  const crop = product.imageCrop;
  const style: CropStyle = {
    "--crop-ratio": `${crop.width} / ${crop.height}`,
    "--crop-image-width": `${(product.imageWidth / crop.width) * 100}%`,
    "--crop-image-height": `${(product.imageHeight / crop.height) * 100}%`,
    "--crop-left": `${-(crop.x / crop.width) * 100}%`,
    "--crop-top": `${-(crop.y / crop.height) * 100}%`,
  };

  return <div className="product-visual product-visual-poster" style={style}>
    <Image src={product.image} alt={alt} width={product.imageWidth} height={product.imageHeight} sizes="(max-width: 760px) 38vw, 260px" />
  </div>;
}

