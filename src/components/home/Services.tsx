import React from "react"
import { Box, useTheme, useMediaQuery } from "@mui/material"
import { CommonSection } from "@/components/common/CommonSection"
import { ServiceCard } from "./widget/ServiceCard"
import { serviceMenus } from "@/core/constant/menu"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

export const Services: React.FC = () => {
  const { breakpoints } = useTheme()
  const isMobile = useMediaQuery(breakpoints.down("sm"))

  return (
    <CommonSection className="bg-white">
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "30%",
          height: "100%",
          backgroundColor: "#002659",
          clipPath: "polygon(80% 0%, 100% 0%, 100% 100%, 0% 100%)",
          zIndex: -1,
          [breakpoints.down("sm")]: {
            display: "none",
          },
        }}
      />
      <div className="mx-auto w-5/6 justify-center text-center lg:w-4/5 xl:w-[1096px]">
        <div className="title" data-title="產品與服務">
          Services
        </div>
        {isMobile ? (
          <Swiper
            className="service-swiper"
            slidesPerView={"auto"}
            spaceBetween={10}
            pagination={{
              clickable: true,
              el: ".service-swiper-pagination",
              bulletClass: "custom-swiper-pagination-bullet",
              bulletActiveClass: "custom-swiper-pagination-bullet-active",
            }}
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            {serviceMenus.map(menu => (
              <SwiperSlide key={menu.title}>
                <div className="pt-16">
                  <ServiceCard data={menu} />
                </div>
              </SwiperSlide>
            ))}
            <Box className="service-swiper-pagination mx-auto" />
          </Swiper>
        ) : (
          <div className="mt-20 hidden gap-10 sm:grid-cols-1 md:grid lg:grid-cols-2 xl:grid-cols-3">
            {serviceMenus.map(menu => (
              <ServiceCard key={menu.title} data={menu} />
            ))}
          </div>
        )}
      </div>
      <p className="section-title right-8 text-end">Services</p>
    </CommonSection>
  )
}
