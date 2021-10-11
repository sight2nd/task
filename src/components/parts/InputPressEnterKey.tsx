import React, { ChangeEvent, HtmlHTMLAttributes, LegacyRef, useCallback, useEffect, useRef, useState } from "react";
import { LoginForm } from "../pages/Login/Login";

type InputProps = {
  formLabel?: LoginForm;
  isValidation?: boolean;
  onPressEnterKey?: () => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

const InputPressEnterKey = (props: InputProps) => {
  const { formLabel: form, onPressEnterKey, type, onChange, isValidation } = props;
  const [str, setStr] = useState("");
  const [value, setValue] = useState("");

  const inputRef: LegacyRef<HTMLInputElement> = useRef(null);
  const pressEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!onPressEnterKey) {
      return;
    }
    if (e.key === "Enter") {
      inputRef.current?.blur();
      onPressEnterKey();
    }
  };

  const onBlurInput = () => {
    if (!form || !form.limit) {
      return;
    }
    if (value.length >= form.limit) {
      setStr("");
    }
  };

  const onChangeValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  useEffect(() => {
    if (!form || !form.limit || !form.errorStr) {
      return;
    }
    if (isValidation && value.length < form.limit) {
      setStr(form.errorStr);
    } else {
    }
  }, [isValidation]);
  return (
    <>
      <div key={`parentInput1`}>
        {/* {form ? form.labelStr : ""} */}
        <input
          type={type}
          placeholder={form?.labelStr}
          key={`inputChild`}
          ref={inputRef}
          onBlur={() => onBlurInput()}
          onKeyPress={(e) => pressEnterKey(e)}
          onChange={(e) => {
            if (!onChange) {
              return;
            }
            onChange(e);
            onChangeValue(e);
          }}
        />
        {str}
      </div>
    </>
  );
};

export default InputPressEnterKey;
