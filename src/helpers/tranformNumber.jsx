export const tranformNumber = (phoneNumber) => {
  return phoneNumber.replace(/[^\d]/g, "");
};
