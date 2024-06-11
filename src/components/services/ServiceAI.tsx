import React from "react"
import { Box, useTheme } from "@mui/material"
import { useNavigate } from "react-router-dom"

export const ServiceAI: React.FC = () => {
  const { palette, breakpoints } = useTheme()
  const navigate = useNavigate()

  return (
    <Box
      id="AI"
      sx={{
        position: "relative",
        bgcolor: palette.primary.main,
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
        <div className="shadow-section rounded-xl bg-info bg-gradient-to-r from-secondary to-primary-light p-px">
          <div className="h-full w-full rounded-[calc(0.75rem-1px)] bg-info p-5 sm:px-24 sm:py-8">
            <div className="flex flex-col items-center px-5 py-4 sm:flex-row-reverse sm:p-5">
              <img
                src="/images/service-04.png"
                alt="service"
                className="service-icon px-3 py-10 sm:py-0"
              />
              <div className="title-border-right font-roboto sm:mr-11">
                <p className="text-gradient inline-block font-black italic">
                  Artificial Intelligence and Big Data
                </p>
                <p className="text-stroke-info my-3 text-4xl font-black text-primary">
                  人工智慧與大數據
                </p>
                <p className="text-lg leading-9 tracking-wide text-dark">
                  我們整合人工智慧和大數據技術，以提高業務效率和決策準確性，為企業帶來更多價值。以下是我們的服務項目：
                </p>
              </div>
            </div>
            <ul className="px-5 leading-9 tracking-wide text-[#5A5A5A] sm:px-0">
              <li>
                <span className="font-bold text-primary">•預測分析：</span>
                利用大數據和機器學習，預測未來趨勢與行為，幫助企業做出更準確的決策。
              </li>
              <li>
                <span className="font-bold text-primary">
                  •個性化推薦系統：
                </span>
                通過分析客戶數據和行為模式，提供個性化的產品服務，提高滿意度。
              </li>
              <li>
                <span className="font-bold text-primary">•自然語言處理：</span>
                利用自然語言處理技術，分析大量數據，提取有價值的信息，用於搜索、分析等應用。
              </li>
              <li>
                <span className="font-bold text-primary">
                  •智能數據分析平台：
                </span>
                構建智能數據分析平台，集成大數據處理、可視化和報告功能，幫助企業快速理解和利用數據資源。
              </li>
              <li>
                <span className="font-bold text-primary">•智能客服系統：</span>
                應用自然語言處理和機器學習，建立智能客服自動回答常見問題，提高效率和滿意度。
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
