import React from "react"
import { Services } from "./Services"
import { About } from "./About"
import { Hero } from "./Hero"
import { Partners } from "./Partners"
import { Contact } from "./Contact"

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Partners />
      <Contact />
    </>
  )
}
