import React from "react"
import { Products } from "@/components/products/Products"
import { Seo } from "@/components/Seo"

export const ProductsPage = (): JSX.Element => (
  <>
    <Seo title="Maio Website | Products" />
    <Products />
  </>
)
