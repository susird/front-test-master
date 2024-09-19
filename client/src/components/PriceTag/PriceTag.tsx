type PriceTagProps = {
  price: number;
  currency?: string;
};

export const PriceTag: React.FC<PriceTagProps> = ({
  price,
  currency = '€',
}) => {
  return (
    <div className='absolute h-52 w-28 -translate-x-[32px] -translate-y-[100px] rotate-[60deg] bg-white p-2'>
      <p>
        {price} {currency}
      </p>
    </div>
  );
};
