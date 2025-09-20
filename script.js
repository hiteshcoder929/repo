const URL = "https://latest.currency-api.pages.dev/v1/currencies/eur.json";
const dropdowns = document.querySelectorAll("select");
let btn = document.querySelector("button");
let msg = document.querySelector(".msg")

for (let select of dropdowns) {
    for (let curry in countryList) {
        let option = document.createElement("option");
        option.value = curry;
        option.innerText = curry;
        if (select.name === "from" && curry === "INR") {
            option.selected = "selected";
        }
        if (select.name === "to" && curry === "USD") {
            option.selected = "selected";
        }
        select.append(option);
    }
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
        msg.innerText = "click EXCHANGE "
    })
}


updateFlag = (element) => {
    let newimg = `https://flagsapi.com/${countryList[element.value]}/flat/64.png`;
    element.parentElement.querySelector("img").src = newimg;
    element.querySelector("img").src = newimg;
}

btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    let amount = document.querySelector("input");
    let amoval = amount.value;;
    if (amount.value < 1 || amount.value === "") {
        amoval = 1;
        amount.value = "1";
    }
    msg.innerText = "Google see puch raha hu....."
    if (amoval = Number) {
        setTimeout(() => {
            msg.innerText = "Bata nhi rha google app hi puch lo";
        }, 3000);
    };
})