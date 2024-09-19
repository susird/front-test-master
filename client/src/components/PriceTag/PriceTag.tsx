type PriceTagProps = {
  price: number;
  currency?: string;
};

export const PriceTag: React.FC<PriceTagProps> = ({
  price,
  currency = '€',
}) => {
  return (
    <div className='absolute'>
      <div className='h-52 w-28 -translate-x-[32px] -translate-y-[100px] rotate-[58deg] bg-white'></div>
      <div className='absolute left-3 top-3'>
        <p className='text-sm'>
          {Number.parseFloat(price.toString()).toFixed(2)} <sub>{currency}</sub>
        </p>
      </div>
    </div>
  );
};
