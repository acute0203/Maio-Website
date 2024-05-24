import React from "react"
import { Box } from "@mui/material"
import { CommonSection } from "@/components/common/CommonSection"

export const Partners: React.FC = () => {
  return (
    <CommonSection className="border-b-[24px] border-primary bg-white">
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
        <div className="title" data-title="合作夥伴">
          Partners
        </div>
        <div className="mt-20 grid gap-10 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
          <img
            src="/images/partner-01.png"
            alt="partner"
            className="object-cover"
          />
          <img
            src="/images/partner-01.png"
            alt="partner"
            className="object-cover"
          />
          <img
            src="/images/partner-01.png"
            alt="partner"
            className="object-cover"
          />
          <img
            src="/images/partner-01.png"
            alt="partner"
            className="object-cover"
          />
          <img
            src="/images/partner-02.png"
            alt="partner"
            className="object-cover"
          />
          <img
            src="/images/partner-02.png"
            alt="partner"
            className="object-cover"
          />
          <img
            src="/images/partner-02.png"
            alt="partner"
            className="object-cover"
          />
          <img
            src="/images/partner-02.png"
            alt="partner"
            className="object-cover"
          />
          <img
            src="/images/partner-03.png"
            alt="partner"
            className="object-cover"
          />
          <img
            src="/images/partner-03.png"
            alt="partner"
            className="object-cover"
          />
          <img
            src="/images/partner-03.png"
            alt="partner"
            className="object-cover"
          />
          <img
            src="/images/partner-03.png"
            alt="partner"
            className="object-cover"
          />
        </div>
      </div>
      <p className="section-title right-8 text-end">Partners</p>
    </CommonSection>
  )
}
