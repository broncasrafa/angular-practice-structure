export function numberFormatter(num) {
  if (num >= 1000000000) {
    return (num/1000000000).toFixed(1).replace(/\.0$/,'') + 'G';
  }

  if (num >= 1000000) {
    return (num/1000000).toFixed(1).replace(/\.0$/,'') + 'M';
  }

  if (num >= 1000) {
    return (num/1000).toFixed(1).replace(/\.0$/,'') + 'K';
  }

  return num;
}

export function numberThousandsFormatter(num: any) {
  if (!num || num === undefined) return 0;

  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}
