import React from "react"
import { Box, useTheme } from "@mui/material"

export const ProductFintech: React.FC = () => {
  const { palette } = useTheme()

  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: palette.primary.main,
        zIndex: 1,
        width: "100%",
        height: "100%",
        paddingY: 20,
      }}
    >
      <div className="mx-auto w-11/12 justify-center lg:w-4/5 xl:w-[1096px]">
        <div className="shadow-section rounded-xl bg-info bg-gradient-to-r from-secondary to-[#00F0FF] p-px">
          <div className="h-full w-full rounded-[calc(0.75rem-1px)] bg-info px-24 py-8">
            <div className="flex flex-row-reverse items-center p-5">
              <img
                src="/images/service-06.png"
                alt="service"
                className="service-icon px-3"
              />
              <div className="title-border-right mr-11 font-roboto">
                <p className="text-gradient inline-block font-black italic">
                  Fintech
                </p>
                <p className="text-stroke-info my-3 text-4xl font-black text-primary">
                  Fintech金融科技
                </p>
                <p className="text-lg leading-9 tracking-wide text-[#262626]">
                  用新科技改進金融服務。提供安全數位支付，區塊鏈的支付和資產管理方案，及線上貸款平台。這些創新技術提高金融效率。
                </p>
              </div>
            </div>
            <ul className="leading-9 tracking-wide text-[#5A5A5A]">
              <li>
                <span className="font-bold text-primary">•數位支付系統：</span>
                提供安全、方便的數位支付解決方案，包括電子錢包、移動支付應用程式等。
              </li>
              <li>
                <span className="font-bold text-primary">
                  •數據分析和風險管理：
                </span>
                利用大數據和人工智慧技術，進行客戶信用評估、風險管理和市場分析。
              </li>
              <li>
                <span className="font-bold text-primary">
                  •區塊鏈技術應用：
                </span>
                開發區塊鏈的支付系統、智能合約和數字資產管理平台，提高交易安全性和透明度。
              </li>
              <li>
                <span className="font-bold text-primary">•在線貸款平台：</span>
                提供在線貸款服務，利用數據分析和信用評估技術審批貸款申請。
              </li>
              <li>
                <span className="font-bold text-primary">
                  •數位貨幣交易所：
                </span>
                提供加密貨幣的交易和管理平台，支持加密貨幣的交易、存儲和管理。
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
