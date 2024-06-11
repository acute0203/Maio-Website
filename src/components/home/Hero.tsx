import React, { useState, useEffect, useMemo } from "react"
import { Box, useTheme } from "@mui/material"
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
  const { breakpoints } = useTheme()

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
        height: "calc(100dvh - 85px)",
        overflow: "hidden",
      }}
    >
      {init && <Particles id="tsparticles" options={options} />}
      <Box className="absolute bottom-0 left-0 transform pb-8 pl-6 text-xs tracking-widest text-secondary md:-right-20 md:bottom-[200px] md:left-auto md:rotate-90 md:p-0 md:text-sm">
        Chain the Future, One Mile, One Footprint,
        <br />
        Weaving a World of Intelligent Technology
      </Box>
      <Box className="swiper-pagination" />
      <Box className="relative mx-auto h-[90%] w-full md:h-fit md:w-3/4">
        <Box className="absolute -right-[24%] -top-[9%] z-20 scale-50 md:-right-[13%] md:top-[4%] md:scale-100">
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
            className="absolute bottom-[22%] left-[50%] z-50 w-1/2 -translate-x-1/2 md:bottom-[16%] md:left-0 md:w-auto md:translate-x-0"
          />
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              right: "5.5%",
              width: "48%",
              height: "65%",
              backgroundColor: "#46F298",
              clipPath: "polygon(18% 0%, 100% 0%, 82% 100%, 0% 100%)",
              [breakpoints.down("md")]: {
                display: "none",
              },
            }}
          />
          {swiperMenus.map(menu => (
            <SwiperSlide key={menu.id}>
              <div className="swiper-slide-content">
                <p className="px-12 pt-28 text-xl font-bold text-info md:px-0 md:pr-12 md:pt-0">
                  {menu.description}
                </p>
                <div className="absolute bottom-[32%] right-10 z-10 text-end font-roboto text-3xl font-black italic md:bottom-9 md:right-0 md:text-6xl">
                  <p className="text-stroke-info text-primary md:-mb-[14px]">
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
