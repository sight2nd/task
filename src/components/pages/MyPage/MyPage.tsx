import { Path } from "../../routers/routers";
import { useAppDispatch } from "../../../app/hooks";
import { push } from "connected-react-router";
import { useState, useCallback, useEffect ,} from "react";
import { RootState, store } from "../../../app/store";
import { findUser } from "../../utillity/findUser";
import { useSelector } from "react-redux";
import { UsersActions } from "../../../redux/add-user/usersActions";

// import { findUser } from "../utillity/findUser";

const MyPage = () => {
  const dispatch = useAppDispatch();
  // const handleClick = () => {
  //   dispatch(push(Path.login));
  // };
  const user = useSelector((state:RootState) => state.loginUser)

  const [key, setKey] = useState("TEST");

  const testOnClick = useCallback(() => {
    if (key === "TEST") {
      setKey("ABC");
    } else {
      setKey("TEST");
    }
  }, [key]);

  useEffect(() => {
    // console.log(findUser());
    // const user = store.getState().user.find((f) => f.id === store.getState().loginUser);
    if (!user?.userInfo.name) {
      dispatch(push(Path.registerPage));
    }
  }, []);

  return (
    <>
      <h1>{key}</h1>
      <select
        onChange={(event) => {
          // console.log(event.target.value);
        }}
      >
        <option value={"a"}>a</option>
        <option value={"b"}>b</option>
        <option value={"c"}>c</option>
        <option value={"d"}>d</option>
        <option value={"e"}>e</option>
        <option value={"f"}>f</option>
      </select>
      <div>
        <button onClick={() => {}}>ログアウト</button>
      </div>
      <div>
        <button onClick={testOnClick}>TEST</button>
      </div>
    </>
  );
};
export default MyPage;
