import React from "react"
import { Box } from "@mui/material"

export type CommonSectionProps = {
  children: React.ReactNode
  className: string
}

export const CommonSection: React.FC<CommonSectionProps> = ({
  children,
  className,
}) => (
  <Box
    className={className}
    sx={{
      position: "relative",
      zIndex: 10,
      width: "100%",
      height: "100%",
      paddingTop: 20,
      paddingBottom: 40,
    }}
  >
    {children}
  </Box>
)
