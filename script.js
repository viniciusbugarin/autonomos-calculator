function calculate() {

  const btn = document.getElementById("calc-btn");

  btn.innerText = "Calculando...";

  setTimeout(() => {

    const income = parseFloat(document.getElementById("income").value) || 0;
    const expenses = parseFloat(document.getElementById("expenses").value) || 0;
    const flat = document.getElementById("flat").value;
    const error = document.getElementById("error");
    
    let fee = flat === "yes" ? 80 : 300;

    let profit = income - expenses - fee;

    let tax = profit > 0 ? profit * 0.15 : 0;

    let net = profit - tax;
    if (!income || !expenses) {
      error.innerText = "Introduce ingresos y gastos";
      return;
    } else {
      error.innerText = "";
    }
    if (profit < 0) {
      document.getElementById("net").style.color = "red";
    } else {
      document.getElementById("net").style.color = "#22c55e";
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
