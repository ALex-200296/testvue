export default function numberFormat(number) {
  const formatter = new Intl.NumberFormat('ru');
  return formatter.format(number);
}
