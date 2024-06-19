function upadateCaseNumber(product, price, isIncreasing){
    const caseInput = document.getElementById(product + '-number');
    let caseNumber = caseInput.value;
            if(isIncreasing){
                caseNumber = parseInt(caseNumber) + 1;
            }
            
    else if(caseNumber > 0){
           caseNumber = parseInt(caseNumber) - 1;
         }
        
        caseInput.value = caseNumber;

    const caseTotal = document.getElementById(product + '-total');
    caseTotal.innerText = caseNumber * price;
    calculateTotal();
    }


    function getInputvalue(product){
        const productInput = document.getElementById(product + '-number');
        const productNumber = parseInt(productInput.value);
        return productNumber;
    }
    function calculateTotal(){
        const phoneTotal = getInputvalue('phone') * 500;
        const caseTotal = getInputvalue('case') * 2000;
        const subTotal = phoneTotal + caseTotal;
        const tax = subTotal / 20;
        const totalPrice = subTotal + tax;


        document.getElementById('sub-total').innerText = subTotal;
        document.getElementById('tax-amount').innerText = tax;
        document.getElementById('total-price').innerText = totalPrice;

    }





document.getElementById('case-plus').addEventListener('click',function(){
   upadateCaseNumber('case', 2000 ,true);
});

document.getElementById('case-minus').addEventListener('click',function(){
upadateCaseNumber('case', 2000, false);
});

document.getElementById('phone-plus').addEventListener('click',function(){
    upadateCaseNumber('phone',500, true);
});


document.getElementById('phone-minus').addEventListener('click',function(){
    upadateCaseNumber('phone',500 , false);
});