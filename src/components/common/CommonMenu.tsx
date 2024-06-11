import React from "react"
import { Menu } from "@mui/material"
import { MenuProps } from "@mui/material/Menu/Menu"
import { styled } from "@mui/material/styles"

export const CommonMenu = styled((props: MenuProps) => <Menu {...props} />)(
  ({ theme }) => ({
    "& .MuiPaper-root": {
      borderRadius: 8,
      minWidth: 186,
      minHeight: 88,
      padding: 0,
      background: "#002659",
      color: "#ffffff",
      boxShadow: "0px 0px 8px 0px rgba(70, 242, 152, 0.6)",
      [theme.breakpoints.down("xl")]: {
        height: 100,
      },
    },
    "& .MuiMenu-list": {
      padding: 8,
    },
  }),
)
