import React, { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Routes, Path } from "../routers/routers";
import { useHistory } from "react-router-dom";
import users, { UserInfo } from "../items/users";
// import { UserInfo } from "../items/users";
import { useAppDispatch } from "../../app/hooks";
import { push } from "connected-react-router";

const Login = () => {
  const [id, setID] = useState("");
  const [pass, setPass] = useState("");
  const [disable, setDisable] = useState(false);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    users.forEach((f) => {
      if (f.id === id && f.pass === pass) {
        dispatch(push(Path.test));
      }
    });
  };

  useEffect(() => {
    if (id && pass && String(id).length > 0 && String(pass).length >= 6) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [id, pass]);

  return (
    <>
      <h1>Login</h1>
      <label>
        <div>
          ユーザー名
          <input value={id} onChange={(e) => setID(e.target.value)} />
        </div>
      </label>
      <label>
        <div>
          パスワード
          <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} />
        </div>
      </label>
      <div>パスワードは6桁以上で入力してください</div>
      <div>
        <button disabled={disable} onClick={handleClick}>
          ログイン
        </button>
      </div>
    </>
  );
};

export default Login;
