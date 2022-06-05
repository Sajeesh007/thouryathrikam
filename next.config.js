/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')

const nextConfig = withPWA({
  reactStrictMode: true,
  env: {
    GOOGLE_API_KEY: "AIzaSyDPjLit9Buu9cwaio4DLGCeepUwQum2ANQ",
    GOOGLE_PRIVATE_KEY :"-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCyXvG4rDU2ydnW\nGKcBVsPhW5GzQmDPrTNQVAz9ajPDn3J5G3qqzU0ApYUczGEFE/6hchhTTKvaJdcH\ng0K4KQ7+/R6KVCcDzh0pVLrt8WUugtGzYZfLQb5S3sG33GvoaQ0qfGgTlqtbOmZU\nWAtXPF6QkQ6OnZw2GNhXhzk7oeuNQWhZBTBnJ9QjByEIMnR2qP9JfxL3YjaD8pCs\nmchu81KW9jYbZiaYfT/qmBZOsVnN7zcxCItqmTuUHc3MiaFgvv+hLwRZDwiF4w4R\nAFcWaM1IErTFZZGo3zrNOmgWnabr5IYBQK8pFeZVsnI+OyQ/u0kdqnK83gMJ6hEj\nNCPIcVGDAgMBAAECggEAHv4/WxrVHkGBj+F1t1ZXr+NE1FSO1NcgCO+p2CipeO7O\nKbv8GwyUOi4IjKH4o7S/NFdKYcL7Q2r6y4vjvnMn72eU9G094DvitklKN8kPjz7c\n6CHnicJRKz4Yg/WRbG9AgebfALRX7wCdQj+QLObI+a6yzFYXjBDSGpdc+v8eGkt9\nzjx4PCyRgrqhbnv6alhOoVMFl6bJOYmNc8rvi3+7zoBCJuO23BQuBenRbjY9yZwB\n3dHZYFHY13XAiaa5a3pmhNuU+285dN7MGkNk3QJEFsEdAxehFHema1iwUq9Iasb1\n22ttYt+IbQQbYyLhPrhhCK0kBQ4I2ioM7NKczI+auQKBgQDzVHmqnDT2WVEMXysg\nzORmmJbibcPRSgK44OP4dExfwFKBBNxki7uDPNqFv/no1t+7gyoClOcH+0DZq0L8\nkkBuoi5XcwnCQnbzpCSMEhLkcQndF1GEvOaCDZco2uN8I5Zo6Obi61fqcZX9u719\nak3DP5/3di2fYGSMdqxO9TNgCwKBgQC7qJTGLK1XIe8Wn+/qUnhUt6i3isSas2q2\nQgST2C7N63GpZQtGhcUeO2Jf9u8DiC24Z1eZs+nnwzQcmPrzCQQUclxMqGso7H6d\n5DtMwXmM9eVoIw3O5SS6+WkvwhTOsEPCG1h27lpgRyZICYnFgalfT8GPicU+CT84\nBG38qD/naQKBgQDdivsfSAu8g8OUJQ3qVkJZ2vH9hHy2D9F8rF1Dd/eVclBr4ZYc\nAVEfgwdeoVSTFxgq7JgSM6pJjQwVYqWhujLpx8WznyyybrtIxxjzYv1KelTFtJZm\n6Wph3KfU7b4S53/pUqvszOOFtBchJo63IlNcwpANyc5t/mBttxrY5Mz60wKBgDWe\nt9PgVC8/bPeD/6NuqR9b0wOOzRp/BZDKUFCGRuljyvhh/NTLyEUZJsTQ4/6YXKgC\nL0+lzsIATtWVCK+E9ft5qdHllaj92jf3TNJjvf1/DWuyCHIDm3kpZtrUk+lzCAlg\nkuh4tq4n5lJTF2Ct6d1oBqCi9w8AyWWSLnMxCAFxAoGBAIilaiQwzx5g3dbWiD5v\nH2HTEKXs6wJg++NOd+FygeBIwQJb/b/tiS6UzffiW3R9YkVfXOQscrd60rHZMu0u\nWtvlBCT38pVpw+m5ZwO123V7mCyb4nT0hif2ep+9YAykhJgoNCelcpwpIaiDeUzK\n8ukN9pST3YSPayHF47w2jvLl\n-----END PRIVATE KEY-----\n",
    GOOGLE_PROJECTID: "ommm-website-323705",
    GOOGLE_CLIENT_EMAIL: "ommm-website@ommm-website-323705.iam.gserviceaccount.com",
    AIRTABLE_API_KEY: "keytYA50cDp0mtaQg"
  },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development'
    }
})

module.exports = nextConfig

