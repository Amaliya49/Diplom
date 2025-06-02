'use client';
import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Как работает конвертер размеров?",
      answer: "Конвертер размеров позволяет пользователям вводить свои размеры в одном регионе и получать эквиваленты в других регионах."
    },
    {
      question: "Какие регионы поддерживаются?",
      answer: "В нашем приложении поддерживаются размеры из различных регионов, включая США, Европу, Великобританию и другие."
    },
    {
      question: "Как сохранить любимые размеры?",
      answer: "Вы можете сохранить свои любимые размеры, нажав на кнопку 'Сохранить размер' после конвертации."
    },
    {
      question: "Как связаться с поддержкой?",
      answer: "Вы можете связаться с нашей службой поддержки через раздел 'Контакты' на сайте."
    },
    {
      question: "Есть ли мобильное приложение?",
      answer: "На данный момент мы предлагаем только веб-приложение, но в будущем планируем разработать мобильную версию."
    }
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text
                      bg-gradient-to-r from-gray-200 via-gray-100 to-gray-300
                      drop-shadow-[0_4px_3px_rgba(0,0,0,0.25)]">
          Часто задаваемые вопросы
        </h1>
        
        <div className="bg-white/80 backdrop-blur-l rounded-2xl shadow-xl overflow-hidden">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border-b border-black-100 last:border-0 transition-all ${activeIndex === index ? 'bg-purple-50/50' : 'hover:bg-gray-50/50'}`}
            >
              <div 
                className="p-6 cursor-pointer flex justify-between items-center"
                onClick={() => toggleAnswer(index)}
              >
                <h2 className="text-lg md:text-xl font-semibold text-gray-800">
                  {faq.question}
                </h2>
                <span className={`text-2xl font-bold select-none transition-transform ${activeIndex === index ? 'rotate-180 text-purple-600' : 'text-gray-400'}`}>
                  ⌄
                </span>
              </div>
              
              {activeIndex === index && (
                <div className="px-6 pb-6 pt-2">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-gray-500">
          Не нашли ответ? <a href="/contacts" className="text-purple-600 hover:underline">Свяжитесь с нами</a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;