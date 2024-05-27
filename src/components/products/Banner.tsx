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
      <div className="relative bg-primary py-40">
        <p className="absolute -top-16 right-16 text-end font-roboto text-7xl font-black italic text-secondary">
          PRODUCTS <br />
          AND SERVICES
        </p>
        <div className="mx-auto w-5/6 justify-center lg:w-4/5 xl:w-[806px]">
          <p className="text-lg leading-8 tracking-wide">
            麥點科技提供多元化的軟體與技術解決方案，從軟體系統開發、區塊鏈應用開發到雲端服務管理，皆涵蓋其中。
            <br />
            我們擁有豐富的人工智慧與大數據整合經驗，協助客戶挖掘數據價值，提高業務效率。
            <br />
            同時，我們致力於數位轉型與創新，助您擁抱數位時代，以及提供金融科技與去中心化金融解決方案，幫助客戶實現金融創新與業務升級。
          </p>
        </div>
      </div>
    </Box>
  )
}
