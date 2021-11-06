import { useCallback, useState } from 'react';
import Temp from './A';
import { DndProvider, DndComponent } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
// import { MultiBackend ,DndProvider, HTML5DragTransition} from 'react-dnd-multi-backend'
import HTML5toTouch from 'react-dnd-multi-backend/dist/esm/HTML5toTouch';
// import {} from 'react-dnd-multi-backend/dist/umd/'
import { TouchBackend } from 'react-dnd-touch-backend';
import { cloneDeep } from 'lodash';
import update from 'immutability-helper';
import { SampleDraggable } from './draggable';
import { DragLayer } from './drag-layer';
import { Ghost } from './ghost';
// import {} from 'react-dnd-preview'

type CardProps = {
  id: number;
  text: string;
};

const sampleList: CardProps[] = [
  { id: 1, text: 'test1' },
  { id: 2, text: 'test2' },
  { id: 3, text: 'test3' },
  { id: 4, text: 'test4' },
  { id: 5, text: 'test5' },
  { id: 6, text: 'test6' },
  { id: 7, text: 'test7' },
  { id: 8, text: 'test8' },
];

const Base = () => {
  const [select, setSelect] = useState(false);
  const onClick = useCallback(() => {
    setSelect(!select);
  }, [select]);

  const [cards, setCards] = useState<CardProps[]>(cloneDeep(sampleList));
  const [num, setNum] = useState(NaN);

  const moveCard = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const dragCard = cards[dragIndex];
      setCards(
        update(cards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard],
          ],
        }),
      );
    },
    [cards],
  );

  return (
    <DndProvider backend={TouchBackend}>
      {cards.map((v, i) => (
        <SampleDraggable
          isChecked={num === i}
          key={v.id}
          index={i}
          id={v.id}
          text={v.text}
          moveCard={moveCard}
          onClick={(e) => setNum(e)}
          isDnD
          type={i < 4 ? 'test1' : 'test2'}
        />
      ))}
      <Ghost name={'name'} />
    </DndProvider>
  );
};

export default Base;
