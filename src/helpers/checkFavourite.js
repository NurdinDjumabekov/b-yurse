export const checkFavourite = (obj, list) => {
  // Проверяем, есть ли в списке элемент с таким же id, как у obj
  return list?.some((item) => item.id === obj.id);
};
