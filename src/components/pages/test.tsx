import { Routes, Path } from "../routers/routers";
import Login from "../pages/Login";
import { useHistory } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { push } from "connected-react-router";
import Select from "react-select/";
import { datas, DatasInfo } from "../items/datas";
import React, { useCallback } from "react";

const Test = () => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(push(Path.login));
  };

  const onChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.outerHTML);
  }, []);

  return (
    <>
      <h1>TEST</h1>
      <select
        onChange={(e) => {
          console.log(e.target.scroll());
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
        <button onClick={handleClick}>ログアウト</button>
      </div>
    </>
  );
};
export default Test;
