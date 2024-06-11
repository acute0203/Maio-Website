import React, { useEffect } from "react"
import { Services } from "./Services"
import { About } from "./About"
import { Hero } from "./Hero"
import { Partners } from "./Partners"
import { HomeContact } from "./HomeContact"

export const Home: React.FC = () => {
  useEffect(() => {
    scrollTo(0, 0)
  }, [])

  return (
    <>
      <Hero />
      <Services />
      <About />
      <Partners />
      <HomeContact />
    </>
  )
}
