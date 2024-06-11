import { cn } from "@/core/utils/cn"
import React from "react"
import { useNavigate } from "react-router-dom"

export type ProductsItemProps = {
  image: string
  title: string
  description: string
  flexDirection: string
  borderDirection: string
}

export const ProductsItem: React.FC<ProductsItemProps> = ({
  image,
  title,
  description,
  flexDirection,
  borderDirection,
}) => {
  const navigate = useNavigate()

  return (
    <div
      className={cn(
        "shadow-card rounded-lg bg-gradient-to-r from-secondary to-primary-light p-px hover:bg-gradient-to-l",
        "md:rounded-none md:bg-none md:p-0 md:shadow-none md:hover:bg-none",
      )}
    >
      <div
        className={cn(
          "flex h-full w-full rounded-[calc(0.5rem-1px)] bg-white p-5",
          "md:gap-x-11 md:rounded-none md:p-0",
          flexDirection,
        )}
      >
        <img
          src={image}
          alt="product"
          className={cn("w-full pb-10", "md:w-1/5 md:flex-1 md:pb-0")}
        />
        <div className={cn("w-full", "md:w-4/5 md:flex-0", borderDirection)}>
          <div className="text-stroke-info mb-4 text-4xl font-black italic text-primary">
            {title}
          </div>
          <div className="text-lg tracking-wide text-dark">{description}</div>
        </div>
        <div className="mt-10 text-center md:hidden">
          <button
            className="btn-gradient text-center"
            onClick={() => navigate("/contact")}
          >
            聯絡我們
          </button>
        </div>
      </div>
    </div>
  )
}
