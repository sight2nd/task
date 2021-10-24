import { LoginUserActions } from './loginUserActions';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import lodash from 'lodash'

export type SetAccount = {
  type: "LOG_IN";
  user: string;
};

export type RemoveAccout = {
  type: "LOG_OUT";
};

export type User = {
  userInfo:{
    id: string;
    pass: string;
    name: string;
    age?: number;
    sex: number;
    birth: string;
  }
};

const initialState: User = {
  userInfo:{
    id: '',
    pass: '',
    name: '',
    sex: 0,
    birth: ''
  }
};

export const loginUserReducer = reducerWithInitialState<User>(initialState) 
.case(LoginUserActions.setUser,(state,payload) => ({
  ...state,
  userInfo:lodash.cloneDeep(payload.userInfo)
}))
.case(LoginUserActions.removeUser,() => ({
  userInfo: initialState.userInfo
}))
.default((state) => state)
// export default connect(loginUser)(App);
