import { RootState, store } from "../../../app/store";
import { Path } from "../../routers/routers";
import { push } from "connected-react-router";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import { useAppDispatch } from "../../../app/hooks";
import { LoginUserActions } from "../../../redux/set-user/loginUserActions";
import { useSelector } from "react-redux";

const RegisterAccount = () => {
  const initialDate = new Date();

  const dispatch = useAppDispatch();

  const user = useSelector((state:RootState) => state.loginUser);

  const [sexValue, setSexValue] = useState(NaN);
  const [startDate, setStartDate] = useState(initialDate);


  const onClickLogout = () => {
    // dispatch(LoginUserActions.removeUser())
    store.dispatch(push(Path.login));
  };


  const dateChange = useCallback((e:Date)=>{
    setStartDate(e);
    console.log(startDate)
  },[startDate])
  const handleChange = useCallback((e:ChangeEvent<HTMLInputElement>) =>{
    setSexValue(Number(e.target.value));
  },[])

  useEffect(()=>{
    console.log("user",user)
  },[])
  
  return (
    <>
      <div>登録ページ</div>
      <div>アカウント<input/></div>
      <div>パスワード<input/></div>
      <div>お名前<input/></div>
      <div>年齢<input/></div>
      <div>性別
      <label>
      <input 
      type='radio'
      value={1}
      onChange={handleChange}
      checked={sexValue === 1}
      
      />
      男
      </label>
      <label>
      <input
      type='radio'
      value={2}
      onChange={handleChange}
      checked={sexValue === 2}
      />
      女
      </label>
      <label>
      <input
      type='radio'
      value={3}
      onChange={handleChange}
      checked={sexValue === 3}
      />
      不明
      </label>
      </div>
      <div>生年月日</div>
      <div><DatePicker
      selected={startDate}
      onChange={dateChange}
      /></div>
      <div>
        <button onClick={onClickLogout}>ログアウト</button>
      </div>
    </>
  );
};

export default RegisterAccount;
