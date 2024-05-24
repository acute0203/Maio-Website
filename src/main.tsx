import React from "react"
import ReactDOM from "react-dom/client"
import { Layout } from "@/components/common/layout/Layout"
import { BrowserRouter } from "react-router-dom"
import { RouterMap } from "./router"
import "@/styles/globals.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Layout>
      <RouterMap />
    </Layout>
  </BrowserRouter>,
)
