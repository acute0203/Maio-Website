import React, { useState } from "react"
import { Box } from "@mui/material"
import { CommonSection } from "@/components/common/CommonSection"
import { AboutEnum } from "@/core/enum/AboutEnum"

export const About: React.FC = () => {
  const [title, setTitle] = useState(AboutEnum.INTRODUCTION)

  const renderSubTitle = () => {
    switch (title) {
      case AboutEnum.INTRODUCTION:
        return "值得你信賴的團隊"
      case AboutEnum.VISION:
        return "企業願景"
      case AboutEnum.VALUE:
        return "核心價值"
    }
  }

  const renderDescription = () => {
    switch (title) {
      case AboutEnum.INTRODUCTION:
        return "麥點數位科技有限公司成立於2021年，積極投入在區塊鏈及AI人工智慧研發，及企業私有雲技術建置、公有雲介接、雲端服務部署、客服中心、高效能運算、整合通訊、應用軟體開發等領域，結合專業技術，為企業客戶規劃建置資訊通訊系統架構，導入在CRM、ERP、MES專業顧問諮詢，提供優質售後服務，以協助企業發揮最大的營運效益。"
      case AboutEnum.VISION:
        return "透過經營理念，達成公司使命「整合全球科技，為客戶增加價值」，提供區塊鍊、雲端技術及整合通訊專業服務，成為多地最具競爭力的資通訊系統建置服務公司。協助政府及企業進行數位轉型、增進營運效能及決策分析；提供智慧化解決方案、顧問服務、雲端服務、資通訊系統整合建置、保障資料安全及不間斷服務。"
      case AboutEnum.VALUE:
        return "誠信是公司永續經營的基石與責任。我們本著誠信原則，如期、如質、如預算的交付我們的服務，並以高品質的交付為榮。秉持專心、專研的精神，與世界領導品牌維持長期穩定的關係，取得紮實的經驗與最新的技術，提供客戶高品質的產品與服務，協助客戶掌握趨勢。"
    }
  }

  return (
    <CommonSection className="border-b-[24px] border-t-[24px] border-primary bg-info">
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "30%",
          height: "100%",
          backgroundColor: "#002659",
          clipPath: "polygon(0% 0%, 100% 0%, 50% 100%, 0% 100%)",
          zIndex: 1,
        }}
      >
        <div className="flex h-full w-full flex-col items-end justify-center gap-3 pb-32 text-center text-2xl font-bold leading-9 text-primary">
          <div
            className={`about-title w-2/3 bg-secondary py-4 pr-8 ${AboutEnum.INTRODUCTION === title ? "opacity-100" : "opacity-50"}`}
            onClick={() => setTitle(AboutEnum.INTRODUCTION)}
          >
            公司簡介
          </div>
          <div
            className={`about-title w-2/3 -translate-x-[42px] bg-secondary py-4 pr-8 ${AboutEnum.VISION === title ? "opacity-100" : "opacity-50"}`}
            onClick={() => setTitle(AboutEnum.VISION)}
          >
            企業願景
          </div>
          <div
            className={`about-title b w-2/3 -translate-x-[84px] bg-secondary py-4 pr-8 ${AboutEnum.VALUE === title ? "opacity-100" : "opacity-50"}`}
            onClick={() => setTitle(AboutEnum.VALUE)}
          >
            核心價值
          </div>
        </div>
      </Box>
      <div className="mx-auto w-11/12 justify-center text-center lg:w-4/5 xl:w-[1096px]">
        <div className="title" data-title="關於麥點">
          About Us
        </div>
        <div className="mb-24 ml-auto mt-[70px] w-2/3 text-start">
          <div className="mb-3 text-2xl font-bold leading-9 tracking-wide text-primary">
            {renderSubTitle()}
          </div>
          <p className="min-h-[140px] text-lg font-medium tracking-widest text-[#262626]">
            {renderDescription()}
          </p>
        </div>
      </div>
      <p className="section-title left-8 text-end">About Us</p>
    </CommonSection>
  )
}
