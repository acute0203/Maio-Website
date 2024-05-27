import React, { useState, useEffect } from "react"
import { Box } from "@mui/material"
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded"
import { NavItem } from "../home/widget/NavItem"
import { LanguageWrapper } from "./LanguageWrapper"
import { useTranslation } from "react-i18next"
import { useLocation } from "react-router-dom"

export const Header: React.FC = () => {
  const [scroll, setScroll] = useState(false)
  const location = useLocation()
  const { t } = useTranslation()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <Box
      component="header"
      className={`sticky top-0 z-50 flex w-full flex-0 items-center justify-between px-4 py-4 sm:px-10 ${location.pathname === "/" ? "bg-transparent" : "bg-primary"} ${scroll ? "shadow-card" : ""}`}
    >
      <img src="/images/logo.png" alt="logo" width={140} />
      <Box component="ul" className="flex items-center text-info">
        <NavItem path="/">{t("home")}</NavItem>
        <NavItem path="/products">
          產品與服務
          <ExpandMoreRoundedIcon />
        </NavItem>
        <NavItem path="/hire">菁英招募</NavItem>
        <NavItem path="/contact">聯絡我們</NavItem>
        <LanguageWrapper />
      </Box>
    </Box>
  )
}
