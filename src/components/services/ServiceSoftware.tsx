import React from "react"
import { Box, useTheme } from "@mui/material"
import { useNavigate } from "react-router-dom"

export const ServiceSoftware: React.FC = () => {
  const { palette, breakpoints } = useTheme()
  const navigate = useNavigate()

  return (
    <Box
      id="software"
      sx={{
        position: "relative",
        bgcolor: palette.secondary.main,
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
          <div className="h-full w-full rounded-[calc(0.75rem-1px)] bg-[#ffffffe6] p-5 sm:px-24 sm:py-8">
            <div className="flex flex-col items-center px-5 py-4 sm:flex-row sm:p-5">
              <img
                src="/images/service-01.png"
                alt="service"
                className="service-icon px-3 py-10 sm:py-0"
              />
              <div className="title-border-left font-roboto sm:ml-11">
                <p className="text-gradient inline-block font-black italic">
                  Software System Development and Integration
                </p>
                <p className="text-stroke-info my-3 text-4xl font-black text-primary">
                  軟體系統開發與整合
                </p>
                <p className="text-lg leading-9 tracking-wide text-dark">
                  軟體系統開發與整合是我們的核心服務之一，我們為客戶提供完整的軟體開發生命周期解決方案。我們的服務涵蓋了以下方面：
                </p>
              </div>
            </div>
            <div className="leading-9 tracking-wide text-[#5A5A5A]">
              <ul className="mb-8 px-5 sm:mb-16 sm:px-0">
                <li>
                  <span className="font-bold text-primary">•需求分析：</span>
                  與客戶密切合作，深入瞭解其業務需求和目標，確定最佳解決方案。
                </li>
                <li>
                  <span className="font-bold text-primary">•軟體設計：</span>
                  設計團隊將根據需求分析的結果設計出最佳的軟體架構和功能。
                </li>
                <li>
                  <span className="font-bold text-primary">•軟體開發：</span>
                  開發團隊將根據設計團隊的設計，開發出高質量、可靠性強的軟體。
                </li>
                <li>
                  <span className="font-bold text-primary">•測試與驗證：</span>
                  對軟體進行全面的測試和驗證，確保其符合需求和標準。
                </li>
                <li>
                  <span className="font-bold text-primary">•整合與部署：</span>
                  將軟體整合到現有系統中，並將其部署到客戶的環境中。
                </li>
                <li>
                  <span className="font-bold text-primary">•支援與維護：</span>
                  提供長期的支援和維護，確保軟體的穩定運行和持續改進。
                </li>
              </ul>
              <div>
                軟體系統開發與整合是我們的核心服務之一，我們提供各種定制化的解決方案，包括企業資源計劃系統（ERP）、客戶關係管理系統（CRM）、供應鏈管理系統（SCM）、辦公自動化系統（OA）和各種客製化應用程式。我們的服務從需求分析到設計開發再到整合部署，都致力於為客戶提供高效率、高品質的解決方案，協助企業提升業務效率和管理水平。
              </div>
            </div>
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
