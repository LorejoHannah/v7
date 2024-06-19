$("input[name='expiry-data']").mask("00 / 00");

document.getElementById('payment-form').addEventListener('submit', function(event) {
    var cardHolder = document.querySelector('input[placeholder="Coding Market"]').value;
    var cardNumber = document.querySelector('input[placeholder="Card Number"]').value;
    var expiryDate = document.querySelector('input[placeholder="00 / 00"]').value;
    var cvc = document.querySelector('input[placeholder="000"]').value;

    if (!cardHolder || !cardNumber || !expiryDate || !cvc) {
        event.preventDefault();
        alert('Please fill out all required fields.');
    }
});