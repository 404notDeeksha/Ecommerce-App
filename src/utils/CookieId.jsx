export const setCookieId = (value) => {
  const DAYS_IN_MILLISECONDS = 24 * 60 * 60 * 1000;
  const date = new Date();
  date.setTime(date.getTime() + 2 * DAYS_IN_MILLISECONDS); // Convert days to milliseconds
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `cId=${value}; ${expires}; path=/`;
};

export const getCookieId = () => {
  let name = `cId`;
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(`${name}=`)) {
      return cookie.substring(name.length + 1);
    }
  }
  return null;
};
