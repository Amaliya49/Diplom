import React from "react";

const CustomerCard = ({ 
  variant = "normal", 
  onClick, 
  customer,
  onInsertSize = () => {}
}) => {
  const ShortCard = () => (
    <div className='customer-card sort'>
      <img 
        src={customer?.image} 
        className='icon rounded-full' 
        alt="User" 
      />
    </div>
  );

  const NormalCard = () => {
    const favoriteSizes = customer?.favoriteSizes || [];
    
    const handleInsert = (favSize) => {
      const sizeData = {
        size: favSize.size?.label,
        category: favSize.title,
        region: favSize.size.region.name,
        description: favSize.description,
        gender: favSize.gender
      };
      onInsertSize(sizeData);
    };

    return (
      <div className='flex gap-2 customer-card normal'>
        <div className='flex flex-col items-end justify-center'>
          <div className='header-customer-name'>{customer?.name}</div>
          <div className='header-customer-email'>{customer?.email}</div>
          
          {favoriteSizes.length > 0 ? (
            <div className="mt-2">
              <div className="text-sm font-semibold">Избранные размеры:</div>
              <div className="flex flex-wrap gap-1 mt-1">
                {favoriteSizes.map((favSize) => {
                  const sizeValue = favSize.size?.value || favSize.size?.name || favSize.size?.label || 'Не указан';
                  
                  return (
                    <div 
                      key={favSize.id} 
                      className="px-3 py-2 text-sm bg-gray-100 rounded-lg relative group hover:bg-gray-200 transition-colors"
                    >
                      <div className="font-medium">
                        Размер: {sizeValue}
                      </div>
                      {favSize.title && <div>Категория: {favSize.title}</div>}
                      {favSize.region && <div>Регион: {favSize.size.region.name}</div>}
                      {favSize.description && <div>Описание: {favSize.description}</div>}
                      {favSize.gender && <div>Пол: {favSize.gender}</div>}
                      
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleInsert(favSize);
                        }}
                        className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-blue-600"
                        title="Вставить в конвертер"
                        aria-label="Вставить размер"
                      >
                        +
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="mt-2 text-xs text-gray-500">
              Нет избранных размеров
            </div>
          )}
        </div>
        
        <img 
          src={customer?.image} 
          className='icon rounded-full' 
          alt="User" 
        />
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