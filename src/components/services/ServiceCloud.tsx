import React from "react"
import { Box, useTheme } from "@mui/material"
import { useNavigate } from "react-router-dom"

export const ServiceCloud: React.FC = () => {
  const { breakpoints } = useTheme()
  const navigate = useNavigate()

  return (
    <Box
      id="cloud"
      sx={{
        position: "relative",
        bgcolor: "#ffffff",
        zIndex: 1,
        width: "100%",
        height: "100%",
        paddingY: 20,
        [breakpoints.down("sm")]: {
          paddingY: 8,
        },
      }}
    >
      <div className="mx-auto w-5/6 justify-center lg:w-4/5 xl:w-[1096px]">
        <div className="shadow-section rounded-xl bg-gradient-to-r from-secondary to-primary-light p-px">
          <div className="h-full w-full rounded-[calc(0.75rem-1px)] bg-white p-5 sm:px-24 sm:py-8">
            <div className="flex flex-col items-center px-5 py-4 sm:flex-row sm:p-5">
              <img
                src="/images/service-03.png"
                alt="service"
                className="service-icon px-3 py-10 sm:py-0"
              />
              <div className="title-border-left font-roboto sm:ml-11">
                <p className="text-gradient inline-block font-black italic">
                  Cloud Service Management
                </p>
                <p className="text-stroke-info my-3 text-4xl font-black text-primary">
                  雲端服務管理
                </p>
                <p className="text-lg leading-9 tracking-wide text-dark">
                  我們提供全面的雲端服務整合與管理解決方案，這些服務幫助企業提高業務效率、降低成本並確保安全性。
                </p>
              </div>
            </div>
            <ul className="px-5 leading-9 tracking-wide text-[#5A5A5A] sm:px-0">
              <li>
                <span className="font-bold text-primary">
                  •雲端架構設計與部署：
                </span>
                根據客戶需求設計適合的雲端架構並將應用和數據部署到雲端環境中。
              </li>
              <li>
                <span className="font-bold text-primary">
                  •雲端監控與安全：
                </span>
                建立基於區塊鏈的身份驗證系統，確保個人資料的安全性和私密性。
              </li>
              <li>
                <span className="font-bold text-primary">
                  •雲端優化與數據管理：
                </span>
                優化雲端資源使用，管理維護雲端中的數據，包括備份、恢復和合規性。
              </li>
              <li>
                <span className="font-bold text-primary">
                  •用戶支持與培訓：
                </span>
                提供用戶支持和培訓，幫助用戶熟悉和有效使用雲端服務。
              </li>
            </ul>
            <div className="mt-5 text-center">
              <button
                className="btn-gradient text-center"
                onClick={() => navigate("/products")}
              >
                產品介紹
              </button>
            </div>
          </div>
        </div>
      </div>
    </Box>
  )
}
