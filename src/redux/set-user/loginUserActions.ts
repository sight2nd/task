import { User } from './loginUserReducer';
import actionCreatorFactory from "typescript-fsa";

const ActionCreator = actionCreatorFactory('login');

export const LoginUserActions = {
    api:{},
    setUser: ActionCreator<User>('LOGIN'),
    removeUser: ActionCreator<User>('LOGOUT')
}