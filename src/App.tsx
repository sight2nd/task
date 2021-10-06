import React, { useEffect } from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import { ConnectedRouter } from "connected-react-router";
import { Routes, Path } from "./components/routers/routers";
import "./App.css";
import { BrowserRouter, Link } from "react-router-dom";
import { history } from "./app/store";
import { useAppDispatch } from "./app/hooks";
import { push } from "connected-react-router";

function App() {
  const dispatch = useAppDispatch();
  // return <BrowserRouter>{Routes}</BrowserRouter>;

  useEffect(() => {
    dispatch(push(Path.login));
  }, []);
  return (
    <div>
      <ConnectedRouter history={history}>{Routes}</ConnectedRouter>
    </div>
  );
}

export default App;
