import { useDragLayer, XYCoord } from 'react-dnd';
import './main.css';

type Props = {
  name: string;
}

export const Ghost = (props:Props) => {
  const {
    isDragging,
    item,
    currentOffset,
  } = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  }));

  if (!isDragging) {
    return null;
  }

  const getItemStyles = (currentOffset: XYCoord | null) => {
    if (!currentOffset) {
      return {
        display: 'none',
      };
    }

    // move position
    const x = currentOffset.x;
    const y = currentOffset.y;
    const transform = `translate(${x}px, ${y}px) scale(1.05)`;

    return {
      WebkitTransform: transform,
      transform: transform,
    };
  };

  return (
    <div className="draglayer">
      <div style={getItemStyles(currentOffset)}>{item.text}</div>
    </div>
  );
};
