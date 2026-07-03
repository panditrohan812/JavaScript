function calculate() {
  let n1 = parseFloat(document.getElementById("num1").value);
  let n2 = parseFloat(document.getElementById("num2").value);
  let op = document.getElementById("operation").value;
  let result;

  switch (op) {
    case "add":
      result = n1 + n2;
      break;

    case "sub":
      result = n1 - n2;
      break;

    case "mul":
      result = n1 * n2;
      break;

    case "div":
      result = n2 !== 0 ? n1 / n2 : "Cannot divide by zero";
      break;

    case "mod":
      result = n1 % n2;
      break;

    case "pow":
      result = n1 ** n2;
      break;

    case "square":
      result = n1 * n1;
      break;

    case "cube":
      result = n1 ** 3;
      break;

    case "percentage":
      result = (n1 / n2) * 100 + "%";
      break;

    case "average":
      result = (n1 + n2) / 2;
      break;

    case "max":
      result = Math.max(n1, n2);
      break;

    case "min":
      result = Math.min(n1, n2);
      break;

    case "inc":
      result = n1 + 1;
      break;

    case "dec":
      result = n1 - 1;
      break;

    case "double":
      result = n1 * 2;
      break;

    case "half":
      result = n1 / 2;
      break;

    case "discount":
      result = n1 - (n1 * n2) / 100;
      break;

    case "gst":
      result = n1 + (n1 * 18) / 100;
      break;

    case "area":
      result = n1 * n2;
      break;

    case "Parameter":
      result = 2 * (n1 + n2);
      break;
  }

  document.getElementById("result").innerText = "Result: " + result;
}
