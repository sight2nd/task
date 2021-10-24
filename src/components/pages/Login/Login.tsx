import React, { ChangeEvent, LegacyRef, useCallback, useEffect, useRef, useState } from "react";
import { Path } from "../../routers/routers";
import { useAppDispatch } from "../../../app/hooks";
import { push } from "connected-react-router";
import InputPressEnterKey from "../../parts/InputPressEnterKey";
import { store } from "../../../app/store";
import "./Login.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { LoginUserActions } from "../../../redux/set-user/loginUserActions";

export type LoginForm = {
  label: string;
  error: string;
  limit?: number;
};

type Forms = {
  user: LoginForm;
  pass: LoginForm;
};

const Today = new Date();

/* model */
const dummyModel: Forms = {
  user: { label: "ユーザー名", error: "未入力です", limit: 1 },
  pass: { label: "パスワード", error: "パスワードは6文字以上で入力してください", limit: 6 },
};
export const Login = () => {
  /* selector */
  const users = useSelector((state: RootState) => state.userList);
  const user = useSelector((state:RootState) => state.loginUser);
  /* dispatch */
  const dispatch = useAppDispatch();
  /* state */
  const [id, setID] = useState("");
  const [pass, setPass] = useState("");
  const [errorStr, setErrorStr] = useState("");
  const [validation, setValidation] = useState(false);

  /* ref */
  const buttonRef = useRef<HTMLButtonElement>(null);

  // const test = useSelector();

  /* handler */
  const handleClickLoginButton = useCallback(() => {
    buttonRef.current?.focus();
    users.forEach((f) => {
      if (f.userInfo.id === id && f.userInfo.pass === pass) {
        dispatch(LoginUserActions.setUser(f));
        dispatch(push(Path.myPage));
        // console.log(store.getState().loginUser);
      } else {
        setErrorStr("ユーザー名かパスワードが間違っています");
      }
    });
    setValidation(true);
  },[id,pass]);
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>, setState: React.Dispatch<React.SetStateAction<string>>) => {
    setState(e.target.value);
    setValidation(false);
  };

  useEffect(()=>{
    console.log(user);
  },[])

  return (
    <>
      <div className={"main"}>
        <h1 className={"title"}>Login</h1>
        <div className={"idBox"}>
          <InputPressEnterKey
            key={"input"}
            isValidation={validation}
            formLabel={dummyModel.user}
            onChange={(e) => onChangeInput(e, setID)}
          />
        </div>
        <div className={"passArea"}>
          <InputPressEnterKey
            className={"passBox"}
            type={"password"}
            key={"input2"}
            isValidation={validation}
            formLabel={dummyModel.pass}
            onPressEnterKey={handleClickLoginButton}
            onChange={(e) => onChangeInput(e, setPass)}
          />
        </div>
        <div className={"loginBtn"}>
          <button ref={buttonRef} onClick={handleClickLoginButton}>
            ログイン
          </button>
        </div>
        <div>{errorStr}</div>
        <div>
          <Link to={Path.registerPage}>新規登録はこちら </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
// export default connect(loginUser)(Login);
