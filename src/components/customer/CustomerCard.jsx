'use client';
import React, { useState, useRef, useEffect } from "react";
import { updateFavoriteSizeAction, deleteFavoriteSizeAction } from "@/lib/server/sFavoriteSizeModel";

const CustomerCard = ({ 
  variant = "normal", 
  onClick, 
  customer,
  onInsertSize = () => {}
}) => {
  const [editingId, setEditingId] = useState(null);
  const [tempData, setTempData] = useState({ description: '', gender: 'UNISEX' });
  const inputRef = useRef(null);
  const genderOptions = ['MALE', 'FEMALE', 'UNISEX'];
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    if (editingId && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editingId]);

  const handleEditStart = (favSize) => {
    setEditingId(favSize.id);
    setTempData({
      description: favSize.description || '',
      gender: favSize.gender || 'UNISEX'
    });
  };

  const handleEditSave = async () => {
    if (!editingId) return;
    
    const formData = new FormData();
    formData.append('id', editingId);
    formData.append('description', tempData.description);
    formData.append('gender', tempData.gender);
    
    try {
      await updateFavoriteSizeAction(formData);
      setEditingId(null);
      window.location.reload();
    } catch (error) {
      console.error("Update error:", error);
    }
  };

  const handleDelete = async (favSizeId) => {
    if (!window.confirm('Удалить этот размер из избранного?')) return;
    
    try {
      await deleteFavoriteSizeAction(favSizeId);
      window.location.reload();
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  const ShortCard = () => (
    <div className='customer-card sort'>
      <img 
        src={customer?.image} 
        className='icon rounded-full border-2 border-purple-300 shadow-lg hover:border-purple-500 transition-all' 
        alt="User" 
      />
    </div>
  );

  const NormalCard = () => {
    const favoriteSizes = customer?.favoriteSizes || [];
    
    const handleInsert = (favSize) => {
      if (global.onFavoriteChange) {
        global.onFavoriteChange(favSize);
      }
    };

   return (
  <div className="relative h-[calc(100vh-150px)] flex gap-4">
    {/* Основной контент с скроллом */}
    <div className="flex flex-col">
      <div className="flex justify-between mb-4">
        <div>
          <div className='header-customer-name text-xl font-bold text-purple-700'>{customer?.name}</div>
          <div className='header-customer-email text-sm text-gray-600'>{customer?.email}</div>
        </div>
        <img 
          src={customer?.image} 
          className='icon rounded-full border-2 border-purple-300 shadow-lg hover:border-purple-500 transition-all'
          alt="User" 
        />
      </div>
      
      {favoriteSizes.length > 0 ? (
        <div className="w-full overflow-y-auto p-8 custom-scrollbar">
          <div className="text-lg font-bold text-center mb-6 text-purple-700 bg-gradient-to-r from-purple-100 to-pink-100 py-2 px-4 rounded-full shadow-sm">
            Избранные размеры
          </div>
          <div className="grid grid-cols-1 gap-4 pb-6">
            {favoriteSizes.map((favSize) => {
              const sizeValue = favSize.size?.value || favSize.size?.name || favSize.size?.label || 'Не указан';
              const isEditing = editingId === favSize.id;
              
              return (
                <div 
                  key={favSize.id}
                  onMouseEnter={() => setHoveredCard(favSize.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`p-4 rounded-xl transition-all duration-300 ${hoveredCard === favSize.id ? 'bg-gradient-to-br from-purple-50 to-pink-50 shadow-lg border border-purple-200' : 'bg-white shadow-md'}`}
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleInsert(favSize);
                    }}
                    title="Вставить в конвертер"
                    className="w-full text-left cursor-pointer group"
                  >
                    <div className="flex flex-col space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-lg text-purple-800 group-hover:text-purple-600 transition-colors">
                          {sizeValue}
                        </span>
                        <span className="text-xs font-semibold bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                          {favSize.size?.region?.code || ''}
                        </span>
                      </div>
                    
                      {favSize.title && (
                        <div className="text-sm text-gray-700 font-medium">
                          <span className="text-purple-600">Категория:</span> {favSize.title}
                        </div>
                      )}
                      
                      {isEditing ? (
                        <div className="mt-3 space-y-3">
                          <div>
                            <label className="block text-sm font-semibold text-purple-700 mb-1">Пол</label>
                            <select
                              value={tempData.gender}
                              onChange={(e) => setTempData({...tempData, gender: e.target.value})}
                              className="text-sm p-2 border border-purple-200 rounded-lg w-full focus:ring-2 focus:ring-purple-300 focus:border-purple-500 bg-white"
                            >
                              {genderOptions.map((gender) => (
                                <option key={gender} value={gender}>{gender}</option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-purple-700 mb-1">Описание</label>
                            <input
                              ref={inputRef}
                              type="text"
                              value={tempData.description}
                              onChange={(e) => setTempData({...tempData, description: e.target.value})}
                              className="text-sm p-2 border border-purple-200 rounded-lg w-full focus:ring-2 focus:ring-purple-300 focus:border-purple-500 bg-white"
                              placeholder="Добавьте описание..."
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          {favSize.gender && (
                            <div className="text-sm text-gray-700">
                              <span className="font-semibold text-purple-600">Пол:</span> {favSize.gender}
                            </div>
                          )}
                          {favSize.description && (
                            <div className="text-sm text-gray-700">
                              <span className="font-semibold text-purple-600">Описание:</span> {favSize.description}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </button>
                  
                  <div className="flex justify-end gap-6 mt-6">
                    {isEditing ? (
                      <>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setEditingId(null);
                          }}
                          className="text-sm px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all shadow-sm hover:shadow-md"
                        >
                          Отмена
                        </button>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleEditSave();
                          }}
                          className="text-sm px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all shadow-sm hover:shadow-md transform hover:scale-105"
                        >
                          Сохранить
                        </button>
                      </>
                    ) : (
                      <>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleEditStart(favSize);
                          }}
                          className="text-sm px-3 py-1.5 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-all shadow-sm hover:shadow-md"
                        >
                          ✏️
                        </button>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDelete(favSize.id);
                          }}
                          className="text-sm px-3 py-1.5 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-all shadow-sm hover:shadow-md"
                        >
                          🗑️
                        </button>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="mt-6 text-sm text-gray-500 text-center bg-white p-4 rounded-xl shadow-sm">
          Нет избранных размеров
        </div>
      )}
  
        </div>
        
     
      </div>
    );
  };

  return (
    <div 
      className={`customer-card ${variant} ${onClick ? 'cursor-pointer' : ''}`} 
      onClick={onClick}
    >
      {variant === "short" ? <ShortCard /> : <NormalCard />}
    </div>
  );
};

export default CustomerCard;