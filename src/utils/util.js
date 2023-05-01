export const headerSetter = (str) => {
  const formattedString = str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
  return formattedString;
};
