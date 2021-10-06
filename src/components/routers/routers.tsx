import { Route, Switch } from "react-router";
import Login from "../pages/Login";
import Test from "../pages/test";

export const Path = {
  login: "/login",
  test: "/test",
};

export const Routes = (
  <Switch>
    <Route exact path={Path.login} component={Login} />
    <Route exact path={Path.test} component={Test} />
  </Switch>
);
