import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/language-context"
import { ChatWidget } from "@/components/chat-widget"

const inter = Inter({ subsets: ["latin", "cyrillic"] })

export const metadata = {
  title: "DebtCleaner - Услуги по банкротству в Казахстане",
  description: "Профессиональная юридическая помощь в процедуре банкротства физических лиц в Казахстане",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            {children}
            <ChatWidget />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
