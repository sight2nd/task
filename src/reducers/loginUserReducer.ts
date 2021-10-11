import { connect } from "react-redux";
import { Action } from "redux";
import App from "../App";
import Login from "../components/pages/Login/Login";

export type SetAccount = {
  type: "LOG_IN";
  user: string;
};

export type RemoveAccout = {
  type: "LOG_OUT";
};

// const setAccountAction = (name: string): SetAccount => {
//   return {
//     type: "LOG_IN",
//     user: name,
//   };
// };
// const removeAccount = () => ({
//   type: "LOG_OUT",
// });

type LogInUserActions = SetAccount | RemoveAccout;

export type User = {
  id: string;
  pass: string;
  name: string;
  age?: number;
  sex: number;
  birth: string;
};

const initialLoginUser: string = "";

export const loginUser = (user: string = initialLoginUser, action: LogInUserActions) => {
  switch (action.type) {
    case "LOG_IN":
      return action.user;
    case "LOG_OUT":
      return "";
    default:
      return user;
  }
};

// export default connect(loginUser)(App);
