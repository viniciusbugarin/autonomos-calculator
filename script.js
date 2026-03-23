function calculate() {

  const income = parseFloat(document.getElementById("income").value) || 0;
  const expenses = parseFloat(document.getElementById("expenses").value) || 0;
  const flat = document.getElementById("flat").value;

  let fee = flat === "yes" ? 80 : 300;

  let profit = income - expenses - fee;

  let irpfRate = 0.15;
  let tax = profit * irpfRate;

  let net = profit - tax;

  document.getElementById("fee").innerText = fee.toFixed(2) + "€";
  document.getElementById("tax").innerText = tax.toFixed(2) + "€";
  document.getElementById("net").innerText = net.toFixed(2) + "€";
}
