const formatDate = (date: Date): string => {
  const dateFormat = new Date(date);

  const month =
    dateFormat.getMonth() < 10
      ? `0${dateFormat.getMonth()}`
      : dateFormat.getMonth();

  return `${dateFormat.getDate()}/${month}/${dateFormat.getFullYear()}`;
};

export default formatDate;
