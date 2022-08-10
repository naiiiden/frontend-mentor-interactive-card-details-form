// CARDHOLDER NAME INPUT
document.querySelector("#cardholder_name").addEventListener("input", () => {
    document.querySelector(".card--name").textContent = document.querySelector("#cardholder_name").value;
    document.querySelector("#cardholder_name").style.border = "1px solid #c4c4c4";
    document.querySelector(".card--name--error").style.display = "none";
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
document.querySelector("#card_cvc").addEventListener("keypress", e => {
    if (!/[0-9\./]+/.test(e.key)) { 
        e.preventDefault();
    };
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
document.querySelector("#card_exp_date_mm").addEventListener("input", (e) => {
    if (document.querySelector("#card_exp_date_mm").value > document.querySelector("#card_exp_date_mm").max) {
        document.querySelector("#card_exp_date_mm").value = 0;
    }
    if (document.querySelector("#card_exp_date_mm").value.length > document.querySelector("#card_exp_date_mm").maxLength) {
        document.querySelector("#card_exp_date_mm").value = document.querySelector("#card_exp_date_mm").value.slice(0, document.querySelector("#card_exp_date_mm").maxLength); 
    }
    document.querySelector(".card--mm").textContent = document.querySelector("#card_exp_date_mm").value.slice(0, document.querySelector("#card_exp_date_mm").maxLength);
});

// CARD DATE YEAR INPUT
document.querySelector("#card_exp_date_yy").addEventListener("input", (e) => {
    if (document.querySelector("#card_exp_date_yy").value > document.querySelector("#card_exp_date_yy").max) {
        document.querySelector("#card_exp_date_yy").value = 0;
    }
    if (document.querySelector("#card_exp_date_yy").value.length > document.querySelector("#card_exp_date_yy").maxLength) {
        document.querySelector("#card_exp_date_yy").value = document.querySelector("#card_exp_date_yy").value.slice(0, document.querySelector("#card_exp_date_yy").maxLength); 
    }
    document.querySelector(".card--yy").textContent = document.querySelector("#card_exp_date_yy").value.slice(0, document.querySelector("#card_exp_date_yy").maxLength);
});

// SUBMIT
document.querySelector("#submit").addEventListener("click", (e) => {
    if (document.querySelector("#cardholder_name").value == "") {
        document.querySelector(".card--name--error").style.display = "block";
        document.querySelector("#cardholder_name").style.border = "1px solid #ff5252";
        e.preventDefault();
    }
});