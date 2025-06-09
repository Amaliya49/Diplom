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
  const [isHovered, setIsHovered] = useState(false);

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
    setSelectedSourceRegion(favSize.size.region_id);
    setSelectedCategory(favSize.size.category_id);
    setSelectedSize(favSize.size.id);
  };

  global.onFavoriteChange = onFavoriteChange;

  return (
    <div className="ml-[140px] flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto">
       <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text
                      bg-gradient-to-r from-gray-200 via-gray-100 to-gray-300
                      drop-shadow-[0_4px_3px_rgba(0,0,0,0.25)]">
        МОЙ РАЗМЕР - НАДЕЖНЫЙ КОНВЕРТЕР ЛАЛААЛАЛА
      </h1>
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Форма конвертации */}
          <div className="flex-1 bg-white rounded-2xl shadow-xl p-6">
            <form className="space-y-4" onSubmit={handleConvert}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Исходный регион
                  </label>
                  <select 
                    value={selectedSourceRegion}
                    onChange={(e) => setSelectedSourceRegion(e.target.value)}
                    className="w-full p-2 rounded-md border-2 border-gray-200 focus:border-purple-500 focus:ring-0 transition-all"
                    required
                  >
                    <option value="" disabled>Выберите регион</option>
                    {regions.map((r) => (
                      <option value={r.id} key={`region-${r.id}`}>
                        {`(${r.code}) ${r.name}`}
                      </option>
                    ))}     
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Регион назначения
                  </label>
                  <select 
                    value={selectedDestRegion}
                    onChange={(e) => setSelectedDestRegion(e.target.value)}
                    className="w-full p-2 rounded-md border-2 border-gray-200 focus:border-purple-500 focus:ring-0 transition-all"
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
                </div>
              </div>
              
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">
                  Категория
                </label>
                <select 
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full p-2 rounded-md border-2 border-gray-200 focus:border-purple-500 focus:ring-0 transition-all"
                  required
                >
                  <option value="" disabled>Выберите категорию</option>
                  {categories.map((c) => (
                    <option value={c.id} key={`category-${c.id}`}>{c.name}</option>
                  ))}                 
                </select>
              </div>
              
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">
                  Размер
                </label>
                <select 
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="w-full p-2 rounded-md border-2 border-gray-200 focus:border-purple-500 focus:ring-0 transition-all"
                  required
                  disabled={!filteredSizes.length}
                >
                  <option value="" disabled>Выберите размер</option>
                  {filteredSizes.map((s) => (
                    <option value={s.id} key={`size-${s.id}`}>{s.label}</option>
                  ))}    
                </select>
              </div>

              <div className="flex items-center pt-2">
                <input 
                  type="checkbox"
                  checked={rememberChoice}
                  onChange={(e) => setRememberChoice(e.target.checked)}
                  disabled={!session?.customer}
                  className="h-4 w-4 rounded border-2 border-gray-300 text-purple-600 focus:ring-0"
                />
                <label className="ml-2 text-sm text-gray-700">
                  {session?.customer ? 'Сохранить размер' : 'Войдите, чтобы сохранять'}
                </label>
              </div>

              <button 
                type="submit" 
                className={`w-full py-4 px-6 rounded-xl text-white font-bold text-lg transition-all duration-300 ${
                  isLoading 
                    ? 'bg-gray-400' 
                    : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-lg hover:shadow-xl'
                } ${isHovered ? 'transform hover:-translate-y-1' : ''}`}
                disabled={isLoading}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Загрузка...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <span>Конвертировать</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-5 w-5 transition-transform ${isHovered ? 'transform translate-x-1' : ''}`}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                )}
              </button>
            </form>
            
            <div className="faq mt-6 flex items-center space-x-2">
              <img 
                src="/images/question2.png" 
                width={40} 
                alt="Help" 
                className="animate-pulse"
              />
              <Link 
                href="/faq" 
                className="faq-link text-purple-600 hover:text-purple-800 font-medium transition-colors"
              >
                Остались вопросы? Тогда вам сюда.
              </Link>
            </div>
          </div>

         {/* Блок результатов */}
          <div className="result flex-1 bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-3xl font-bold text-center mb-3 text-gray-800">
              Результат конвертации
            </h2>
            <hr className="mb-4" />
            {conversionResult ? (
              <div className="space-y-3 mt-12">
                <h3 className="text-2xl font-semibold text-center text-purple-700 mb-12">
                  {conversionResult.category}
                </h3>
                
                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                  {/* Исходный размер */}
                  <div className="text-center min-w-[120px]">
                    <div className="text-sm font-medium text-gray-600 mb-1">
                      {conversionResult.source.region}
                    </div>
                    <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-md px-4 py-2">
                      <span className="text-3xl font-bold text-purple-700">
                        {conversionResult.source.size}
                      </span>
                    </div>
                  </div>
                  
                  {/* Стрелка */}
                  <div className="animate-bounce mx-2 mt-8">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-8 w-8 text-purple-500"
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>
                  </div>
                  
                  {/* Результат */}
                  <div className="text-center min-w-[120px]">
                    <div className="text-sm font-medium text-gray-600 mb-1">
                      {conversionResult.destination.region}
                    </div>
                    <div className="flex flex-col gap-2">
                      {conversionResult.destination.sizes.length > 0 ? (
                        conversionResult.destination.sizes.map((size, i) => (
                          <div 
                            key={i} 
                            className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-md px-4 py-2"
                          >
                            <span className="text-2xl font-bold text-indigo-700">
                              {size}
                            </span>
                          </div>
                        ))
                      ) : (
                        <div className="bg-gray-100 rounded-md p-2">
                          <span className="text-gray-500 text-sm">
                            Соответствие не найдено
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-8">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-12 w-12 text-gray-400 mb-2"
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-500 text-l text-center mt-2">
                  Введите параметры для конвертации
                </p>
              </div>
            )}
          </div>
        </div>

        {saveSuccess && (
          <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-md text-sm">
            Размер сохранен в избранное
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;