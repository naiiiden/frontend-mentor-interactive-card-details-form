// CARDHOLDER NAME INPUT
document.querySelector("#cardholder_name").addEventListener("input", () => {
    document.querySelector(".card--name").textContent = document.querySelector("#cardholder_name").value;
});
document.querySelector("#cardholder_name").addEventListener("keypress", e => {
    if (/[0-9\./]+/.test(e.key)) { 
        e.preventDefault();
    };
});

