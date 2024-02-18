import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import './Css.css'

const Droppable = ({ type, onDrop, children }) => {
  const [droppedItems, setDroppedItems] = useState([]);

  const [{ isOver, canDrop }, dropRef] = useDrop(() => ({
    accept: type,
    drop: (item, monitor) => {
      setDroppedItems(prevItems => [...prevItems, item]);
      if (onDrop) {
        onDrop(item);
      }
    },
    collect: monitor => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }));

  // Stílusok és egyéb tulajdonságok
  const style = {
    
    backgroundColor: isOver ? 'lightblue' : 'lightgrey',
    // További stílusok...
  };

  return (
    <div className='Drop' ref={dropRef} style={style}>
      {children}
      {droppedItems.map((item, index) => (
        <div key={index}> {item.name} </div>
      ))}
    </div>
  );
};

export default Droppable;
