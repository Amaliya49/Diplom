import React from 'react';
import Link from 'next/link';

const Dashboard = () => {
  return (
    <div className="container">
      <div className="main-content">
        <h1>МОЙ РАЗМЕР - НАДЕЖНЫЙ КОНВЕРТАТОР</h1>

        <div className="conv-block">
          <div className="form-container">
            <form className="form-grid">
              <div className="regions">
                <label>Исходный регион
                  <select name="sourceRegion" className="region"></select>
                </label>
                <label>Регион назначения
                  <select name="destRegion" className="region"></select>
                </label>
              </div>
              
              <label>Категория
                <select name="category" className="group"></select>
              </label>
              
              <label>Размер
                <select name="size" className="group"></select>
              </label>
              
              <div className="checkbox-row">
                <label className="checkbox-label">
                  <input type="checkbox" name="remember" />
                  Запомнить выбор
                </label>
              </div>
              
              <button className="submit-btn">ПЕРЕВЕСТИ РАЗМЕР</button>
            </form>
            
            <div className="help">
              <img src="/images/question2.png" width={45} alt="Help" />
              <p><Link href="/faq">Нужна помощь? Тогда вам сюда</Link></p>
            </div>
          </div>
          
          <div className="result">
            <h3>РЕЗУЛЬТАТ</h3>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;