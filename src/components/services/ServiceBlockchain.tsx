import React from "react"
import { Box, useTheme } from "@mui/material"
import { useNavigate } from "react-router-dom"

export const ServiceBlockchain: React.FC = () => {
  const { palette, breakpoints } = useTheme()
  const navigate = useNavigate()

  return (
    <Box
      id="blockchain"
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
                src="/images/service-02.png"
                alt="service"
                className="service-icon px-3 py-10 sm:py-0"
              />
              <div className="title-border-right font-roboto sm:mr-11">
                <p className="text-gradient inline-block font-black italic">
                  Blockchain Application Development
                </p>
                <p className="text-stroke-info my-3 text-4xl font-black text-primary">
                  區塊鏈應用開發
                </p>
                <p className="text-lg leading-9 tracking-wide text-dark">
                  基於區塊鏈技術開發應用程式或解決方案，改善現有業務流程、增加安全性和透明度，以下是區塊鏈應用開發的一些營業項目：
                </p>
              </div>
            </div>
            <ul className="px-5 leading-9 tracking-wide text-[#5A5A5A] sm:px-0">
              <li>
                <span className="font-bold text-primary">
                  •供應鏈追溯系統：
                </span>
                利用區塊鏈技術追蹤產品的生產、運輸和銷售過程，確保產品的真實性和品質。
              </li>
              <li>
                <span className="font-bold text-primary">•數位身份管理：</span>
                建立基於區塊鏈的身份驗證系統，確保個人資料的安全性和私密性。
              </li>
              <li>
                <span className="font-bold text-primary">•智能合約開發：</span>
                設計和實施智能合約，自動執行合約條款，提高合約執行的效率和可靠性。
              </li>
              <li>
                <span className="font-bold text-primary">
                  •去中心化金融（DeFi）應用：
                </span>
                開發基於區塊鏈的金融產品和服務，如去中心化交易所、借貸平台等。
              </li>
              <li>
                <span className="font-bold text-primary">•數字資產管理：</span>
                建立安全可靠的平台，管理和交易各種加密貨幣和數字資產。
              </li>
              <li>
                <span className="font-bold text-primary">
                  •區塊鏈投票系統：
                </span>
                開發安全的區塊鏈投票系統，確保投票的透明度和公正性。
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
