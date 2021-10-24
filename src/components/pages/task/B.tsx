import { useCallback, useState } from "react";
import Temp from "./A";

const Base = () => {
    const [select, setSelect] = useState(false);
    const onClick = useCallback(() => {
      setSelect(!select);
}, [select]);

return (
    <Temp
      list={['aa', 'bb']}
      onClick={onClick}
    />
  );
}

export default Base;