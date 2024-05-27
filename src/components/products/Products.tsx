import React from "react"
import { Banner } from "./Banner"
import { ProductSoftware } from "./ProductSoftware"
import { ProductBlockchain } from "./ProductBlockchain"
import { ProductCloud } from "./ProductCloud"
import { ProductAI } from "./ProductAI"
import { ProductDigital } from "./ProductDigital"
import { ProductFintech } from "./ProductFintech"

export const Products: React.FC = () => {
  return (
    <>
      <Banner />
      <ProductSoftware />
      <ProductBlockchain />
      <ProductCloud />
      <ProductAI />
      <ProductDigital />
      <ProductFintech />
    </>
  )
}
