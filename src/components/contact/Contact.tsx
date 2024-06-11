import React, { useEffect } from "react"
import { Banner } from "./Banner"
import { ContactUs } from "./ContactUs"

export const Contact: React.FC = () => {
  useEffect(() => {
    scrollTo(0, 0)
  }, [])

  return (
    <>
      <Banner />
      <ContactUs />
    </>
  )
}
