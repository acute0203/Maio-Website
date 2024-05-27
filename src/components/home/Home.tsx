import React from "react"
import { Services } from "./Services"
import { About } from "./About"
import { Hero } from "./Hero"
import { Partners } from "./Partners"
import { HomeContact } from "./HomeContact"

export const Home: React.FC = () => {
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
