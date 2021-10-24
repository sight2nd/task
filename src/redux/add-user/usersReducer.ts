import { reducerWithInitialState } from "typescript-fsa-reducers";
import { User } from "../set-user/loginUserReducer";
import { UsersActions } from "./usersActions";
import lodash from 'lodash'

const initialUser: User[] = [
  {
    userInfo:{
      id: "marietta",
      pass: "Ma123456",
      name: "",
      sex: NaN,
      birth: "",
    }
  },
  {
    userInfo:{
      id: "yoshinaka.s",
      pass: "Ma123456",
      name: "よしなか",
      sex: 0,
      birth: "123456",
    }
  },
];

// export const userReduser = (user: User[] = initialUser, action: userActions) => {
//   switch (action.type) {
//     case "REGISTER_USER":
//       user.push(action.user);
//       return user;
//     case "SET_USER":
//       user.forEach((f) => {
//         if (f.id === action.user.id) {
//           f = action.user;
//         }
//       });
//       return user;
//     default:
//       return user;
//   }
// };

export const userReduser = reducerWithInitialState<User[]>(initialUser)
.case(UsersActions.addUsers,(state,payload) => ({
  ...state,
  addList:lodash.cloneDeep(payload)
}))
.default((state) => state);

export default userReduser;
