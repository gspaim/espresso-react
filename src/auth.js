export const isAuthenticated = async () => {
  const userInfos = await localStorage.getItem("@EspressoPosts:loginInfo");

  return userInfos != null;
};
