import React from "react"
import { CardData } from "@/core/constant/menu"
import { motion } from "framer-motion"

export type ServiceCardProps = {
  data: CardData
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ data }) => {
  return (
    <motion.div
      className="shadow-card rounded-lg bg-gradient-to-r from-secondary to-primary-light p-px hover:bg-gradient-to-l"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <div className="flex h-full w-full flex-col items-center justify-center rounded-[calc(0.5rem-1px)] bg-white p-5">
        <img
          src={data.icon}
          alt={data.title}
          className="w-1/3 object-cover py-5"
        />
        <div className="card-title mb-8 mt-4 text-2xl font-bold leading-7 text-dark">
          {data.title}
        </div>
        <p className="mb-4 text-start text-lg text-[#5A5A5A]">
          {data.description}
        </p>
        <motion.button
          className="btn-more"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          more&gt;
        </motion.button>
      </div>
    </motion.div>
  )
}
