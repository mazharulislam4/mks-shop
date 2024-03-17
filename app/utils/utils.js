
import Cookies from "js-cookie";

export const passwordRgx =
  /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

export const isStrong = (str) => passwordRgx.test(str);

const getToken = () => {
  const token = Cookies.get(process.env.NEXT_PUBLIC_AUTH_COOKIE_NAME);
  return token;
};

export const isLoggedIn = () => {
  const token = getToken();

  if (token) {
    return true;
  } else {
    return false;
  }
};

// console.log(isLoggedIn());
