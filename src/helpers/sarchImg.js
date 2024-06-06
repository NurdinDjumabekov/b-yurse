export const sarchImg = (list) => {
  return list?.find((item) => item?.main === true);
};

export const sarchImgSeconds = (list) => {
  return list?.filter((item) => item?.main === false);
};
