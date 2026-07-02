export{}

function checkEvenOdd(): void {
  let value: string = (document.getElementById("num1") as HTMLInputElement).value;
  if (value === "") {
    alert("Please enter a value");
    return;
  }
  let num: number = Number(value);
  document.getElementById("result1")!.innerText = num % 2 === 0 ? "Even" : "Odd";
}

function checkSign(): void {
  let value: string = (document.getElementById("num2") as HTMLInputElement).value;
  if (value === "") {
    alert("Please enter a value");
    return;
  }
  let num: number = Number(value);
  document.getElementById("result2")!.innerText = num >= 0 ? "Positive" : "Negative";
}

function table(): void {
  let value: string = (document.getElementById("num3") as HTMLInputElement).value;
  if (value === "") {
    alert("Please enter a value");
    return;
  }
  let num: number = Number(value);
  let output: string = "";
  for (let i: number = 1; i <= 10; i++) {
    output += `${num} x ${i} = ${num * i}\n`;
  }
  document.getElementById("result3")!.innerText = output;
}

function checkMarks(): void {
  let value: string = (document.getElementById("marks") as HTMLInputElement).value;
  if (value === "") {
    alert("Please enter a value");
    return;
  }
  let marks: number = Number(value);
  document.getElementById("result4")!.innerText = marks >= 35 ? "Pass" : "Fail";
}

function checkAge(): void {
  let value: string = (document.getElementById("age") as HTMLInputElement).value;
  if (value === "") {
    alert("Please enter a value");
    return;
  }
  let age: number = Number(value);
  document.getElementById("result5")!.innerText = age >= 18 ? "Eligible" : "Not Eligible";
}

function sumNum(): void {
  let value: string = (document.getElementById("num6") as HTMLInputElement).value;
  if (value === "") {
    alert("Please enter a value");
    return;
  }
  let n: number = Number(value);
  let sum: number = 0;
  for (let i: number = 1; i <= n; i++) {
    sum += i;
  }
  document.getElementById("result6")!.innerText = sum.toString();
}

function checkDiv(): void {
  let value: string = (document.getElementById("num7") as HTMLInputElement).value;
  if (value === "") {
    alert("Please enter a value");
    return;
  }
  let num: number = Number(value);
  document.getElementById("result7")!.innerText = num % 5 === 0 ? "Divisible" : "Not Divisible";
}

function countDown(): void {
  let value: string = (document.getElementById("num8") as HTMLInputElement).value;
  if (value === "") {
    alert("Please enter a value");
    return;
  }
  let num: number = Number(value);
  let output: string = "";
  for (let i: number = num; i >= 1; i--) {
    output += i + "\n";
  }
  document.getElementById("result8")!.innerText = output;
}

function factorial(): void {
  let value: string = (document.getElementById("num9") as HTMLInputElement).value;
  if (value === "") {
    alert("Please enter a value");
    return;
  }
  let num: number = Number(value);
  let fact: number = 1;
  for (let i: number = 1; i <= num; i++) {
    fact *= i;
  }
  document.getElementById("result9")!.innerText = fact.toString();
}

function largest(): void {
  let value1: string = (document.getElementById("num10a") as HTMLInputElement).value;
  let value2: string = (document.getElementById("num10b") as HTMLInputElement).value;
  if (value1 === "" || value2 === "") {
    alert("Please enter both values");
    return;
  }
  let n1: number = Number(value1);
  let n2: number = Number(value2);
  document.getElementById("result10")!.innerText = n1 > n2 ? `${n1} is Larger` : `${n2} is Larger`;
}