// https://open.exchangerate-api.com/v6/latest

// selectors
const curencyEl_One = document.querySelector("#currency-one");
const amountEl_One = document.querySelector("#amount-one");

const curencyEl_Two = document.querySelector("#currency-two");
const amountEl_Two = document.querySelector("#amount-two");

const rateEl = document.querySelector("#rate");
const swap = document.querySelector("#swap");

const date = document.querySelector("#date");
const mkd = document.querySelector("#mkd");
// Event listeners
curencyEl_One.addEventListener("change", calculate);
amountEl_One.addEventListener("input", calculate);
curencyEl_Two.addEventListener("change", calculate);
amountEl_Two.addEventListener("input", calculate);
swap.addEventListener("click", swapCurencies);

//functions
//Fetch exchange rates and update the dom

function calculate() {
  const currency_one = curencyEl_One.value;
  const currency_two = curencyEl_Two.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const rate = data.rates[currency_two];
      rateEl.innerText = `1 ${currency_one} = ${rate.toFixed(
        2
      )} ${currency_two}`;
      amountEl_Two.value = (amountEl_One.value * rate).toFixed(2);

      const ToMKD = `${(
        data.rates[currency_one] *
        data.rates["EUR"] *
        61.45
      ).toFixed(2)}`;
      mkd.innerText = `|| 1${currency_one} = ${ToMKD}ден || ${
        amountEl_One.value
      }${currency_one} =  ${(amountEl_One.value * Number(ToMKD)).toFixed(
        2
      )}ден`;

      date.innerText = "Date:  " + data.date;
    });
}

// async function calculate() {
//   const currency_one = curencyEl_One.value;
//   const currency_two = curencyEl_Two.value;

//   await fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data);
//       const rate = data.rates[currency_two];
//       rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

//       amountEl_Two.value = rate * amountEl_One.value

//       //   mkd.innerText= (data.rates[currency_one] * data.rates['EUR'] * 61.45).toFixed(2);

//       mkd.innerText = rate;

//       date.innerText = data.date;
//     });
// }

function swapCurencies() {
  const temp = curencyEl_One.value;
  curencyEl_One.value = curencyEl_Two.value;
  curencyEl_Two.value = temp;

  calculate();
}

calculate();
