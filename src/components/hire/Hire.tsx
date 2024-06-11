import React, { useEffect } from "react"
import { Banner } from "./Banner"
import { Philosophy } from "./Philosophy"
import { JoinUs } from "./JoinUs"

export const Hire: React.FC = () => {
  useEffect(() => {
    scrollTo(0, 0)
  }, [])

  return (
    <>
      <Banner />
      <Philosophy />
      <JoinUs />
    </>
  )
}
