"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Wrench, Car, Settings, Gauge, Droplets, ArrowRight, CheckCircle, Loader2 } from "lucide-react";

export default function Home() {
  const [formData, setFormData] = useState({ phone: "", service: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setIsSuccess(false);

    try {
      const response = await fetch("/api/send-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Ошибка отправки");
      }

      setIsSuccess(true);
      setFormData({ phone: "", service: "", message: "" });
    } catch {
      setError("Не удалось отправить заявку. Попробуйте позвонить нам.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
              <Wrench className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              АвтоСервис
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-zinc-400 hover:text-orange-400 transition-colors text-sm">Услуги</a>
            <a href="#about" className="text-zinc-400 hover:text-orange-400 transition-colors text-sm">О нас</a>
            <a href="#contact" className="text-zinc-400 hover:text-orange-400 transition-colors text-sm">Контакты</a>
          </nav>
          <a href="tel:88003334455" className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-full transition-colors cursor-pointer">
            <Phone className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-medium">8-800-333-44-55</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzMzMiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-5"></div>
        
        <div className="relative max-w-6xl mx-auto px-6 py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-zinc-900/50 border border-zinc-800 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm text-zinc-400">Работаем ежедневно</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Профессиональный{' '}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                ремонт автомобилей
              </span>{' '}
              в Волгограде
            </h1>
            <p className="text-xl text-zinc-400 mb-10 max-w-2xl">
              Качественный ремонт любой сложности. Современное оборудование, 
              опытные мастера с многолетним стажем, гарантия на все работы.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="group bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 rounded-xl font-semibold transition-all cursor-pointer flex items-center gap-2">
                Записаться на ремонт
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#services" className="border border-zinc-700 hover:border-orange-500/50 hover:bg-zinc-900/50 text-zinc-300 px-8 py-4 rounded-xl font-semibold transition-all cursor-pointer">
                Наши услуги
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="about" className="py-20 bg-zinc-900/50 border-y border-zinc-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">10+</div>
              <div className="text-zinc-500">лет опыта</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">5000+</div>
              <div className="text-zinc-500">довольных клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">98%</div>
              <div className="text-zinc-500">положительных отзывов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">1 год</div>
              <div className="text-zinc-500">гарантия</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Наши <span className="text-orange-500">услуги</span>
            </h2>
            <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
              Полный спектр услуг по ремонту и обслуживанию автомобилей
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Car, title: "Кузовной ремонт", desc: "Восстановление геометрии кузова, покраска, антикоррозийная обработка" },
              { icon: Settings, title: "Техническое обслуживание", desc: "Замена масла, фильтров, диагностика всех систем автомобиля" },
              { icon: Gauge, title: "Диагностика двигателя", desc: "Компьютерная диагностика, ремонт ДВС, настройка впрыска" },
              { icon: Wrench, title: "Ремонт подвески", desc: "Замена амортизаторов, рычагов, шаровых опор, рулевых наконечников" },
              { icon: Droplets, title: "Замена масла", desc: "Замена масла в двигателе, КПП, раздаточной коробке, редукторе" },
              { icon: Settings, title: "Тормозная система", desc: "Замена колодок, дисков, ремонт суппортов, прокачка тормозов" },
            ].map((service, i) => (
              <div key={i} className="group bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl hover:border-orange-500/30 hover:bg-zinc-900 transition-all cursor-pointer">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-zinc-100">{service.title}</h3>
                <p className="text-zinc-500 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Почему выбирают <span className="text-orange-500">нас</span>
              </h2>
              <div className="space-y-6">
                {[
                  { title: "Современное оборудование", desc: "Диагностика и ремонт на профессиональном оборудовании" },
                  { title: "Опытные мастера", desc: "Специалисты с многолетним стажем работы" },
                  { title: "Гарантия качества", desc: "Гарантия на все работы до 1 года" },
                  { title: "Честные цены", desc: "Прозрачное ценообразование без скрытых платежей" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-6 h-6 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-100 mb-1">{item.title}</h3>
                      <p className="text-zinc-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-zinc-950/50 rounded-2xl p-6 text-center">
                    <Clock className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-zinc-100">24/7</div>
                    <div className="text-sm text-zinc-500">Режим работы</div>
                  </div>
                  <div className="bg-zinc-950/50 rounded-2xl p-6 text-center">
                    <Wrench className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-zinc-100">100%</div>
                    <div className="text-sm text-zinc-500">Гарантия</div>
                  </div>
                  <div className="bg-zinc-950/50 rounded-2xl p-6 text-center">
                    <Car className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-zinc-100">50+</div>
                    <div className="text-sm text-zinc-500">Марок авто</div>
                  </div>
                  <div className="bg-zinc-950/50 rounded-2xl p-6 text-center">
                    <Gauge className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-zinc-100">100%</div>
                    <div className="text-sm text-zinc-500">Диагностика</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Записаться на <span className="text-orange-500">ремонт</span>
            </h2>
            <p className="text-zinc-500">Оставьте заявку, и мы свяжемся с вами в течение 15 минут</p>
          </div>
          {isSuccess ? (
            <div className="bg-zinc-900/50 border border-green-800 p-8 md:p-10 rounded-3xl text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-zinc-100 mb-2">Заявка отправлена!</h3>
              <p className="text-zinc-400 mb-4">Мы свяжемся с вами в течение 15 минут</p>
              <button onClick={() => setIsSuccess(false)} className="text-orange-500 hover:text-orange-400 transition-colors cursor-pointer">
                Отправить ещё одну заявку
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-zinc-900/50 border border-zinc-800 p-8 md:p-10 rounded-3xl">
              {error && (
                <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-xl mb-6">
                  {error}
                </div>
              )}
              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-medium text-zinc-400 mb-2">Телефон</label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/30 outline-none transition-colors text-zinc-100 placeholder-zinc-600"
                  placeholder="+7 (999) 000-00-00"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="service" className="block text-sm font-medium text-zinc-400 mb-2">Услуга</label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/30 outline-none transition-colors text-zinc-100"
                >
                  <option value="">Выберите услугу</option>
                  <option value="kuzov">Кузовной ремонт</option>
                  <option value="to">Техническое обслуживание</option>
                  <option value="engine">Диагностика двигателя</option>
                  <option value="podveska">Ремонт подвески</option>
                  <option value="maslo">Замена масла</option>
                  <option value="tormoza">Тормозная система</option>
                  <option value="other">Другое</option>
                </select>
              </div>
              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">Сообщение (необязательно)</label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/30 outline-none transition-colors text-zinc-100 placeholder-zinc-600 resize-none"
                  placeholder="Опишите проблему или оставьте комментарий..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 disabled:opacity-50 disabled:cursor-not-allowed text-white py-5 rounded-xl font-semibold text-lg transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Отправка...
                  </>
                ) : (
                  "Отправить заявку"
                )}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-zinc-900/50 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-orange-500/10 rounded-xl flex items-center justify-center">
                <Phone className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <div className="text-sm text-zinc-500 mb-1">Телефон</div>
                <a href="tel:88003334455" className="text-lg font-semibold text-zinc-100 hover:text-orange-400 transition-colors">8-800-333-44-55</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-orange-500/10 rounded-xl flex items-center justify-center">
                <Mail className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <div className="text-sm text-zinc-500 mb-1">Email</div>
                <a href="mailto:test@mail.ru" className="text-lg font-semibold text-zinc-100 hover:text-orange-400 transition-colors">test@mail.ru</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-orange-500/10 rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <div className="text-sm text-zinc-500 mb-1">Адрес</div>
                <div className="text-lg font-semibold text-zinc-100">г. Волгоград</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-zinc-600">© 2024 АвтоСервис Волгоград. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
