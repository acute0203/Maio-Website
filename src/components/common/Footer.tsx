import React from "react"
import { Box } from "@mui/material"
import { LineIcon } from "./CommonIcon"
import InstagramIcon from "@mui/icons-material/Instagram"

export const Footer: React.FC = () => {
  return (
    <Box component="footer" className="relative bg-primary">
      <div className="mx-auto flex w-5/6 flex-col justify-between py-10 sm:flex-row lg:w-4/5 xl:w-[1292px]">
        <div>
          <img src="/images/logo.png" alt="png" width={147} />
          <div className="mt-5 font-medium tracking-widest">
            <p className="text-[18px]">麥點數位科技有限公司</p>
            <p className="text-[15px] text-secondary">Maio.co., LTD</p>
          </div>
        </div>
        <ul className="flex gap-x-5">
          <div className="hidden gap-x-5 sm:flex">
            <li>
              <p className="mb-3 font-bold leading-[22px] text-secondary">
                關於我們
              </p>
              <p className="text-sm">首頁</p>
            </li>
            <li>
              <p className="mb-3 font-bold leading-[22px] text-secondary">
                產品項目
              </p>
              <ul className="text-sm leading-6">
                <li>軟體系統開發與整合</li>
                <li>區塊鏈應用開發</li>
                <li>雲端服務管理</li>
                <li>人工智慧與大數據</li>
                <li>數位轉型與創新</li>
                <li>Fintech 金融科技</li>
              </ul>
            </li>
            <li>
              <p className="mb-3 font-bold leading-[22px] text-secondary">
                菁英招募
              </p>
              <ul className="text-sm leading-6">
                <li>企業理念</li>
                <li>職缺招募</li>
              </ul>
            </li>
          </div>
          <li className="mt-5 sm:mt-0">
            <p className="mb-3 font-bold leading-[22px] text-secondary">
              聯絡我們
            </p>
            <ul className="flex gap-x-2">
              <li className="inline-flex items-center justify-center rounded-full border p-2">
                <LineIcon
                  sx={{
                    fontSize: "16px",
                  }}
                />
              </li>
              <li className="inline-flex items-center justify-center rounded-full border p-2">
                <InstagramIcon
                  sx={{
                    fontSize: "16px",
                  }}
                />
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="py-4 text-center text-sm font-medium text-[#B1B1B1]">
        Copyright © 麥點數位科技有限公司 統一編號：90894992
      </div>
    </Box>
  )
}
