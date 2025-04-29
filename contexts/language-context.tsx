"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

type Language = "ru" | "kz"

type Translations = {
  [key: string]: {
    ru: string
    kz: string
  }
}

// Словарь переводов
const translations: Translations = {
  // Навигация
  services: {
    ru: "Услуги",
    kz: "Қызметтер",
  },
  conditions: {
    ru: "Условия",
    kz: "Шарттар",
  },
  about: {
    ru: "О нас",
    kz: "Біз туралы",
  },
  contacts: {
    ru: "Контакты",
    kz: "Байланыс",
  },
  consultation: {
    ru: "Консультация",
    kz: "Кеңес беру",
  },

  // Главный экран
  heroTitle: {
    ru: "Избавьтесь от долгов через банкротство",
    kz: "Банкроттық арқылы қарыздардан құтылыңыз",
  },
  heroSubtitle: {
    ru: "Профессиональная юридическая помощь в процедуре банкротства физических лиц в Казахстане",
    kz: "Қазақстандағы жеке тұлғалардың банкроттығы рәсімінде кәсіби заңгерлік көмек",
  },
  freeConsultation: {
    ru: "Бесплатная консультация",
    kz: "Тегін кеңес",
  },

  // Услуги
  ourServices: {
    ru: "Наши услуги",
    kz: "Біздің қызметтер",
  },
  bankruptcyProcedures: {
    ru: "Процедуры банкротства",
    kz: "Банкроттық рәсімдері",
  },
  servicesDescription: {
    ru: "Мы предлагаем полное юридическое сопровождение процедуры банкротства физических лиц",
    kz: "Біз жеке тұлғалардың банкроттығы рәсімінде толық заңгерлік қолдау көрсетеміз",
  },
  judicialBankruptcy: {
    ru: "Судебное банкротство",
    kz: "Сот банкроттығы",
  },
  judicialDescription: {
    ru: "Полное юридическое сопровождение процедуры банкротства через суд",
    kz: "Сот арқылы банкроттық рәсімін толық заңгерлік сүйемелдеу",
  },
  documentPreparation: {
    ru: "Подготовка всех необходимых документов",
    kz: "Барлық қажетті құжаттарды дайындау",
  },
  courtRepresentation: {
    ru: "Представительство в суде",
    kz: "Сотта өкілдік ету",
  },
  creditorInteraction: {
    ru: "Взаимодействие с кредиторами",
    kz: "Несие берушілермен өзара әрекеттесу",
  },
  fullSupport: {
    ru: "Сопровождение на всех этапах процедуры",
    kz: "Рәсімнің барлық кезеңдерінде қолдау",
  },
  extrajudicialBankruptcy: {
    ru: "Внесудебное банкротство",
    kz: "Соттан тыс банкроттық",
  },
  extrajudicialDescription: {
    ru: "Упрощенная процедура банкротства без обращения в суд",
    kz: "Сотқа жүгінбей банкроттықтың жеңілдетілген рәсімі",
  },
  conditionsCheck: {
    ru: "Проверка соответствия условиям",
    kz: "Шарттарға сәйкестігін тексеру",
  },
  applicationPreparation: {
    ru: "Подготовка заявления",
    kz: "Өтінішті дайындау",
  },
  documentCollection: {
    ru: "Сбор необходимых документов",
    kz: "Қажетті құжаттарды жинау",
  },
  consultationsAtAllStages: {
    ru: "Консультации на всех этапах процедуры",
    kz: "Рәсімнің барлық кезеңдерінде кеңес беру",
  },

  // Условия
  requirements: {
    ru: "Требования",
    kz: "Талаптар",
  },
  bankruptcyConditions: {
    ru: "Условия для банкротства",
    kz: "Банкроттық шарттары",
  },
  conditionsDescription: {
    ru: "Основные условия для подачи на банкротство физического лица в Казахстане",
    kz: "Қазақстанда жеке тұлғаның банкроттығын өтініш беру үшін негізгі шарттар",
  },
  paymentDelay: {
    ru: "Просрочка платежей",
    kz: "Төлемдерді кешіктіру",
  },
  paymentDelayDescription: {
    ru: "Наличие просроченной задолженности более 12 месяцев перед банками, МФО или другими кредиторами",
    kz: "Банктер, МҚҰ немесе басқа несие берушілер алдында 12 айдан астам мерзімі өткен қарыздың болуы",
  },
  debtAmount: {
    ru: "Сумма долга",
    kz: "Қарыз сомасы",
  },
  debtAmountDescription: {
    ru: "Общая сумма задолженности должна превышать определенный законом минимум для инициирования процедуры банкротства",
    kz: "Қарыздың жалпы сомасы банкроттық рәсімін бастау үшін заңмен белгіленген минимумнан асуы керек",
  },
  documents: {
    ru: "Документы",
    kz: "Құжаттар",
  },
  documentsDescription: {
    ru: "Наличие полного пакета документов, подтверждающих финансовое положение, доходы и имущество",
    kz: "Қаржылық жағдайды, табысты және мүлікті растайтын құжаттардың толық пакетінің болуы",
  },
  checkBankruptcyPossibility: {
    ru: "Проверить возможность банкротства",
    kz: "Банкроттық мүмкіндігін тексеру",
  },

  // О компании
  aboutCompany: {
    ru: "О компании",
    kz: "Компания туралы",
  },
  professionalTeam: {
    ru: "Профессиональная команда юристов",
    kz: "Кәсіби заңгерлер командасы",
  },
  companyDescription: {
    ru: "Компания DebtCleaner основана профессиональными юристами с 7-летним опытом работы в юридической сфере",
    kz: "DebtCleaner компаниясы заң саласында 7 жылдық тәжірибесі бар кәсіби заңгерлермен құрылған",
  },
  yearsExperience: {
    ru: "7 лет опыта",
    kz: "7 жыл тәжірибе",
  },
  experienceDescription: {
    ru: "Обширный опыт работы в юридической сфере",
    kz: "Заң саласындағы кең тәжірибе",
  },
  successfulCases: {
    ru: "Сотни успешных дел",
    kz: "Жүздеген сәтті істер",
  },
  successfulCasesDescription: {
    ru: "Успешно завершенные дела о банкротстве",
    kz: "Сәтті аяқталған банкроттық істері",
  },
  individualApproach: {
    ru: "Индивидуальный подход",
    kz: "Жеке көзқарас",
  },
  individualApproachDescription: {
    ru: "Персональное внимание к каждому клиенту",
    kz: "Әр клиентке жеке назар",
  },

  // Контакты
  contactUs: {
    ru: "Свяжитесь с нами",
    kz: "Бізбен байланысыңыз",
  },
  contactDescription: {
    ru: "Получите бесплатную консультацию по вашей ситуации",
    kz: "Жағдайыңыз бойынша тегін кеңес алыңыз",
  },
  writeToWhatsApp: {
    ru: "Напишите нам в WhatsApp для быстрой консультации",
    kz: "Жылдам кеңес алу үшін бізге WhatsApp-та жазыңыз",
  },
  writeToTelegram: {
    ru: "Свяжитесь с нами через Telegram для консультации",
    kz: "Кеңес алу үшін бізбен Telegram арқылы байланысыңыз",
  },
  writeWhatsApp: {
    ru: "Написать в WhatsApp",
    kz: "WhatsApp-қа жазу",
  },
  writeTelegram: {
    ru: "Написать в Telegram",
    kz: "Telegram-ға жазу",
  },

  // CTA
  startPath: {
    ru: "Начните путь к финансовой свободе сегодня",
    kz: "Бүгін қаржылық еркіндікке жол бастаңыз",
  },
  ctaDescription: {
    ru: "Получите бесплатную консультацию по вашей ситуации и узнайте, подходит ли вам процедура банкротства",
    kz: "Жағдайыңыз бойынша тегін кеңес алыңыз және банкроттық рәсімі сізге сәйкес келетінін біліңіз",
  },

  // Footer
  allRightsReserved: {
    ru: "© 2025 DebtCleaner. Все права защищены.",
    kz: "© 2025 DebtCleaner. Барлық құқықтар қорғалған.",
  },
  privacyPolicy: {
    ru: "Политика конфиденциальности",
    kz: "Құпиялылық саясаты",
  },
  termsOfUse: {
    ru: "Условия использования",
    kz: "Қолдану шарттары",
  },
}

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Получаем язык из localStorage при инициализации, если он там есть
  const [language, setLanguage] = useState<Language>(() => {
    // Проверяем, что мы на клиенте, прежде чем использовать localStorage
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language") as Language
      return savedLanguage === "kz" ? "kz" : "ru"
    }
    return "ru"
  })

  // Сохраняем язык в localStorage при его изменении
  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  // Функция для получения перевода по ключу
  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key "${key}" not found`)
      return key
    }
    return translations[key][language]
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

// Хук для использования языкового контекста
export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
