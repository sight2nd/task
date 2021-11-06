import { ReactElement, useEffect } from "react"
import { useDragLayer } from "react-dnd"

type Props = {
    isDnD: boolean,
    renderItem: ReactElement,
}

export const DragLayer = (props: Props) => {
    const {isDnD, renderItem} = props
    const {itemType, isDragging, item, initialOffset, currentOffset} = 
    useDragLayer((monitor) => ({
        item: monitor.getItem(),
        itemType: monitor.getItemType(),
        initialOffset: monitor.getInitialSourceClientOffset(),
        currentOffset: monitor.getSourceClientOffset(),
        isDragging: monitor.isDragging(),
    }))

    useEffect(() => {
        // if(!isDnD) null
    },[isDnD])
    return (
        <div>{renderItem}</div>
    )
}