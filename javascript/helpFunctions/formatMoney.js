const formatter = Intl.NumberFormat('MKD', {
  style: 'currency',
  currency: 'MKD',
});

export default function formatMoney(cents) {
  return formatter.format(cents / 5);
}


// Convert a number to money formatting
export const convertMoney = (money) => {
  const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
  });

  return formatter.format(money);
};