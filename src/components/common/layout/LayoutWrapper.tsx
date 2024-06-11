import React from "react"
import { Box } from "@mui/material"
import { Outlet } from "react-router-dom"
import { Header } from "@/components/common/Header"
import { Footer } from "@/components/common/Footer"

export const LayoutWrapper: React.FC = () => {
  return (
    <Box>
      <Header />
      <Box sx={{ minHeight: "calc(100% - 85px)" }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  )
}
