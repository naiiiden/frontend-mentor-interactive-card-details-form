// CARDHOLDER NAME INPUT
document.querySelector("#cardholder_name").addEventListener("input", () => {
    document.querySelector(".card--name").textContent = document.querySelector("#cardholder_name").value;
});
document.querySelector("#cardholder_name").addEventListener("keypress", e => {
    if (/[0-9\./]+/.test(e.key)) { 
        e.preventDefault();
    };
});

// CVC INPUT
document.querySelector("#card_cvc").addEventListener("input", () => {
    if (document.querySelector("#card_cvc").value.length > document.querySelector("#card_cvc").maxLength) {
        document.querySelector("#card_cvc").value = document.querySelector("#card_cvc").value.slice(0, document.querySelector("#card_cvc").maxLength); 
    }
    document.querySelector(".card--cvc").textContent = document.querySelector("#card_cvc").value.slice(0, document.querySelector("#card_cvc").maxLength);
});