export const generateUniqueId = () => {
  return `${new Date().getTime()}-${Math.floor(Math.random() * 10000)}`;
};
