export const getLettersAvatar = (userInfo) => `${userInfo.name.toUpperCase().charAt(0)}${userInfo.lastName.toUpperCase().charAt(0)}`;
export const capitalize = (text) => `${text.charAt(0).toUpperCase()}${text.slice(1)}`;
