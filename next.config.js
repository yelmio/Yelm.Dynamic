const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})

module.exports = {
  future: {
    webpack5: true,
  },

  images: {
    domains: ["s3.eu-north-1.amazonaws.com"]
  },
  
}
// Для тестирования пишем ANALYZE=true npm run dev в терминал 
