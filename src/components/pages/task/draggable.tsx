import { useEffect, useRef, useState } from 'react';
import {
  ConnectableElement,
  DragLayer,
  DropTargetMonitor, useDrag, useDragLayer, useDrop, XYCoord, DragPreviewImage
} from 'react-dnd';

import { MultiBackend } from 'react-dnd-multi-backend'


type Props = {
    label: string;
}

export type CardProps = {
    id: any,
    text: string,
    index: number,
    moveCard: (dragIndex: number, hoverIndex: number) => void,
    onClick: (e:number) => void;
    isChecked: boolean;
    isDnD: boolean;
    type:string;
}

type DragItem = {
    index: number,
    id: string,
    type: string,
}

// export const SampleCard = () => {
//     const ref = useRef<HTMLDivElement>(null);
//     const [{handlerId},drop] = useDrop
// }

export const SampleDraggable = (props: CardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const {
    id, text, index, moveCard, onClick, isChecked, isDnD, type
  } = props;

  const [opacity, setOpacity] = useState(1);

  const [correct, drop] = useDrop({
    accept: type,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
        currentOffset: monitor.getSourceClientOffset(),
        item: monitor.getItem(),
      };
    },
    hover(item: DragItem, monitor: DropTargetMonitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();

      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveCard(dragIndex, hoverIndex);

      // eslint-disable-next-line
      item.index = hoverIndex;
    },
  });

  const [collect, drag] = useDrag({
    type,
    item: () => ({ id, index }),
    collect: (monitor) => ({
      ...monitor,
      isDragging: monitor.isDragging(),
    }),
    previewOptions: { captureDraggingState: true },
  });

//   console.log(layer);
  

  useEffect(() => {
    drag(drop(ref),{  });
  }, [isDnD]);

  useEffect(() => {
    setOpacity(collect.isDragging ? 0.5 : 1);
    // DragLayer(layer)
  }, [collect.isDragging]);

  useEffect(() => {
    console.log('type', type);
    
  },[])
  return (
    <>
    <div
      onMouseDown={((e) => e.preventDefault())}
      style={{
        opacity, height: '50px', fontSize: '30px',
      }}
      onClick={() => onClick(index)}
      ref={ref}
      data-handler-id={correct.handlerId}
    >
      {!collect.isDragging ? `${text} ${isChecked ? '<※>' : ''}` : 'DragNow!!'}
    </div>
      <div>{`SAMPLE-CHILD${id}`}</div>
      </>
  );
};
