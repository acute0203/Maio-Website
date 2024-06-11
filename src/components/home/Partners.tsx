import React from "react"
import { Box, useTheme } from "@mui/material"
import { CommonSection } from "@/components/common/CommonSection"
import { motion } from "framer-motion"

export const Partners: React.FC = () => {
  const { breakpoints } = useTheme()

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
          [breakpoints.down("sm")]: {
            display: "none",
          },
        }}
      />
      <div className="mx-auto w-5/6 justify-center text-center lg:w-4/5 xl:w-[1096px]">
        <div className="title" data-title="合作夥伴">
          Partners
        </div>
        <motion.div
          className="mt-12 grid grid-cols-2 gap-5 sm:gap-10 md:mt-20 xl:grid-cols-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
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
        </motion.div>
      </div>
      <p className="section-title right-8 text-end">Partners</p>
    </CommonSection>
  )
}
