import React from "react"
import { styled } from "@mui/material/styles"
import { ListItemButton } from "@mui/material"
import { ListItemButtonProps } from "@mui/material/ListItemButton"

export const CustomListItemButton: React.FC<ListItemButtonProps> = styled(
  props => <ListItemButton {...props} />,
)(({ theme }) => ({
  "&.MuiListItemButton-root": {
    display: "flex",
    alignItems: "center",
    color: "white",
    padding: "20px 24px",
    fontSize: "1.25rem",
    lineHeight: 1,
    fontWeight: 500,
  },
  "&.MuiListItemButton-root.Mui-selected": {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
  },
}))
