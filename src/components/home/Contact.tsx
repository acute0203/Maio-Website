import React, { useState } from "react"
import { Box } from "@mui/material"
import { CommonSection } from "@/components/common/CommonSection"
import EmailIcon from "@mui/icons-material/Email"
import { LineIcon } from "@/components/common/CommonIcon"

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <CommonSection className="bg-secondary">
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "30%",
          height: "100%",
          backgroundColor: "#002659",
          clipPath: "polygon(0% 0%, 100% 0%, 50% 100%, 0% 100%)",
          zIndex: -1,
        }}
      />
      <div className="mx-auto w-11/12 justify-center text-center lg:w-4/5 xl:w-[1096px]">
        <div className="title" data-title="聯絡我們">
          Contact Us
        </div>
        <p className="mt-20 font-bold text-[#262626]">
          有任何疑問歡迎詢問我們，請在表單中填寫您的聯絡資訊與問題，謝謝！
        </p>
        <div className="flex items-center justify-center gap-x-20">
          <div className="my-9">
            <div className="shadow-icon mb-3 inline-flex aspect-square items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary p-5">
              <EmailIcon />
            </div>
            <div className="text-sm font-bold text-[#262626]">i@maio.co</div>
          </div>
          <div>
            <div className="shadow-icon mb-3 inline-flex aspect-square items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary p-5">
              <LineIcon />
            </div>
            <div className="text-sm font-bold text-[#262626]">maio</div>
          </div>
        </div>
        <form className="mx-auto w-2/3" onSubmit={handleSubmit}>
          <div className="flex gap-x-10">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-1/2  bg-white p-2 text-[#262626]"
              placeholder="您的姓名"
            />
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-1/2  bg-white p-2 text-[#262626]"
              placeholder="Email"
            />
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="my-5 min-h-[240px] w-full  bg-white p-2 text-[#262626]"
            placeholder="問題描述"
          />
          <button type="submit" className="btn-gradient">
            送出
          </button>
        </form>
      </div>
      <p className="section-title left-8 text-end">Contact Us</p>
    </CommonSection>
  )
}
