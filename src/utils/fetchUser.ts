export const fetchUser = () => {
  const storedUser = localStorage.getItem("user");
  let userInfo;

  if (storedUser !== null) {
    userInfo = JSON.parse(storedUser);
  } else {
    localStorage.clear();
    return null;
  }

  return userInfo;
};
