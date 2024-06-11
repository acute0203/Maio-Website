import { AboutEnum } from "@/core/enum/AboutEnum"
import { ProductsItemProps } from "@/components/products/ProductsItem"

export type CardData = {
  title: string
  description: string
  icon: string
}

export const langMenus = [
  {
    name: "zh-TW",
    translation: "zh",
  },
  {
    name: "en",
    translation: "en",
  },
]

export const productsMenus = [
  {
    label: "軟體系統開發與整合",
    path: "software",
  },
  {
    label: "區塊鏈應用開發",
    path: "blockchain",
  },
  {
    label: "雲端服務管理",
    path: "cloud",
  },
  {
    label: "人工智慧與大數據",
    path: "AI",
  },
  {
    label: "數位轉型與創新",
    path: "digital",
  },
  {
    label: "Fintech金融科技",
    path: "fintech",
  },
]

export const swiperMenus = [
  {
    id: "fintech",
    title: "金融科技",
    subTitle: "FINTECH",
    description:
      "結合金融與科技利用軟體和數據分析提供更便捷、高效和個性化的自動化金融服務。包括數字支付、區塊鏈、借貸平台、資產管理和保險等領域的創新。",
    path: "/images/slide-fintech.png",
  },
  {
    id: "ai",
    title: "A.I.與大數據",
    subTitle: "A.I.and Big Data",
    description:
      "人工智慧與大數據是我們強項，我們結合這兩大技術，幫助客戶深入挖掘數據，提升業務運營效率，並提供更準確的決策支援，助您把握商機。",
    path: "/images/slide-ai.png",
  },
  {
    id: "blockchain",
    title: "區塊鏈",
    subTitle: "BlOCKCHAIN",
    description:
      "我們提供專業的區塊鏈解決方案，從數字資產管理到供應鏈追溯，我們的技術讓信任變得無需中心，讓您的業務更具效率和透明度。",
    path: "/images/slide-blockchain.png",
  },
]

export const serviceMenus: CardData[] = [
  {
    title: "軟體系統開發與整合",
    description:
      "客製化軟體開發服務，從需求分析到軟體開發至系統上線，提供全方位的開發與解決方案。",
    icon: "/images/service-01.png",
  },
  {
    title: "區塊鏈應用開發",
    description:
      "我們擁有豐富的區塊鏈開發經驗，致力於為客戶建置安全可靠的區塊鏈與Web3應用，打造區塊鏈生態系。",
    icon: "/images/service-02.png",
  },
  {
    title: "雲端服務管理",
    description:
      "提供全面的雲端服務管理，包括架構設計、部署、監控和優化，確保您的應用在雲端運行順暢。",
    icon: "/images/service-03.png",
  },
  {
    title: "人工智慧與大數據",
    description:
      "我們整合人工智慧和大數據技術，幫助客戶挖掘數據價值，提高業務效率和決策準確性。",
    icon: "/images/service-04.png",
  },
  {
    title: "數位轉型與創新",
    description:
      "協助企業進行數位轉型，提供創新的解決方案，助力企業在數位時代蛻變整合成全方位的數位服務。",
    icon: "/images/service-05.png",
  },
  {
    title: "Fintech金融科技",
    description:
      "麥點提供金融科技和去中心化金融解決方案，幫助客戶實現金融創新和業務升級，深耕數位金融領域。",
    icon: "/images/service-06.png",
  },
]

export const aboutMenus = [
  {
    key: AboutEnum.INTRODUCTION,
    label: "公司簡介",
    className: "",
  },
  {
    key: AboutEnum.VISION,
    label: "企業願景",
    className: "-translate-x-[42px]",
  },
  {
    key: AboutEnum.VALUE,
    label: "核心價值",
    className: "-translate-x-[84px]",
  },
]

export const productsItemsMenus: ProductsItemProps[] = [
  {
    image: "/images/products-01.png",
    title: "ＯＯＸＸ CRM系統開發",
    description:
      "ＯＯＸＸ說明。CRM系統開發是指為企業開發客戶關係管理（CRM）系統的過程，旨在管理和分析客戶相關信息，包括聯繫資料、購買歷史和服務記錄，以提高客戶滿意度和市場競爭力。",
    flexDirection: "flex-col md:flex-row",
    borderDirection: "title-border-left",
  },
  {
    image: "/images/products-02.png",
    title: "ＯＸ CRM系統開發",
    description:
      "ＯＸ說明。CRM系統開發是指為企業開發客戶關係管理（CRM）系統的過程，旨在管理和分析客戶相關信息，包括聯繫資料、購買歷史和服務記錄，以提高客戶滿意度和市場競爭力。",
    flexDirection: "flex-col md:flex-row-reverse",
    borderDirection: "title-border-right",
  },
  {
    image: "/images/products-03.png",
    title: "ＸＸＯＯ CRM系統開發",
    description:
      "ＸＸＯＯ 說明。CRM系統開發是指為企業開發客戶關係管理（CRM）系統的過程，旨在管理和分析客戶相關信息，包括聯繫資料、購買歷史和服務記錄，以提高客戶滿意度和市場競爭力。",
    flexDirection: "flex-col md:flex-row",
    borderDirection: "title-border-left",
  },
  {
    image: "/images/products-04.png",
    title: "ＸＯ CRM系統開發",
    description:
      "ＸＯ說明。CRM系統開發是指為企業開發客戶關係管理（CRM）系統的過程，旨在管理和分析客戶相關信息，包括聯繫資料、購買歷史和服務記錄，以提高客戶滿意度和市場競爭力。",
    flexDirection: "flex-col md:flex-row-reverse",
    borderDirection: "title-border-right",
  },
]
