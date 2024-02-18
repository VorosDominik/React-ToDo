// Draggable.js
import React from 'react';
import { useDrag } from 'react-dnd';

const Draggable = ({ name, type }) => {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: type,
    item: { name },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div className='drag' ref={dragRef} style={{ opacity: isDragging ? 0.5 : 1 } }>
      {name}
    </div>
  );
};

export default Draggable;
