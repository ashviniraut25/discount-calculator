const bill = document.querySelector('#bill');
const discount = document.querySelector('#discount');
const calculator = document.querySelector('#calculator');
const total = document.querySelector('#total');

calculator.addEventListener('click', () => {
    const billValue = bill.value;
    const discountValue = discount.value;
    const valid = isValid(discountValue, billValue);


    if (valid == false) {
        total.innerHTML = `Total amount to pay is : `;
        alert(`Entered Bill Amount Or Discount is not correct : BillAmount: ${billValue},Discount:${discountValue}`);
    

    } else {
        const discountAmount = billValue - (billValue * discountValue) / 100;
        console.log(discountAmount);
        total.innerHTML = `Total amount to pay is : ${discountAmount}`;
    }
});


function isValid(discount, bill) {
    if (discount <= 0 || discount > 100 || bill <= 0) {
        return false;
    }
    return true;
};
