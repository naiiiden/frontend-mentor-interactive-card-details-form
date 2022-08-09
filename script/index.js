document.querySelector("#cardholder_name").addEventListener("input", () => {
    document.querySelector(".card--name").textContent = document.querySelector("#cardholder_name").value;
});