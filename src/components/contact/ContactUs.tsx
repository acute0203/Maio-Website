import React, { useState } from "react"
import { Box, useTheme } from "@mui/material"
import EmailIcon from "@mui/icons-material/Email"
import { LineIcon } from "@/components/common/CommonIcon"

export const ContactUs: React.FC = () => {
  const { palette, breakpoints } = useTheme()
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
    <Box
      sx={{
        position: "relative",
        bgcolor: palette.secondary.main,
        zIndex: 1,
        width: "100%",
        height: "100%",
        paddingTop: 12,
        paddingBottom: 40,
        [breakpoints.down("sm")]: {
          paddingBottom: 20,
        },
      }}
    >
      <div className="mx-auto w-5/6 justify-center text-center lg:w-4/5 xl:w-[1096px]">
        <div className="title" data-title="聯絡我們">
          Contact Us
        </div>
        <p className="mx-auto mt-12 w-2/3 font-bold text-dark sm:mt-20 sm:w-full">
          有任何疑問歡迎詢問我們，請在表單中填寫您的聯絡資訊與問題，謝謝！
        </p>
        <div className="flex items-center justify-center gap-x-20">
          <div className="my-9">
            <div className="shadow-icon mb-3 inline-flex aspect-square items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary p-5">
              <EmailIcon />
            </div>
            <div className="text-sm font-bold text-dark">i@maio.co</div>
          </div>
          <div>
            <div className="shadow-icon mb-3 inline-flex aspect-square items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary p-5">
              <LineIcon />
            </div>
            <div className="text-sm font-bold text-dark">maio</div>
          </div>
        </div>
        <form className="mx-auto w-full sm:w-2/3" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-y-5 sm:flex-row sm:gap-x-10">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-none bg-white p-2 text-dark sm:w-1/2"
              placeholder="您的姓名"
            />
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-none bg-white p-2 text-dark sm:w-1/2"
              placeholder="Email"
            />
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="my-5 min-h-[240px] w-full rounded-none bg-white p-2 text-dark"
            placeholder="問題描述"
          />
          <button type="submit" className="btn-gradient">
            送出
          </button>
        </form>
      </div>
      <p className="section-title left-8 text-end">Contact Us</p>
    </Box>
  )
}
