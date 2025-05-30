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
    <center>
    <div className="container ">
      <img 
         src="/images/top-img.png"
         width={584}
         alt="image"
         className="top-image"
      />
      <h1 className="text-center text-3xl font-semibold mb-8">
        Здесь вы можете найти ответы на все интересующие вопросы
      </h1>
      <div className="bg-white shadow rounded-lg divide-y divide-gray-200 max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="p-4 md:p-6 cursor-pointer" onClick={() => toggleAnswer(index)}>
            <div className="flex justify-between items-center">
              <h2 className="text-lg md:text-xl font-medium text-gray-800">{faq.question}</h2>
              <span className="text-2xl font-bold select-none">
                {activeIndex === index ? '−' : '+'}
              </span>
      </div>
      {activeIndex === index && (
        <p className="mt-4 text-gray-600 leading-relaxed">
          {faq.answer}
        </p>
      )}
    </div>
  ))}
</div>

    </div>
    </center>
  );
};

export default FAQ;
