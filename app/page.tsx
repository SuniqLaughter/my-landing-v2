import Link from "next/link"
import { ChevronRight, MessageCircle, Clock, Award, Scale, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
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
              Услуги
            </Link>
            <Link href="#conditions" className="font-medium transition-colors hover:text-black">
              Условия
            </Link>
            <Link href="#about" className="font-medium transition-colors hover:text-black">
              О нас
            </Link>
            <Link href="#contact" className="font-medium transition-colors hover:text-black">
              Контакты
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button size="sm" className="hidden md:flex gap-1 bg-black text-white hover:bg-black/90" asChild>
              <Link href="#contact">Консультация</Link>
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
                Избавьтесь от долгов через банкротство
              </h1>
              <p className="text-lg md:text-xl text-black max-w-2xl">
                Профессиональная юридическая помощь в процедуре банкротства физических лиц в Казахстане
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button size="lg" className="bg-black text-white hover:bg-black/90 rounded-full px-8" asChild>
                  <Link href="#contact">Бесплатная консультация</Link>
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
              <div className="text-sm text-gray-500 uppercase tracking-wider">Наши услуги</div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black">Процедуры банкротства</h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl">
                Мы предлагаем полное юридическое сопровождение процедуры банкротства физических лиц
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 mt-12">
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center">
                    <Scale className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Судебное банкротство</h3>
                </div>
                <p className="text-gray-600 mb-6">Полное юридическое сопровождение процедуры банкротства через суд</p>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-blue-900 mt-0.5" />
                    <span>Подготовка всех необходимых документов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-blue-900 mt-0.5" />
                    <span>Представительство в суде</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-blue-900 mt-0.5" />
                    <span>Взаимодействие с кредиторами</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-blue-900 mt-0.5" />
                    <span>Сопровождение на всех этапах процедуры</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Внесудебное банкротство</h3>
                </div>
                <p className="text-gray-600 mb-6">Упрощенная процедура банкротства без обращения в суд</p>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-blue-900 mt-0.5" />
                    <span>Проверка соответствия условиям</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-blue-900 mt-0.5" />
                    <span>Подготовка заявления</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-blue-900 mt-0.5" />
                    <span>Сбор необходимых документов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-blue-900 mt-0.5" />
                    <span>Консультации на всех этапах процедуры</span>
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
              <div className="text-sm text-gray-500 uppercase tracking-wider">Требования</div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black">Условия для банкротства</h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl">
                Основные условия для подачи на банкротство физического лица в Казахстане
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-12">
              <div className="bg-[#f5f5f7] p-8 rounded-2xl">
                <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center mb-6">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Просрочка платежей</h3>
                <p className="text-gray-600">
                  Наличие просроченной задолженности более 12 месяцев перед банками, МФО или другими кредиторами
                </p>
              </div>
              <div className="bg-[#f5f5f7] p-8 rounded-2xl">
                <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center mb-6">
                  <Scale className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Сумма долга</h3>
                <p className="text-gray-600">
                  Общая сумма задолженности должна превышать определенный законом минимум для инициирования процедуры
                  банкротства
                </p>
              </div>
              <div className="bg-[#f5f5f7] p-8 rounded-2xl">
                <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center mb-6">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Документы</h3>
                <p className="text-gray-600">
                  Наличие полного пакета документов, подтверждающих финансовое положение, доходы и имущество
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-12">
              <Button size="lg" className="bg-blue-900 text-white hover:bg-blue-800 rounded-full px-8" asChild>
                <Link href="#contact">Проверить возможность банкротства</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-20 md:py-32 relative overflow-hidden">
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center max-w-4xl mx-auto">
              <div className="text-sm text-gray-500 uppercase tracking-wider text-center">О компании</div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black text-center mt-4 mb-8">
                Профессиональная команда юристов
              </h2>
              <p className="text-gray-600 text-lg text-center mb-10">
                Компания DebtCleaner основана профессиональными юристами с 7-летним опытом работы в юридической сфере
              </p>
              <div className="grid md:grid-cols-3 gap-8 w-full">
                <div className="bg-[#f5f5f7] p-6 rounded-2xl flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">7 лет опыта</h3>
                  <p className="text-gray-600">Обширный опыт работы в юридической сфере</p>
                </div>
                <div className="bg-[#f5f5f7] p-6 rounded-2xl flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Сотни успешных дел</h3>
                  <p className="text-gray-600">Успешно завершенные дела о банкротстве</p>
                </div>
                <div className="bg-[#f5f5f7] p-6 rounded-2xl flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Индивидуальный подход</h3>
                  <p className="text-gray-600">Персональное внимание к каждому клиенту</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-20 md:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="text-sm text-gray-500 uppercase tracking-wider">Контакты</div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black">Свяжитесь с нами</h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl">
                Получите бесплатную консультацию по вашей ситуации
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 mt-12">
              <div className="bg-[#f5f5f7] p-8 rounded-2xl hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">WhatsApp</h3>
                </div>
                <p className="text-gray-600 mb-6">Напишите нам в WhatsApp для быстрой консультации</p>
                <Button className="w-full bg-blue-900 text-white hover:bg-blue-800 rounded-full">
                  <Link href="https://wa.me/77075754149" className="flex items-center justify-center gap-2 w-full py-2">
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
                      className="h-5 w-5"
                    >
                      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                      <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                      <path d="M9.5 13.5c.5 1 1.5 1 2 1s1.5 0 2-1" />
                    </svg>
                    Написать в WhatsApp
                  </Link>
                </Button>
              </div>
              <div className="bg-[#f5f5f7] p-8 rounded-2xl hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Telegram</h3>
                </div>
                <p className="text-gray-600 mb-6">Свяжитесь с нами через Telegram для консультации</p>
                <Button className="w-full bg-blue-900 text-white hover:bg-blue-800 rounded-full">
                  <Link
                    href="https://t.me/DebtCleanerBot"
                    className="flex items-center justify-center gap-2 w-full py-2"
                  >
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
                      className="h-5 w-5"
                    >
                      <path d="m22 2-7 20-4-9-9-4Z" />
                      <path d="M22 2 11 13" />
                    </svg>
                    Написать в Telegram
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 md:py-32 bg-blue-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                Начните путь к финансовой свободе сегодня
              </h2>
              <p className="max-w-[900px] text-gray-300 md:text-xl">
                Получите бесплатную консультацию по вашей ситуации и узнайте, подходит ли вам процедура банкротства
              </p>
              <div className="mt-6">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-blue-900 hover:bg-white/90 rounded-full px-8"
                  asChild
                >
                  <Link href="#contact">Бесплатная консультация</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-8 bg-[#f5f5f7]">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-gray-500">© 2025 DebtCleaner. Все права защищены.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-gray-500 hover:text-blue-900">
              Политика конфиденциальности
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-blue-900">
              Условия использования
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
