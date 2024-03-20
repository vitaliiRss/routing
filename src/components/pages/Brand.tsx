import React from "react";
import adidasModel1 from "../../assets/adidas/adidas_1.webp";
import adidasModel2 from "../../assets/adidas/adidas_2.webp";
import adidasModel3 from "../../assets/adidas/adidas_3.webp";
import pumaModel1 from "../../assets/puma/puma_1.avif";
import pumaModel2 from "../../assets/puma/puma_2.avif";
import pumaModel3 from "../../assets/puma/puma_3.avif";
import styles from "../Site.module.css";
import { Link, useParams } from "react-router-dom";

export type ProductType = {
  id: number,
  model: string,
  collection: string,
  price: string,
  picture: string,
}

export type BrandType = {
  brandId: string,
  description: string,
  title: string,
  products: ProductType[]
}

export type BrandsType = {
  [key: string]: BrandType
}

export const state: BrandsType = {
  adidas: {
    brandId: "adidas",
    description: "Adidas is a globally recognized brand synonymous with sports heritage, innovation, and style. Founded in Germany in 1949, Adidas has emerged as a leading manufacturer of high-quality athletic wear, footwear, and accessories. The brand's history is rooted in a commitment to providing innovative footwear solutions for athletes, driven by the Dassler brothers' vision to help athletes perform at their best.",
    title: "Adidas",
    products: [
      {
        id: 1,
        model: "ADIDAS ADIFOM TRXN",
        collection: "new collection1",
        price: "100200$",
        picture: adidasModel1,
      },
      {
        id: 2,
        model: "ADIDAS ADIFOM SUPER",
        collection: "new collection22",
        price: "200300$",
        picture: adidasModel2
      },
      {
        id: 3,
        model: "ADIDAS SUPER SUPERSKI",
        collection: "new collection333",
        price: "300400$",
        picture: adidasModel3
      }
    ]
  },
  puma: {
    brandId: "puma",
    description: "Puma is a globally recognized brand synonymous with sports heritage, innovation, and style. Established in Germany in 1948, Puma has emerged as a leading manufacturer of athletic footwear, apparel, and accessories. The brand's history is characterized by a commitment to pushing boundaries and challenging the status quo, evident in its bold designs and innovative product technologies.",
    title: "Puma",
    products: [
      {
        id: 1,
        model: "PUMA HOOPS x CHEETOS® Scoot Zeros",
        collection: "new collection1",
        price: "119,95$",
        picture: pumaModel1,
      },
      {
        id: 2,
        model: "PUMA x CHEETOS® RS-X FH Sneakers",
        collection: "new collection22",
        price: "119,95$",
        picture: pumaModel2
      },
      {
        id: 3,
        model: "PUMA x CHEETOS® Suede Sneakers",
        collection: "new collection333",
        price: "89,95$",
        picture: pumaModel3
      }
    ]
  },
  reebok: {
    brandId: "reebok",
    description: "Reebok, founded in the United Kingdom in 1958, stands as a symbol of innovation, fitness, and empowerment. With a rich legacy in athletic footwear, apparel, and accessories, Reebok has established itself as a pioneer in the industry. Rooted in a commitment to fitness and individual empowerment, Reebok's designs emphasize performance and functionality.",
    title: "Reebok",
    products: []
  },
}

export const Brand = () => {
  const { brand } = useParams()

  const currentBrand: BrandType = state[brand as string]

  return (
    <div>
      <h2>{currentBrand.title}</h2>

      <p>
        {currentBrand.description}
      </p>

      <div className={styles.productList}>
        {currentBrand.products && currentBrand.products.map((product, index) => {
          return (
            <Link key={index} to={`${product.id}`}>
              <img src={product.picture} alt={product.model} className={styles.productTileImg} />
            </Link>
          )
        })}
      </div>
    </div>
  );
};