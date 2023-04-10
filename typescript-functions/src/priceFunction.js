"use strict";
const totalPrice = ({ price, discount, isInstallment, months }) => {
    let finalPrice = price;
    if (price && price > 0) {
        if (months && months > 0 && isInstallment) {
            finalPrice = (price - (price / 100 * discount)) / months;
        }
        else if (months && months > 0 && !isInstallment) {
            finalPrice = price - (price / 100 * discount);
        }
        else {
            console.log('Количество месяцев должно быть не меньше 0');
        }
    }
    else {
        console.log('Цена должна быть больше 0');
    }
    return finalPrice;
};
console.log(totalPrice({ price: 458, discount: 50, isInstallment: true, months: 30 }));
