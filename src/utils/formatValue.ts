const formatValue = (value: number): string => {
  if (value) {
    return Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  }
  return 'R$ 0,00';
};
export default formatValue;
