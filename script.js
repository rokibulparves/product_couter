const price = document.getElementById("price");
const total = document.getElementById("total");
const calculate = document.getElementById("button");

const productPrice = 5000;
let newPrice = 0;

price.innerHTML = `Tk ${productPrice}`;
total.innerHTML = `Total 0`;

calculate.addEventListener("click", function () {
  newPrice += productPrice;
  total.innerHTML = `Total ${newPrice}`;
  console.log(newPrice);
});
