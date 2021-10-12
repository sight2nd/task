import React, { ChangeEvent, HtmlHTMLAttributes, LegacyRef, useCallback, useEffect, useRef, useState } from "react";
import { LoginForm } from "../pages/Login/Login";

type InputProps = {
  formLabel?: LoginForm;
  isValidation?: boolean;
  onPressEnterKey?: () => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

const InputPressEnterKey = (props: InputProps) => {
  const { formLabel: form, onPressEnterKey, type, onChange: _onChange, isValidation } = props;
  const [str, setStr] = useState("");
  const [value, setValue] = useState("");

  const inputRef: LegacyRef<HTMLInputElement> = useRef(null);

  const onBlurInput = () => {
    if (value.length >= (form?.limit || 0)) setStr("");
  };

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!onChange) return;
      onChange(e);
      setValue(e.target.value);
    },
    [_onChange]
  );

  const onKeyPress = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (!onPressEnterKey) return;
      if (e.key === "Enter") {
        inputRef.current?.blur();
        onPressEnterKey();
      }
    },
    [onPressEnterKey, inputRef.current]
  );

  useEffect(() => {
    if (isValidation && value.length < (form?.limit || NaN)) setStr(form?.error || "");
  }, [isValidation]);

  return (
    <>
      <div key={`parentInput1`}>
        {/* {form ? form.labelStr : ""} */}
        <input
          type={type}
          placeholder={form?.label}
          key={`inputChild`}
          ref={inputRef}
          onBlur={onBlurInput}
          onKeyPress={onKeyPress}
          onChange={onChange}
        />
        {str}
      </div>
    </>
  );
};

export default InputPressEnterKey;
