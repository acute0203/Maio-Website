import React from "react"
import { Box } from "@mui/material"
import { CommonSection } from "@/components/common/CommonSection"
import { ServiceCard } from "./widget/ServiceCard"
import { serviceMenus } from "@/core/constant/menu"

export const Services: React.FC = () => {
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
        }}
      />
      <div className="mx-auto w-11/12 justify-center text-center lg:w-4/5 xl:w-[1096px]">
        <div className="title" data-title="產品與服務">
          Services
        </div>
        <div className="mt-20 grid gap-10 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {serviceMenus.map(menu => (
            <ServiceCard key={menu.title} data={menu} />
          ))}
        </div>
      </div>
      <p className="section-title right-8 text-end">Services</p>
    </CommonSection>
  )
}
