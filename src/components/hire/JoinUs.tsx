import React from "react"
import { Box, useTheme } from "@mui/material"

export const JoinUs: React.FC = () => {
  const { palette } = useTheme()

  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: palette.primary.main,
        zIndex: 1,
        width: "100%",
        height: "100%",
        paddingTop: 20,
        paddingBottom: 24,
      }}
    >
      <div className="mx-auto w-5/6 justify-center text-center lg:w-4/5 xl:w-[806px]">
        <div className="title mb-16" data-title="加入我們">
          Join Us
        </div>
        <div className="mb-14 mt-16 text-lg font-bold leading-8 tracking-wide text-white">
          你了解WEB 3.0嗎?
          <br />
          你知道未來趨勢嗎?
          <br />
          我們是一間科技新創公司，集結了多元專業人員，創造非凡價值與跨世代的技術，
          <br />
          歡迎喜歡挑戰、快速適應新事物的你加入。
        </div>
        <button className="btn-gradient">職缺介紹</button>
      </div>
    </Box>
  )
}
