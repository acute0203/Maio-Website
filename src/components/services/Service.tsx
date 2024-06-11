import React from "react"
import { Banner } from "./Banner"
import { ServiceSoftware } from "./ServiceSoftware"
import { ServiceBlockchain } from "./ServiceBlockchain"
import { ServiceCloud } from "./ServiceCloud"
import { ServiceAI } from "./ServiceAI"
import { ServiceDigital } from "./ServiceDigital"
import { ServiceFintech } from "./ServiceFintech"

export const Service: React.FC = () => {
  return (
    <>
      <Banner />
      <ServiceSoftware />
      <ServiceBlockchain />
      <ServiceCloud />
      <ServiceAI />
      <ServiceDigital />
      <ServiceFintech />
    </>
  )
}
