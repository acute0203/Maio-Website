import React, { useState } from "react"
import { Drawer, List, ListItemButton, Collapse } from "@mui/material"
import { CustomListItemButton } from "./custom/CustomListItemButton"
import CloseIcon from "@mui/icons-material/Close"
import { useNavigate, useLocation } from "react-router-dom"
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded"
import { productsMenus, langMenus } from "@/core/constant/menu"

export type CommonDrawerProps = {
  anchorDrawer: null | HTMLElement
  setAnchorDrawer: React.Dispatch<React.SetStateAction<HTMLElement | null>>
  changeLanguage: (lang: string) => void
}

export const CommonDrawer: React.FC<CommonDrawerProps> = ({
  anchorDrawer,
  setAnchorDrawer,
  changeLanguage,
}) => {
  const [productsOpen, setProductsOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const handleNavigate = (path: string) => {
    navigate(path)
    setAnchorDrawer(null)
  }

  return (
    <Drawer
      anchor="right"
      open={Boolean(anchorDrawer)}
      onClose={() => setAnchorDrawer(null)}
    >
      <div className="h-full w-screen bg-primary">
        <div className="shadow-header flex items-center justify-between px-2 py-4">
          <img
            src="/images/logo.png"
            alt="logo"
            width={128}
            className="px-4 py-2"
            onClick={() => {
              navigate("/")
              setAnchorDrawer(null)
            }}
          />
          <div
            className="px-4 py-2"
            onClick={() => {
              setAnchorDrawer(null)
              setLangOpen(false)
              setProductsOpen(false)
            }}
          >
            <CloseIcon color="secondary" fontSize="large" />
          </div>
        </div>
        <List disablePadding component="nav">
          <CustomListItemButton
            selected={location.pathname === "/"}
            onClick={() => handleNavigate("/")}
          >
            首頁
          </CustomListItemButton>
          <CustomListItemButton
            onClick={() => {
              setProductsOpen(!productsOpen)
              setLangOpen(false)
            }}
          >
            產品與服務
            <ExpandMoreRoundedIcon
              sx={{
                marginLeft: 2,
              }}
            />
          </CustomListItemButton>
          <Collapse in={productsOpen} timeout="auto" unmountOnExit>
            <List component="ul" disablePadding>
              {productsMenus.map(item => (
                <ListItemButton
                  key={item.label}
                  component="li"
                  sx={{
                    color: "white",
                    padding: "12px 48px",
                  }}
                  onClick={() => {
                    window.location.href = `/service#${item.path}`
                    setAnchorDrawer(null)
                    setLangOpen(false)
                  }}
                >
                  {item.label}
                </ListItemButton>
              ))}
            </List>
          </Collapse>
          <CustomListItemButton onClick={() => handleNavigate("/hire")}>
            菁英招募
          </CustomListItemButton>
          <CustomListItemButton onClick={() => handleNavigate("/contact")}>
            聯絡我們
          </CustomListItemButton>
          <CustomListItemButton
            onClick={() => {
              setLangOpen(!langOpen)
              setProductsOpen(false)
            }}
          >
            語言
            <ExpandMoreRoundedIcon
              sx={{
                marginLeft: 2,
              }}
            />
          </CustomListItemButton>
          <Collapse in={langOpen} timeout="auto" unmountOnExit>
            <List component="ul" disablePadding>
              {langMenus.map(item => (
                <ListItemButton
                  key={item.name}
                  component="li"
                  sx={{
                    color: "white",
                    padding: "12px 48px",
                  }}
                  onClick={() => {
                    changeLanguage(item.translation)
                    setAnchorDrawer(null)
                  }}
                >
                  {item.name}
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        </List>
      </div>
    </Drawer>
  )
}
