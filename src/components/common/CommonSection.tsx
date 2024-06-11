import React from "react"
import { Box, useTheme } from "@mui/material"

export type CommonSectionProps = {
  children: React.ReactNode
  className: string
}

export const CommonSection: React.FC<CommonSectionProps> = ({
  children,
  className,
}) => {
  const { breakpoints } = useTheme()

  return (
    <Box
      className={className}
      sx={{
        position: "relative",
        zIndex: 10,
        width: "100%",
        height: "100%",
        paddingTop: 20,
        paddingBottom: 40,
        [breakpoints.down("sm")]: {
          paddingTop: 12,
          paddingBottom: 20,
        },
      }}
    >
      {children}
    </Box>
  )
}
