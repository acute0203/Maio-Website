import React from "react"
import { CommonSection } from "@/components/common/CommonSection"
import { ProductsItem } from "./ProductsItem"
import { productsItemsMenus } from "@/core/constant/menu"
import { useNavigate } from "react-router-dom"

export const ProductsContent: React.FC = () => {
  const navigate = useNavigate()

  return (
    <CommonSection className="bg-primary md:bg-white">
      <div className="mx-auto w-5/6 justify-center lg:w-4/5 xl:w-[1096px]">
        <div className="flex flex-col gap-y-10">
          {productsItemsMenus.map(menu => (
            <ProductsItem
              key={menu.title}
              image={menu.image}
              title={menu.title}
              description={menu.description}
              flexDirection={menu.flexDirection}
              borderDirection={menu.borderDirection}
            />
          ))}
        </div>
        <div className="mt-10 hidden text-center md:block">
          <button
            className="btn-gradient text-center"
            onClick={() => navigate("/contact")}
          >
            聯絡我們
          </button>
        </div>
      </div>
    </CommonSection>
  )
}
