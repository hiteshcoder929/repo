const URL = "https://latest.currency-api.pages.dev/v1/currencies/eur.json";
const currSelector = document.querySelectorAll(".dp");

for(code in countryList){
    for (let currency of code){
     options = document.createElement("option")
     options.innerText = code;
     options.value = code;
        currency.append(options);
    }
}

let btn = document.querySelector("button");
