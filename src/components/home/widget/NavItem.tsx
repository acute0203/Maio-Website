import React from "react"

export type NavItemProps = {
  children: React.ReactNode
}

export const NavItem: React.FC<NavItemProps> = ({ children }) => {
  return (
    <li className="inline-flex items-center px-5 py-2 font-medium leading-6 transition-all hover:cursor-pointer hover:font-bold hover:text-secondary hover:underline">
      {children}
    </li>
  )
}
