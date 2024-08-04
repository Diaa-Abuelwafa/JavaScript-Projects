let inputValue = document.querySelector(".count");
let inputSubmit = document.querySelector(".submit");
let egy = document.querySelector(".results .one span");
let sar = document.querySelector(".results .two span");
let djf = document.querySelector(".results .three span");


fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=2ce4a0d520c94d0781f86ce0a034b67d").then((resolve) => {
    let data = resolve.json();
    return data;
}).then ((resolve) => {
    inputSubmit.onclick = function ()
    {
        egy.innerHTML = Math.round(inputValue.value * resolve.rates["EGP"]);
        sar.innerHTML = Math.round(inputValue.value * resolve.rates["SAR"]);
        djf.innerHTML = Math.round(inputValue.value * resolve.rates["DJF"]);
    }
})