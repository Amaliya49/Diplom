'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { getCategories, getRegions, getSizes, getConversions } from '@/lib/server/sSizeModel';
import { saveFavoriteSize } from '@/lib/server/sFavoriteSizeModel';

const Dashboard = () => {
  const { data: session } = useSession();
  const [categories, setCategories] = useState([]);
  const [regions, setRegions] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [filteredSizes, setFilteredSizes] = useState([]);
  const [selectedSourceRegion, setSelectedSourceRegion] = useState('');
  const [selectedDestRegion, setSelectedDestRegion] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [conversionResult, setConversionResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [rememberChoice, setRememberChoice] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Загрузка данных
  useEffect(() => {
    const fetchData = async () => {
      const [categoriesData, regionsData, sizesData] = await Promise.all([
        getCategories(),
        getRegions(),
        getSizes()
      ]);
      setCategories(categoriesData || []);
      setRegions(regionsData || []);
      setSizes(sizesData || []);
    };
    fetchData();
  }, []);

  // Фильтрация размеров
  useEffect(() => {
    if (selectedSourceRegion && selectedCategory) {
      const filtered = sizes.filter(
        size => size.region_id === Number(selectedSourceRegion) && 
               size.category_id === Number(selectedCategory)
      );
      setFilteredSizes(filtered);
    } else {
      setFilteredSizes([]);
      setSelectedSize('');
    }
  }, [selectedSourceRegion, selectedCategory, sizes]);

  // Сохранение в избранное
  const handleSaveFavorite = async () => {
    if (!session?.customer?.id) {
      alert('Войдите в систему для сохранения размеров');
      return;
    }

    try {
      const categoryName = categories.find(c => c.id === Number(selectedCategory))?.name || 'Неизвестная категория';
      const regionCode = regions.find(r => r.id === Number(selectedSourceRegion))?.code || 'Неизвестный регион';
      
      await saveFavoriteSize({
        customer_id: Number(session.customer.id),
        size_id: Number(selectedSize),
        title: `${categoryName} (${regionCode})`,
        description: `Мой размер`
      });
      
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    } catch (error) {
      console.error('Ошибка сохранения:', error);
      alert('Ошибка при сохранении размера');
    }
  };

  // Конвертация
  const handleConvert = async (e) => {
    e.preventDefault();
    setSaveSuccess(false);
    
    if (!selectedSourceRegion || !selectedDestRegion || !selectedCategory || !selectedSize) {
      alert('Заполните все поля');
      return;
    }

    setIsLoading(true);
    try {
      // Выполняем конвертацию
      const conversions = await getConversions(Number(selectedSize));
      const sourceSize = sizes.find(s => s.id === Number(selectedSize));
      const relevantConversions = conversions.filter(conv => 
        conv.toSize.region_id === Number(selectedDestRegion)
      );
      const destinationSizes = relevantConversions.map(conv => conv.toSize);

      setConversionResult({
        category: categories.find(c => c.id === Number(selectedCategory))?.name || 'Неизвестно',
        source: {
          region: regions.find(r => r.id === Number(selectedSourceRegion))?.code || '?',
          size: sourceSize?.label || '?'
        },
        destination: {
          region: regions.find(r => r.id === Number(selectedDestRegion))?.code || '?',
          sizes: destinationSizes.map(s => s.label)
        }
      });

      if (rememberChoice) {
        await handleSaveFavorite();
      }
    } catch (error) {
      console.error('Ошибка конвертации:', error);
      alert('Ошибка при конвертации');
    } finally {
      setIsLoading(false);
    }
  };

  const onFavoriteChange = (favSize) => {
    console.log("Dashboard.onFavoriteChange()", favSize);
    
    setSelectedSourceRegion(favSize.size.region_id);
    setSelectedCategory(favSize.size.category_id);
    setSelectedSize(favSize.size.id);

  };

  global.onFavoriteChange = onFavoriteChange;

  return (
    <div className="container">
      <div className="main-content">
        <h1>МОЙ РАЗМЕР - НАДЕЖНЫЙ КОНВЕРТАТОР</h1>

        <div className="conv-block">
          <div className="form-container">
            <form className="form-grid" onSubmit={handleConvert}>
              <div className="regions">
                <label>Исходный регион
                  <select 
                    value={selectedSourceRegion}
                    onChange={(e) => setSelectedSourceRegion(e.target.value)}
                    className="region" 
                    required
                  >
                    <option value="" disabled>Выберите регион</option>
                    {regions.map((r) => (
                      <option value={r.id} key={`region-${r.id}`}>
                        {`(${r.code}) ${r.name}`}
                      </option>
                    ))}     
                  </select>
                </label>

                <label>Регион назначения
                  <select 
                    value={selectedDestRegion}
                    onChange={(e) => setSelectedDestRegion(e.target.value)}
                    className="region" 
                    required
                  >
                    <option value="" disabled>Выберите регион</option>
                    {regions
                      .filter(r => r.id !== Number(selectedSourceRegion))
                      .map((r) => (
                        <option value={r.id} key={`dest-region-${r.id}`}>
                          {`(${r.code}) ${r.name}`}
                        </option>
                      ))}     
                  </select>
                </label>
              </div>
              
              <label>Категория
                <select 
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="group" 
                  required
                >
                  <option value="" disabled>Выберите категорию</option>
                  {categories.map((c) => (
                    <option value={c.id} key={`category-${c.id}`}>{c.name}</option>
                  ))}                 
                </select>
              </label>
              
              <label>Размер
                <select 
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="group" 
                  required
                  disabled={!filteredSizes.length}
                >
                  <option value="" disabled>Выберите размер</option>
                  {filteredSizes.map((s) => (
                    <option value={s.id} key={`size-${s.id}`}>{s.label}</option>
                  ))}    
                </select>
              </label>

              <div className="checkbox-row">
                <label className="checkbox-label">
                  <input 
                    type="checkbox"
                    checked={rememberChoice}
                    onChange={(e) => setRememberChoice(e.target.checked)}
                    disabled={!session?.customer}
                  />
                  {session?.customer ? 'Сохранить размер' : 'Войдите, чтобы сохранять'}
                </label>
              </div>

              <button 
                type="submit" 
                className="submit-btn"
                disabled={isLoading}
              >
                {isLoading ? 'ЗАГРУЗКА...' : 'ПЕРЕВЕСТИ РАЗМЕР'}
              </button>
            </form>
            
            <div className="help">
              <img src="/images/question2.png" width={45} alt="Help" />
              <p><Link href="/faq">Нужна помощь? Тогда вам сюда</Link></p>
            </div>
          </div>
          
          <div className="result">
            <h3>РЕЗУЛЬТАТ</h3>
            <hr />
            {conversionResult && (
              <div className="conversion-result">
                <h4>{conversionResult.category}</h4>
                <div className="result-window flex justify-evenly w-full">
                  <div className="size-row">
                    <span className="region-code">{conversionResult.source.region}</span><br />
                    <span className="size-value">{conversionResult.source.size}</span>
                  </div>
                  <div>
                    <img src="/images/arrow-size.png" width={72} alt="Arrow-size" />
                  </div>
                  <div className="size-row">
                    <span className="region-code">{conversionResult.destination.region}</span><br />
                    <div className="destination-sizes">
                      {conversionResult.destination.sizes.length > 0 ? (
                        conversionResult.destination.sizes.map((size, i) => (
                          <span key={i} className="size-value">{size}</span>
                        ))
                      ) : (
                        <span className="size-value">Соответствие не найдено</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;