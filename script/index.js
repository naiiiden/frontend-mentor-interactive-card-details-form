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

// CARD NUMBER INPUT
document.querySelector("#card_number").addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
    document.querySelector(".card--number").textContent = document.querySelector("#card_number").value;
});
document.querySelector("#card_number").addEventListener("keypress", e => {
    if (!/[0-9\./]+/.test(e.key)) { 
        e.preventDefault();
    };
});

// CARD DATE MONTH INPUT
document.querySelector("#card_exp_date_mm").addEventListener("input", () => {
    document.querySelector(".card--mm").textContent = document.querySelector("#card_exp_date_mm").value;
});