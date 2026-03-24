function formatMoney(value) {
  return value.toLocaleString("es-ES", {
    style: "currency",
    currency: "EUR"
  });
}

function calculate() {

  const income = parseFloat(document.getElementById("income").value);
  const expenses = parseFloat(document.getElementById("expenses").value);
  const flat = document.getElementById("flat").value;
  const error = document.getElementById("error");
  const btn = document.getElementById("calc-btn");

  // VALIDACIÓN
  if (!income || !expenses) {
    error.innerText = "Introduce ingresos y gastos válidos";
    return;
  } else {
    error.innerText = "";
  }

  btn.disabled = true;
  btn.innerText = "Calculando...";

  setTimeout(() => {

    let fee = flat === "yes" ? 80 : 300;

    let profit = income - expenses - fee;

    // IRPF PRO
    let irpfRate;

    if (profit <= 1000) irpfRate = 0.1;
    else if (profit <= 3000) irpfRate = 0.15;
    else irpfRate = 0.2;

    let tax = profit > 0 ? profit * irpfRate : 0;

    let net = profit - tax;

    // MOSTRAR RESULTADOS
    document.getElementById("fee").innerText = formatMoney(fee);
    document.getElementById("profit").innerText = formatMoney(profit);
    document.getElementById("tax").innerText = formatMoney(tax);
    document.getElementById("net").innerText = formatMoney(net);

    // COLOR NETO
    const netEl = document.getElementById("net");
    netEl.style.color = net < 0 ? "#ef4444" : "#22c55e";

    // ANIMACIONES
    document.getElementById("results").classList.add("show");

    document.querySelectorAll(".result-box").forEach(el => {
      el.classList.add("show");
    });

    btn.disabled = false;
    btn.innerText = "Calcular resultado";

  }, 800);
}
