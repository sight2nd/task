import { Redirect, Route, Switch } from "react-router";
import Login from "../pages/Login/Login";
import RegisterAccount from "../pages/RegisterPage/RegisterAccount";
import MyPage from "../pages/MyPage/MyPage";

export const Path = {
  login: "/login",
  myPage: "/myPage",
  registerPage: "/registerPage",
};

export const Routes = (
  <Switch>
    <Route exact path={Path.login} component={Login} />
    <Route exact path={Path.myPage} component={MyPage} />
    <Route exact path={Path.registerPage} component={RegisterAccount} />
    <Redirect path={"/"} to={Path.login} />
  </Switch>
);
