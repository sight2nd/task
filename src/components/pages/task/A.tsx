import { useEffect } from "react";

type P = {
    list: string[];
    onClick: () => void;
  }
  const Temp = ({ onClick: _onClick, list }:P) => {
    const onClick = () => {
      _onClick();
    };

    // const a = usePreview()
    useEffect(() => {
      console.log('aaaaaaaaa');
    }, [list]);
    return (
      <div onMouseDown={(e)=>e.preventDefault()}>
        {list.map((v) => <div onClick={onClick}>{v}</div>)}
      </div>
    );
  };

  export default Temp;