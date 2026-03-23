function calculate() {

  const btn = document.getElementById("calc-btn");

  btn.innerText = "Calculando...";

  setTimeout(() => {

    const income = parseFloat(document.getElementById("income").value) || 0;
    const expenses = parseFloat(document.getElementById("expenses").value) || 0;
    const flat = document.getElementById("flat").value;

    let fee = flat === "yes" ? 80 : 300;

    let profit = income - expenses - fee;

    let irpfRate = 0.15;
    let tax = profit * irpfRate;

    let net = profit - tax;
    if (profit < 0) {
      document.getElementById("profit").style.color = "red";
    } else {
      document.getElementById("profit").style.color = "white";
      }

    document.getElementById("fee").innerText = fee.toFixed(2) + "€";
    document.getElementById("profit").innerText = profit.toFixed(2) + "€";
    document.getElementById("tax").innerText = tax.toFixed(2) + "€";
    document.getElementById("net").innerText = net.toFixed(2) + "€";

    document.querySelectorAll(".result-box").forEach(el => {
      el.classList.add("show");
    });

    btn.innerText = "Calcular resultado";

  }, 800);
}
