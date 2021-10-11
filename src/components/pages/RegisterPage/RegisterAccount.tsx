import { store } from "../../../app/store";
import { Path } from "../../routers/routers";
import { push } from "connected-react-router";

const RegisterAccount = () => {
  const onClickLogout = () => {
    store.dispatch({
      type: "LOG_OUT",
    });
    store.dispatch(push(Path.login));
  };
  return (
    <>
      <div>登録ページ</div>
      <div>
        <button onClick={onClickLogout}>ログインページへ戻る</button>
      </div>
    </>
  );
};

export default RegisterAccount;
