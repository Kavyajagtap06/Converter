function convertCurrency() {
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("from").value;
    const toCurrency = document.getElementById("to").value;
    
    // Define exchange rates (in a real app, you'd fetch these from an API)
    const exchangeRates = {
        usd: 1,
        eur: 0.93,
        gbp: 0.81,
        jpy: 148.37,    // Japanese Yen
        aud: 1.55,      // Australian Dollar
        cad: 1.34,      // Canadian Dollar
        chf: 0.90,      // Swiss Franc
        cny: 7.30,      // Chinese Yuan
        inr: 82.84,     // Indian Rupee
        rub: 95.97
    };

    // Calculate the converted amount
    const convertedAmount = amount * (exchangeRates[toCurrency] / exchangeRates[fromCurrency]);

    // Display the result
    document.getElementById("result").textContent = convertedAmount.toFixed(2);
}
function resetConverter() {
    document.getElementById("amount").value = "";
    document.getElementById("from").value = "usd";
    document.getElementById("to").value = "usd";
    document.getElementById("result").textContent = "0";
}