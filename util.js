function arredondar(valor) {
  return Math.round(valor * 100) / 100;
}

function formatarDinheiro(valor) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(valor);
}

// R$ 1.000,00
