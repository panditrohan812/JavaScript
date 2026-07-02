"use strict";
function checkEvenOdd() {
  let value = document.getElementById("num1").value;
  if (value === "") {
    alert("Please enter a value");
    return;
  }
  let num = Number(value);
  document.getElementById("result1").innerText = num % 2 === 0 ? "Even" : "Odd";
}
function checkSign() {
  let value = document.getElementById("num2").value;
  if (value === "") {
    alert("Please enter a value");
    return;
  }
  let num = Number(value);
  document.getElementById("result2").innerText =
    num >= 0 ? "Positive" : "Negative";
}
function table() {
  let value = document.getElementById("num3").value;
  if (value === "") {
    alert("Please enter a value");
    return;
  }
  let num = Number(value);
  let output = "";
  for (let i = 1; i <= 10; i++) {
    output += `${num} x ${i} = ${num * i}\n`;
  }
  document.getElementById("result3").innerText = output;
}
function checkMarks() {
  let value = document.getElementById("marks").value;
  if (value === "") {
    alert("Please enter a value");
    return;
  }
  let marks = Number(value);
  document.getElementById("result4").innerText = marks >= 35 ? "Pass" : "Fail";
}
function checkAge() {
  let value = document.getElementById("age").value;
  if (value === "") {
    alert("Please enter a value");
    return;
  }
  let age = Number(value);
  document.getElementById("result5").innerText =
    age >= 18 ? "Eligible" : "Not Eligible";
}
function sumNum() {
  let value = document.getElementById("num6").value;
  if (value === "") {
    alert("Please enter a value");
    return;
  }
  let n = Number(value);
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  document.getElementById("result6").innerText = sum.toString();
}
function checkDiv() {
  let value = document.getElementById("num7").value;
  if (value === "") {
    alert("Please enter a value");
    return;
  }
  let num = Number(value);
  document.getElementById("result7").innerText =
    num % 5 === 0 ? "Divisible" : "Not Divisible";
}
function countDown() {
  let value = document.getElementById("num8").value;
  if (value === "") {
    alert("Please enter a value");
    return;
  }
  let num = Number(value);
  let output = "";
  for (let i = num; i >= 1; i--) {
    output += i + "\n";
  }
  document.getElementById("result8").innerText = output;
}
function factorial() {
  let value = document.getElementById("num9").value;
  if (value === "") {
    alert("Please enter a value");
    return;
  }
  let num = Number(value);
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  document.getElementById("result9").innerText = fact.toString();
}
function largest() {
  let value1 = document.getElementById("num10a").value;
  let value2 = document.getElementById("num10b").value;
  if (value1 === "" || value2 === "") {
    alert("Please enter both values");
    return;
  }
  let n1 = Number(value1);
  let n2 = Number(value2);
  document.getElementById("result10").innerText =
    n1 > n2 ? `${n1} is Larger` : `${n2} is Larger`;
}
