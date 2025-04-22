import React from "react";

const CustomerCard = ({ variant = "normal", onClick, customer }) => {
  const ShortCard = () => {
    return (
      <div className='customer-card sort'>
        <img src={customer.image} className='icon rounded-full' />
      </div>
    );
  };

  const NormalCard = () => {
    return (
      <div className='flex gap-2 customer-card normal'>
        <div className='flex flex-col items-end justify-center'>
          <div className='header-customer-name'>{customer.name}</div>
          <div className='header-customer-email'>{customer.email}</div>
        </div>

        <img src={customer.image} className='icon rounded-full' />
      </div>
    );
  };

  return (
    <div className={`flex gap-2 customer-card normal ${onClick?'cursor-pointer':''}`} onClick={onClick}>
      {variant == "short" && <ShortCard />}
      {variant == "normal" && <NormalCard />}
    </div>
  );
};

export default CustomerCard;
