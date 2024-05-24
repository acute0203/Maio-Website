export function getBrowserLang(lang?: string): string {
  switch (lang) {
    case "en":
    case "en_US":
    case "en-US":
      return "en"
    case "zh-CN":
    case "zh-TW":
    case "zh-HK":
    default:
      return "zh"
  }
}
