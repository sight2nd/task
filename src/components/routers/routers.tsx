import { Redirect, Route, Switch } from "react-router";
import Login from "../pages/Login/Login";
import RegisterAccount from "../pages/RegisterPage/RegisterAccount";
import MyPage from "../pages/MyPage/MyPage";
import Base from "../pages/task/B";
import Temp from "../pages/task/A";

export const Path = {
  login: "/login",
  myPage: "/myPage",
  registerPage: "/registerPage",
  task: "/task"
};

export const Routes = (
  <Switch>
    <Route exact path={Path.login} component={Login} />
    <Route exact path={Path.myPage} component={MyPage} />
    <Route exact path={Path.registerPage} component={RegisterAccount} />
    <Route exact path={Path.task} component={Base} />
    <Redirect path={"/"} to={Path.task} />
  </Switch>
);
