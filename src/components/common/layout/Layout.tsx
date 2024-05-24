import React, { PropsWithChildren } from "react"
import { ThemeProvider } from "@mui/material"
import { materialTheme } from "@/theme/materialTheme"
import "@/core/plugins/i18next"

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider theme={materialTheme}>
      <main>{children}</main>
    </ThemeProvider>
  )
}
