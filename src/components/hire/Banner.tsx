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
          JOIN MAIO
        </p>
        <div className="mx-auto w-5/6 justify-center lg:w-4/5 xl:w-[806px]">
          <p className="text-lg leading-8 tracking-wide">
            麥點數位科技正在尋找具備創新思維和技術熱情的精英加入我們的團隊。
            <br />
            作為一家年輕而充滿活力的公司，我們提供多元化的解決方案，涵蓋雲端服務、AI人工智能、DeFi、區塊鏈、Web3.0和軟體開發等領域。
            <br />
            我們重視夥伴的聲音與需求，擁抱扁平式的公司文化，鼓勵學習和成長。
            <br />
            我們提供彈性的工作時間和符合勞基法的保障，並有其他福利制度如高規格筆電補助、健康檢查補助、不定期公司聚餐等。
            <br />
            如果您希望在一個充滿挑戰和機會的環境中工作，並與我們一同探索數位科技的未來，歡迎加入麥點數位科技，一起實現更美好的未來！
          </p>
        </div>
      </div>
    </Box>
  )
}
