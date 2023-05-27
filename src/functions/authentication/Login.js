import USERS from "consts/users";

export default function logInWithUserAndPass(userName, password) {
  const user = USERS.find((item) => item?.userName === userName);
  return user?.password === password;
}
