import React from "react"
import { CardData } from "@/core/constant/menu"

export type ServiceCardProps = {
  data: CardData
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ data }) => {
  return (
    <div className="shadow-card rounded-lg bg-gradient-to-r from-secondary to-[#00F0FF] p-px">
      <div className="flex h-full w-full flex-col items-center justify-center rounded-[calc(0.5rem-1px)] bg-white p-5">
        <img
          src={data.icon}
          alt={data.title}
          className="w-1/3 object-cover py-5"
        />
        <div className="card-title mb-8 mt-4 text-2xl font-bold leading-7 text-[#262626]">
          {data.title}
        </div>
        <p className="mb-4 text-start text-lg text-[#5A5A5A]">
          {data.description}
        </p>
        <div className="btn-more cursor-pointer self-end font-roboto text-xl italic transition-all hover:scale-105 hover:transform">
          more&gt;
        </div>
      </div>
    </div>
  )
}
