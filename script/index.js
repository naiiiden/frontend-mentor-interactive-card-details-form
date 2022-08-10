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
    document.querySelector("#card_cvc").style.border = "1px solid #c4c4c4";
    document.querySelector(".card--cvc--error").style.display = "none";
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
    document.querySelector("#card_number").style.border = "1px solid #c4c4c4";
    document.querySelector(".card--number--error").style.display = "none";
});
document.querySelector("#card_number").addEventListener("keypress", e => {
    if (!/[0-9\./]+/.test(e.key)) { 
        e.preventDefault();
    };
});

// CARD DATE MONTH INPUT
document.querySelector("#card_exp_date_mm").addEventListener("input", () => {
    document.querySelector("#card_exp_date_mm").style.border = "1px solid #c4c4c4";
    if (document.querySelector("#card_exp_date_mm").value != "" && document.querySelector("#card_exp_date_yy").value != "") {
        document.querySelector(".card--date--error").style.display = "none";
    }
    if (document.querySelector("#card_exp_date_mm").value > document.querySelector("#card_exp_date_mm").max) {
        document.querySelector("#card_exp_date_mm").value = 0;
    }
    if (document.querySelector("#card_exp_date_mm").value.length > document.querySelector("#card_exp_date_mm").maxLength) {
        document.querySelector("#card_exp_date_mm").value = document.querySelector("#card_exp_date_mm").value.slice(0, document.querySelector("#card_exp_date_mm").maxLength); 
    }
    document.querySelector(".card--mm").textContent = document.querySelector("#card_exp_date_mm").value.slice(0, document.querySelector("#card_exp_date_mm").maxLength);
});

// CARD DATE YEAR INPUT
document.querySelector("#card_exp_date_yy").addEventListener("input", () => {
    document.querySelector("#card_exp_date_yy").style.border = "1px solid #c4c4c4";
    if (document.querySelector("#card_exp_date_mm").value != "" && document.querySelector("#card_exp_date_yy").value != "") {
        document.querySelector(".card--date--error").style.display = "none";
    }
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
    e.preventDefault();
    // EMPTY NAME INPUT
    if (document.querySelector("#cardholder_name").value == "") {
        document.querySelector(".card--name--error").style.display = "block";
        document.querySelector("#cardholder_name").style.border = "1px solid #ff5252";
    }
    // EMPTY NUMBER INPUT
    if (document.querySelector("#card_number").value == "") {
        document.querySelector(".card--number--error").style.display = "block";
        document.querySelector("#card_number").style.border = "1px solid #ff5252";
    }
    else if (document.querySelector("#card_number").value.length < 19) {
        document.querySelector(".card--number--error").style.display = "block";
        document.querySelector("#card_number").style.border = "1px solid #ff5252";
        document.querySelector(".card--number--error").textContent = "Card number must be 16 digits";

    }
    // EMPTY DATE INPUT
    if (document.querySelector("#card_exp_date_mm").value == "" || document.querySelector("#card_exp_date_yy").value == "") {
        document.querySelector(".card--date--error").style.display = "block";
        document.querySelector("#card_exp_date_mm").style.border = "1px solid #ff5252";
        document.querySelector("#card_exp_date_yy").style.border = "1px solid #ff5252";
    }
    if (document.querySelector("#card_exp_date_mm").value != "") {
        document.querySelector("#card_exp_date_mm").style.border = "1px solid #c4c4c4";
    }
    if (document.querySelector("#card_exp_date_yy").value != "") {
        document.querySelector("#card_exp_date_yy").style.border = "1px solid #c4c4c4";
    }
    // EMPTY CVC INPUT
    if (document.querySelector("#card_cvc").value == "") {
        document.querySelector(".card--cvc--error").style.display = "block";
        document.querySelector("#card_cvc").style.border = "1px solid #ff5252";  
    }
    else if (document.querySelector("#card_cvc").value.length < 3) {
        document.querySelector(".card--cvc--error").style.display = "block";
        document.querySelector("#card_cvc").style.border = "1px solid #ff5252";
        document.querySelector(".card--cvc--error").textContent = "CVC must be at least 3 digits";
    }
    // EVERYTHING IS CORRECT
    if (document.querySelector("#cardholder_name").value != "" && document.querySelector("#card_number").value != "" && document.querySelector("#card_exp_date_mm").value != "" && document.querySelector("#card_exp_date_yy").value != "" && document.querySelector("#card_cvc").value != "") {
        document.querySelector("form").style.display = "none";
        document.querySelector(".card--completion").style.display = "flex";
    }
});