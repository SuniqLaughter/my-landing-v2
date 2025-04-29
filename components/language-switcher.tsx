"use client"

import { useLanguage } from "@/contexts/language-context"
import { useState, useEffect } from "react"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [mounted, setMounted] = useState(false)

  // Убедимся, что компонент монтирован, прежде чем показывать содержимое
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex gap-2">
      <button
        onClick={() => setLanguage("ru")}
        className={`px-3 py-1 rounded-md text-sm font-medium ${
          language === "ru" ? "bg-black text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
      >
        RU
      </button>
      <button
        onClick={() => setLanguage("kz")}
        className={`px-3 py-1 rounded-md text-sm font-medium ${
          language === "kz" ? "bg-black text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
      >
        KZ
      </button>
    </div>
  )
}
