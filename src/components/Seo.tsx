import React from "react"
import { Helmet } from "react-helmet"
// FavIcon

export type SeoProps = {
  title?: string
  description?: string
  lang?: string
}

export const Seo: React.FC<SeoProps> = ({ title, lang }) => {
  const metaTitle = title || "Maio Website"

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
    />
  )
}
