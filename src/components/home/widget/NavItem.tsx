import React from "react"
import { useNavigate } from "react-router-dom"
import { cn } from "@/core/utils/cn"

export type NavItemProps = {
  path: string
  children: React.ReactNode
  active: boolean
}

export const NavItem: React.FC<NavItemProps> = ({ path, children, active }) => {
  const navigate = useNavigate()

  return (
    <li
      className={cn(
        "inline-flex items-center px-5 py-2 font-medium leading-6 transition-all hover:cursor-pointer hover:font-bold hover:text-secondary hover:underline",
        {
          "text-secondary underline": active,
        },
      )}
      onClick={() => navigate(path)}
    >
      {children}
    </li>
  )
}
