import React, { useState } from "react"
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded"
import { productsMenus } from "@/core/constant/menu"
import { CommonMenu } from "@/components/common/CommonMenu"
import { cn } from "@/core/utils/cn"

export type ProductsWrapperProps = {
  active: boolean
}

export const ProductsWrapper: React.FC<ProductsWrapperProps> = ({ active }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <div
        className={cn(
          "inline-flex cursor-pointer items-center py-2 pl-5 hover:text-secondary hover:underline",
          {
            "text-secondary underline": active,
          },
        )}
        onClick={handleClick}
      >
        產品與服務
        <ExpandMoreRoundedIcon
          className={cn({
            "rotate-180": !!anchorEl,
          })}
        />
      </div>
      <CommonMenu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {productsMenus.map(item => (
          <div
            key={item.label}
            className="relative rounded px-3 py-4 font-medium leading-5 transition-colors first:mb-2 hover:cursor-pointer hover:bg-secondary hover:text-primary"
            onClick={() => {
              window.location.href = `/service#${item.path}`
              handleClose()
            }}
          >
            {item.label}
          </div>
        ))}
      </CommonMenu>
    </>
  )
}
