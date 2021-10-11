import { User } from "./loginUserReducer";

type RegisterUserState = {
  type: "REGISTER_USER";
  user: User;
};

type SetUserState = {
  type: "SET_USER";
  user: User;
};

type userActions = RegisterUserState | SetUserState;

const initialUser: User[] = [
  {
    id: "marietta",
    pass: "Ma123456",
    name: "",
    sex: NaN,
    birth: "",
  },
  {
    id: "yoshinaka.s",
    pass: "Ma123456",
    name: "よしなか",
    sex: 0,
    birth: "123456",
  },
];

export const userReduser = (user: User[] = initialUser, action: userActions) => {
  switch (action.type) {
    case "REGISTER_USER":
      user.push(action.user);
      return user;
    case "SET_USER":
      user.forEach((f) => {
        if (f.id === action.user.id) {
          f = action.user;
        }
      });
      return user;
    default:
      return user;
  }
};

export default userReduser;
