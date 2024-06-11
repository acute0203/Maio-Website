import React, { useState, useEffect } from "react"
import { Box } from "@mui/material"
import { NavItem } from "../home/widget/NavItem"
import { LanguageWrapper } from "./LanguageWrapper"
import { ProductsWrapper } from "./ProductsWrapper"
import { useTranslation } from "react-i18next"
import { useLocation, useNavigate } from "react-router-dom"
import { cn } from "@/core/utils/cn"
import MenuIcon from "@mui/icons-material/Menu"
import { CommonDrawer } from "./CommonDrawer"

export const Header: React.FC = () => {
  const [scroll, setScroll] = useState(false)
  const [anchorDrawer, setAnchorDrawer] = useState<null | HTMLElement>(null)
  const location = useLocation()
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang).catch()
  }

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
      className={cn(
        "sticky top-0 z-50 flex w-full flex-0 items-center justify-between px-4 py-4 sm:px-10",
        location.pathname === "/" ? "bg-transparent" : "bg-primary",
        scroll ? "shadow-header bg-primary" : "",
      )}
    >
      <img
        src="/images/logo.png"
        alt="logo"
        width={158}
        className="cursor-pointer px-4 py-2"
        onClick={() => navigate("/")}
      />
      <Box component="ul" className="hidden items-center text-info lg:flex">
        <NavItem path="/" active={location.pathname === "/"}>
          {t("home")}
        </NavItem>
        <ProductsWrapper active={location.pathname === "/service"} />
        <NavItem path="/hire" active={location.pathname === "/hire"}>
          菁英招募
        </NavItem>
        <NavItem path="/contact" active={location.pathname === "/contact"}>
          聯絡我們
        </NavItem>
        <LanguageWrapper />
      </Box>
      {/* Drawer */}
      <div
        className="inline-flex h-full items-center lg:hidden"
        onClick={event => setAnchorDrawer(event.currentTarget)}
      >
        <MenuIcon color="secondary" fontSize="large" />
      </div>
      <CommonDrawer
        anchorDrawer={anchorDrawer}
        setAnchorDrawer={setAnchorDrawer}
        changeLanguage={changeLanguage}
      />
    </Box>
  )
}
