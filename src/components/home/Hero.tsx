import React, { useState, useEffect, useMemo } from "react"
import { Box } from "@mui/material"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadFull } from "tsparticles"
import { ISourceOptions } from "@tsparticles/engine"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/pagination"
import SpinSlogan from "@/animation/SpinSlogan"
import { swiperMenus } from "@/core/constant/menu"
export const Hero: React.FC = () => {
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
        top: 0,
        left: 0,
        width: "100%",
        height: "calc(100dvh - 73px)",
        overflow: "hidden",
      }}
    >
      {init && <Particles id="tsparticles" options={options} />}
      <Box className="absolute -right-20 bottom-[200px] rotate-90 transform text-sm tracking-widest text-secondary">
        Chain the Future, One Mile, One Footprint,
        <br />
        Weaving a World of Intelligent Technology
      </Box>
      <Box className="swiper-pagination absolute -right-20 bottom-[300px]" />
      <Box className="relative mx-auto w-3/4">
        <Box className="absolute -right-[140px] -top-[9%] z-20">
          <SpinSlogan />
        </Box>
        <Swiper
          className="swiper"
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
            bulletClass: "custom-swiper-pagination-bullet",
            bulletActiveClass: "custom-swiper-pagination-bullet-active",
          }}
          slidesPerView={1}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          updateOnWindowResize
          observer
          observeParents
        >
          <img
            src="/images/logo.png"
            alt="logo"
            className="absolute bottom-24 left-0 z-50"
          />
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              right: "72px",
              width: "500px",
              height: "70%",
              backgroundColor: "#46F298",
              clipPath: "polygon(19% 0%, 100% 0%, 81% 100%, 0% 100%)",
            }}
          />
          {swiperMenus.map(menu => (
            <SwiperSlide key={menu.id}>
              <div className="swiper-slide-content">
                <p className="pr-4 text-xl font-bold text-info">
                  {menu.description}
                </p>
                <div className="absolute bottom-9 right-0 z-10 font-roboto text-6xl font-black italic">
                  <p className="text-stroke-info -mb-[14px] text-primary">
                    {menu.title}
                  </p>
                  <p className="text-stroke-primary text-secondary">
                    {menu.subTitle}
                  </p>
                </div>
                <img src={menu.path} alt={menu.id} className="slide-img" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  )
}
