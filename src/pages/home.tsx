import React from "react"
import { Home } from "@/components/home/Home"
import { Seo } from "@/components/Seo"

export const HomePage = (): JSX.Element => (
  <>
    <Seo title="Maio Website | Home" />
    <Home />
  </>
)
