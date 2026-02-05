function electricityBill() {
  let power = +prompt("what is the kwh used ?");
  let x = 0;
  let bill = 0;
  if (power > 100) {
    x = power - 100;
    bill = 100 * 0.75 + x * 1.2;
    console.log("bill is " + bill);
  } else {
    bill = power * 0.75;
    console.log("bill is " + bill);
  }

  let service = confirm("Do you want this optional services ?");
  if (service == true) {
    bill += 5;
    console.log("bill is " + bill);
  }
  let vat = bill * 0.14;

  bill = bill + vat;

  console.log("bill is " + bill);
}

function splitBill() {
  let bill = +prompt("what is the total bill ?");
  bill = bill * 1.12;
  console.log("service : " + bill);
  bill = bill * 1.14;
  console.log("vat : " + bill);
  let people = +prompt("how many people ?");
  bill = bill / people;
  console.log(" Each : " + bill);
}
