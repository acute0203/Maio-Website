import React, { useState } from "react"
import LanguageIcon from "@mui/icons-material/Language"
import { langMenus } from "@/core/constant/menu"
import { useTranslation } from "react-i18next"
import { CommonMenu } from "@/components/common/CommonMenu"

export const LanguageWrapper: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const { t, i18n } = useTranslation()

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang).catch()
    handleClose()
  }

  return (
    <>
      <div
        className="inline-flex cursor-pointer items-center"
        onClick={handleClick}
      >
        <LanguageIcon />
      </div>
      <CommonMenu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {langMenus.map(lang => (
          <div
            key={lang.name}
            className="relative rounded px-3 py-4 font-medium leading-5 transition-colors first:mb-2 hover:cursor-pointer hover:bg-secondary hover:text-primary"
            onClick={() => changeLanguage(lang.translation)}
          >
            {t(lang.name)}
          </div>
        ))}
      </CommonMenu>
    </>
  )
}
