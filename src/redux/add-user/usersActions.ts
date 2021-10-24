import { User } from '../set-user/loginUserReducer';
import actionCreatorFactory from "typescript-fsa";

const ActionCreator = actionCreatorFactory('users');

export const UsersActions = {
    api:{},
    addUsers: ActionCreator<User[]>('set/store/add-list'),
}