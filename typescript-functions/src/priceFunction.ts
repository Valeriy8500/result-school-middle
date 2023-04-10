interface TotalPriceParam {
  price: number;
  discount: number;
  isInstallment: boolean;
  months: number;
}

const totalPrice = ({ price, discount, isInstallment, months }: TotalPriceParam): number | string => {
  let finalPrice: number | string = price;

  if (price && price > 0) {
    if (months && months > 0 && isInstallment) {
      finalPrice = (price - (price / 100 * discount)) / months;
    } else if (months && months > 0 && !isInstallment) {
      finalPrice = price - (price / 100 * discount);
    } else {
      finalPrice = 'Количество месяцев должно быть не меньше 0';
    }
  } else {
    finalPrice = 'Цена должна быть больше 0';
  }

  return finalPrice;
};

console.log(totalPrice({ price: 500, discount: 30, isInstallment: true, months: 3 }));