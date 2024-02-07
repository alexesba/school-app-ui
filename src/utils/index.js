import numeral from 'numeral';

export const formatMoney = (number, format = '0,0') => (
  numeral(number).format(format)
);

export const formatNumber = (ranges, n) => {
  ranges.forEach(range => {
    if (n >= range.divider) {
      return (n / range.divider).toString() + range.suffix;
    }
    return null;
  });
  return n;
};
