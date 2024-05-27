import React from "react"
import { useNavigate } from "react-router-dom"

export type NavItemProps = {
  path: string
  children: React.ReactNode
}

export const NavItem: React.FC<NavItemProps> = ({ path, children }) => {
  const navigate = useNavigate()

  return (
    <li
      className="inline-flex items-center px-5 py-2 font-medium leading-6 transition-all hover:cursor-pointer hover:font-bold hover:text-secondary hover:underline"
      onClick={() => navigate(path)}
    >
      {children}
    </li>
  )
}
