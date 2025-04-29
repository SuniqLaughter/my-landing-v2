import { Star } from "lucide-react"

// Компонент для отображения звездного рейтинга
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`h-5 w-5 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
      ))}
    </div>
  )
}

// Основной компонент блока отзывов
export function Testimonials() {
  const testimonials = [
    {
      name: "Айгуль",
      age: 34,
      text: "Благодаря компании я списала долг в 6 млн тенге! Всё прошло быстро и без лишних вопросов.",
      rating: 5,
    },
    {
      name: "Марат",
      age: 42,
      text: "Долго не решался на банкротство, но специалисты DebtCleaner помогли мне пройти всю процедуру. Теперь я свободен от долгов.",
      rating: 5,
    },
    {
      name: "Елена",
      age: 29,
      text: "Профессиональный подход и внимание к деталям. Юристы компании помогли мне избавиться от долга в 4,5 млн тенге за 3 месяца.",
      rating: 5,
    },
  ]

  return (
    <section className="w-full py-20 md:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="text-sm text-gray-500 uppercase tracking-wider">Отзывы клиентов</div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black">Истории успеха</h2>
          <p className="max-w-[900px] text-gray-600 md:text-xl">
            Отзывы наших клиентов, которые успешно прошли процедуру банкротства
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col rounded-xl bg-[#f5f5f7] p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4">
                <StarRating rating={testimonial.rating} />
              </div>
              <p className="mb-4 text-gray-700">{testimonial.text}</p>
              <div className="mt-auto text-sm font-medium text-gray-900">
                {testimonial.name}, {testimonial.age}{" "}
                {testimonial.age % 10 === 1 && testimonial.age % 100 !== 11
                  ? "год"
                  : testimonial.age % 10 >= 2 &&
                      testimonial.age % 10 <= 4 &&
                      (testimonial.age % 100 < 10 || testimonial.age % 100 >= 20)
                    ? "года"
                    : "лет"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
