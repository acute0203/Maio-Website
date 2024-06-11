import React from "react"
import { Box, useTheme } from "@mui/material"

export const Philosophy: React.FC = () => {
  const { palette } = useTheme()

  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: palette.secondary.main,
        zIndex: 1,
        width: "100%",
        height: "100%",
        paddingTop: 12,
        paddingBottom: 20,
      }}
    >
      <div className="mx-auto w-5/6 justify-center text-center lg:w-4/5 xl:w-[806px]">
        <div className="title mb-16" data-title="經營理念">
          Business Philosophy
        </div>
        <div className="w-full text-primary">
          <p className="mb-4 text-[26px] font-bold leading-9 sm:mb-3">
            鏈結未來，一步一里，
            <br className="sm:hidden" />
            編織智慧新世界
          </p>
          <p className="mx-auto w-full text-sm tracking-wider sm:w-1/2">
            Chain the Future, One Mile, One Footprint,
            <br /> Weaving a World of Intelligent Technology
          </p>
        </div>
        <div className="my-10 text-start text-lg leading-8 tracking-wider text-primary sm:my-12">
          透過我們的經營理念，麥點數位科技致力於實現公司使命「整合全球科技，為客戶增加價值」，成為多地最具競爭力的資通訊系統建置服務公司。
          <br />
          我們提供區塊鍊、雲端技術及整合通訊專業服務，協助政府及企業進行數位轉型、增進營運效能及決策分析。我們以誠信為公司永續經營的基石與責任，秉持專心、專研的精神與世界領導品牌維持長期穩定的關係，提供客戶高品質的產品與服務，協助客戶掌握趨勢。
        </div>
        <div className="grid gap-y-10 sm:gap-y-0 lg:grid-cols-3">
          <div className="flex flex-col items-center justify-between">
            <div className="shadow-icon flex aspect-square h-[120px] w-[120px] flex-col items-center justify-center rounded-full bg-white tracking-wide">
              <p className="contact-title mb-4 font-roboto text-xl font-black italic leading-[22px] tracking-wide">
                DEPTH
              </p>
              <p className="text-xl font-bold leading-5 tracking-widest text-primary">
                深度
              </p>
            </div>
            <div className="mt-4 font-bold leading-6 text-primary">
              無限寬廣的
              <br />
              未來趨勢發展空間
            </div>
          </div>
          <div className="flex flex-col items-center justify-between">
            <div className="shadow-icon flex aspect-square h-[120px] w-[120px] flex-col items-center justify-center rounded-full bg-white tracking-wide">
              <p className="contact-title mb-4 font-roboto text-xl font-black italic leading-[22px] tracking-wide">
                LATITUDE
              </p>
              <p className="text-xl font-bold leading-5 tracking-widest text-primary">
                氣度
              </p>
            </div>
            <div className="mt-4 font-bold leading-6 text-primary">
              極具豐厚獎勵與福利
              <br />
              &nbsp;
            </div>
          </div>
          <div className="flex flex-col items-center justify-between">
            <div className="shadow-icon flex aspect-square h-[120px] w-[120px] flex-col items-center justify-center rounded-full bg-white tracking-wide">
              <p className="contact-title mb-4 font-roboto text-xl font-black italic leading-[22px] tracking-wide">
                HONOR
              </p>
              <p className="text-xl font-bold leading-5 tracking-widest text-primary">
                榮譽度
              </p>
            </div>
            <div className="mt-4 font-bold leading-6 text-primary">
              與一流優秀
              <br />
              專業人員為伍
            </div>
          </div>
        </div>
      </div>
    </Box>
  )
}
