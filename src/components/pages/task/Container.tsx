import { useDrop, XYCoord } from "react-dnd";
import { useState } from "react";

// import { DragItem } from "./type";

export type Props = {
    hideSourceOnDrag: boolean;
}
export interface BoxState {
    [key: string]: { top: number; left: number; title: string };
}
const styles: React.CSSProperties = {

};
export const Container = (props:Props) => {
  const {hideSourceOnDrag} = props
  const [boxes, setBoxes] = useState('');

    // const [, drop] = useDrop(
    //     () => ({
    //       // drop(item: DragItem, monitor) {
    //       //   const { x, y } = monitor.getDifferenceFromInitialOffset() as XYCoord;
    //       // }
    //       }),
    // );

   return (
      <>
      </>
    )
}