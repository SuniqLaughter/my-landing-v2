"use client"

import Link from "next/link"
import { ChevronRight, Clock, Award, Scale, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"
import { Testimonials } from "@/components/testimonials"
import { useEffect, useState } from "react"

export default function Home() {
  const { t } = useLanguage()
  const [mounted, setMounted] = useState(false)

  // Убедимся, что компонент монтирован, прежде чем показывать содержимое
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="min-h-screen flex items-center justify-center">Загрузка...</div>
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#f5f5f7]">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-[#f5f5f7]/95 backdrop-blur supports-[backdrop-filter]:bg-[#f5f5f7]/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Scale className="h-6 w-6 text-black" />
            <span>DebtCleaner</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm">
            <Link href="#services" className="font-medium transition-colors hover:text-black">
              {t("services")}
            </Link>
            <Link href="#conditions" className="font-medium transition-colors hover:text-black">
              {t("conditions")}
            </Link>
            <Link href="#about" className="font-medium transition-colors hover:text-black">
              {t("about")}
            </Link>
            <Link href="#testimonials" className="font-medium transition-colors hover:text-black">
              Отзывы
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <Button size="sm" className="hidden md:flex gap-1 bg-black text-white hover:bg-black/90" asChild>
              <Link href="#contact">{t("consultation")}</Link>
            </Button>
            <Button variant="outline" size="icon" className="md:hidden border-black text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 lg:py-40 overflow-hidden relative">
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-12">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-black mb-6">
                {t("heroTitle")}
              </h1>
              <p className="text-lg md:text-xl text-black max-w-2xl">{t("heroSubtitle")}</p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button size="lg" className="bg-black text-white hover:bg-black/90 rounded-full px-8" asChild>
                  <Link href="#contact">{t("freeConsultation")}</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Floating cards */}
          <div className="absolute top-1/2 -translate-y-1/2 left-[5%] w-64 h-40 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-xl transform -rotate-12 opacity-80"></div>
          <div className="absolute top-1/3 -translate-y-1/2 right-[10%] w-64 h-40 bg-gradient-to-br from-blue-800 to-blue-900 rounded-xl shadow-xl transform rotate-12 opacity-80"></div>
          <div className="absolute bottom-[15%] left-[15%] w-64 h-40 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl shadow-xl transform rotate-6 opacity-80"></div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="text-sm text-gray-500 uppercase tracking-wider">{t("ourServices")}</div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black">{t("bankruptcyProcedures")}</h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl">{t("servicesDescription")}</p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 mt-12">
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center">
                    <Scale className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{t("judicialBankruptcy")}</h3>
                </div>
                <p className="text-gray-600 mb-6">{t("judicialDescription")}</p>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-blue-900 mt-0.5" />
                    <span>{t("documentPreparation")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-blue-900 mt-0.5" />
                    <span>{t("courtRepresentation")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-blue-900 mt-0.5" />
                    <span>{t("creditorInteraction")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-blue-900 mt-0.5" />
                    <span>{t("fullSupport")}</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{t("extrajudicialBankruptcy")}</h3>
                </div>
                <p className="text-gray-600 mb-6">{t("extrajudicialDescription")}</p>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-blue-900 mt-0.5" />
                    <span>{t("conditionsCheck")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-blue-900 mt-0.5" />
                    <span>{t("applicationPreparation")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-blue-900 mt-0.5" />
                    <span>{t("documentCollection")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-blue-900 mt-0.5" />
                    <span>{t("consultationsAtAllStages")}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Conditions Section */}
        <section id="conditions" className="w-full py-20 md:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="text-sm text-gray-500 uppercase tracking-wider">{t("requirements")}</div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black">{t("bankruptcyConditions")}</h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl">{t("conditionsDescription")}</p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-12">
              <div className="bg-[#f5f5f7] p-8 rounded-2xl">
                <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center mb-6">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{t("paymentDelay")}</h3>
                <p className="text-gray-600">{t("paymentDelayDescription")}</p>
              </div>
              <div className="bg-[#f5f5f7] p-8 rounded-2xl">
                <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center mb-6">
                  <Scale className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{t("debtAmount")}</h3>
                <p className="text-gray-600">{t("debtAmountDescription")}</p>
              </div>
              <div className="bg-[#f5f5f7] p-8 rounded-2xl">
                <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center mb-6">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{t("documents")}</h3>
                <p className="text-gray-600">{t("documentsDescription")}</p>
              </div>
            </div>
            <div className="flex justify-center mt-12">
              <Button size="lg" className="bg-blue-900 text-white hover:bg-blue-800 rounded-full px-8" asChild>
                <Link href="#contact">{t("checkBankruptcyPossibility")}</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-20 md:py-32 relative overflow-hidden">
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center max-w-4xl mx-auto">
              <div className="text-sm text-gray-500 uppercase tracking-wider text-center">{t("aboutCompany")}</div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black text-center mt-4 mb-8">
                {t("professionalTeam")}
              </h2>
              <p className="text-gray-600 text-lg text-center mb-10">{t("companyDescription")}</p>
              <div className="grid md:grid-cols-3 gap-8 w-full">
                <div className="bg-[#f5f5f7] p-6 rounded-2xl flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">{t("yearsExperience")}</h3>
                  <p className="text-gray-600">{t("experienceDescription")}</p>
                </div>
                <div className="bg-[#f5f5f7] p-6 rounded-2xl flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">{t("successfulCases")}</h3>
                  <p className="text-gray-600">{t("successfulCasesDescription")}</p>
                </div>
                <div className="bg-[#f5f5f7] p-6 rounded-2xl flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">{t("individualApproach")}</h3>
                  <p className="text-gray-600">{t("individualApproachDescription")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials">
          <Testimonials />
        </section>

        {/* CTA Section */}
        <section id="contact" className="w-full py-20 md:py-32 bg-blue-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{t("startPath")}</h2>
              <p className="max-w-[900px] text-gray-300 md:text-xl">{t("ctaDescription")}</p>
              <div className="mt-6">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-blue-900 hover:bg-white/90 rounded-full px-8"
                  asChild
                >
                  <Link href="https://t.me/DebtCleanerBot">{t("freeConsultation")}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-8 bg-[#f5f5f7]">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-gray-500">{t("allRightsReserved")}</p>
          <div className="flex gap-6 items-center">
            <Link
              href="https://t.me/DebtCleanerBot"
              className="text-sm text-blue-900 hover:text-blue-700 flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-1"
              >
                <path d="m22 2-7 20-4-9-9-4Z" />
                <path d="M22 2 11 13" />
              </svg>
              Свяжитесь с нами в Telegram
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-blue-900">
              {t("privacyPolicy")}
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-blue-900">
              {t("termsOfUse")}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
