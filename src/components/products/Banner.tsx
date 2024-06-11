import React, { useState, useEffect, useMemo } from "react"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadFull } from "tsparticles"
import { ISourceOptions } from "@tsparticles/engine"
import { Box } from "@mui/material"

export const Banner: React.FC = () => {
  const [init, setInit] = useState(false)

  // Particles init
  useEffect(() => {
    initParticlesEngine(async engine => {
      await loadFull(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  // Particles options
  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "#002659",
        },
      },
      fpsLimit: 120,
      fullScreen: false,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.6,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 300,
        },
        opacity: {
          value: 0.1,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [],
  )

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      {init && <Particles id="tsparticles-banner" options={options} />}
      <div className="relative bg-primary pb-24">
        <p className="absolute -top-11 right-8 text-end font-roboto text-5xl font-black italic text-secondary sm:-top-16 sm:right-16 sm:text-7xl">
          DEVELOPMENT
          <br /> AND INTEGRATION
        </p>
      </div>
    </Box>
  )
}
