import React from "react"
import { Box, useTheme } from "@mui/material"

export const ProductDigital: React.FC = () => {
  const { palette } = useTheme()

  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: palette.info.main,
        zIndex: 1,
        width: "100%",
        height: "100%",
        paddingY: 20,
      }}
    >
      <div className="mx-auto w-11/12 justify-center lg:w-4/5 xl:w-[1096px]">
        <div className="shadow-section rounded-xl bg-gradient-to-r from-secondary to-[#00F0FF] p-px">
          <div className="h-full w-full rounded-[calc(0.75rem-1px)] bg-white px-24 py-8">
            <div className="flex items-center p-5">
              <img
                src="/images/service-05.png"
                alt="service"
                className="service-icon px-3"
              />
              <div className="title-border-left ml-11 font-roboto">
                <p className="text-gradient inline-block font-black italic">
                  Digital Transformation and Innovation
                </p>
                <p className="text-stroke-info my-3 text-4xl font-black text-primary">
                  數位轉型與創新
                </p>
                <p className="text-lg leading-9 tracking-wide text-[#262626]">
                  利用數位技術和創新思維，重新設計改造企業的業務流程、產品和服務，以適應快速變化的數位環境，提高業務效率和客戶滿意度。
                </p>
              </div>
            </div>
            <ul className="leading-9 tracking-wide text-[#5A5A5A]">
              <li>
                <span className="font-bold text-primary">
                  •數位化業務流程優化：
                </span>
                分析現有業務流程，引入數位技術和自動化解決方案，優化業務效率和成本效益。
              </li>
              <li>
                <span className="font-bold text-primary">
                  •數據驅動的決策：
                </span>
                建立數據分析，收集、分析和應用大數據，幫助企業提高準確性和效率。
              </li>
              <li>
                <span className="font-bold text-primary">
                  •區塊鏈應用創新：
                </span>
                開發區塊鏈技術的應用，如供應鏈追溯、數字資產管理等，提高業務透明度和安全性。
              </li>
              <li>
                <span className="font-bold text-primary">•客戶體驗優化：</span>
                利用數位技術改善客戶體驗，網站和應用程序的設計優化、個性化服務等。
              </li>
            </ul>
            <div className="mt-5 text-center">
              <button className="btn-gradient text-center">產品介紹</button>
            </div>
          </div>
        </div>
      </div>
    </Box>
  )
}
