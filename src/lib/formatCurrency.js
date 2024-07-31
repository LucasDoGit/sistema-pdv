const formatCurrency = {
  brl(value) {
    value = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);

    return value;
  },
};

export default formatCurrency;
