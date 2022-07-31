const updateCost = (id, cost) => {
    document.getElementById(id).innerText = cost;
    totalCalculation();
};


const totalCalculation = () => {
    const bestPrice = parseInt(document.getElementById('best-price').innerText);
    const memoryCost = parseInt(document.getElementById('memory-cost').innerText);
    const storageCost = parseInt(document.getElementById('storage-cost').innerText);
    const deliveryCost = parseInt(document.getElementById('delivery-cost').innerText);
    const subTotal = bestPrice + memoryCost + storageCost + deliveryCost;
    console.log(subTotal);
    document.getElementById('sub-total-price').innerText = subTotal;
    document.getElementById('total-price').innerText = subTotal;
}

const promoCode = (inputId) => {
    const inputFlied = document.getElementById('promo-code').value;
    const subTotal = parseInt(document.getElementById('sub-total-price').innerText);
    if (inputFlied == 'stevekaku') {
        const discount = subTotal * (20 / 100);
        const totalWithDiscount = subTotal - discount;
        document.getElementById('total-price').innerText = totalWithDiscount;
    }
    document.getElementById('promo-code').value = '';
}



// submit Assignment
// github: https://github.com/programming-hero-web-course2/mac-book-pro-WalkerShahed-2021
// https://hopeful-carson-28e544.netlify.app/