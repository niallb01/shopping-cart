const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "GBP",
  style: "currency",
});

const FormatCurrency = (number: number) => {
  return CURRENCY_FORMATTER.format(number);
};

export default FormatCurrency;
