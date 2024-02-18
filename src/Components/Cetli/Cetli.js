/* eslint-disable no-unused-vars */
import { useDrag } from 'react-dnd';
import { DTYPE } from '../Constants/type';


import './Cetli.css';


const Cetli=(props)=> {
  
   
  const [{ isDragging }, drag] = useDrag(() => ({
    type: DTYPE.Cetli,
    item: { azon: props.azon, elemszam: props.elemszam },
    collect: monitor => ({
      // isDragging: !!monitor.isDragging(),
    }),
  }));
  const kesz =()=> {
    props.kesz(props.elemszam," feladat elvegezve");
  }
  const destroy =()=> {
    props.kesz(props.elemszam," feladat törölve");
    
  }



  const show=(enter)=>{
    console.log(enter+"<--at akt érték");
  props.show(enter);
  props.sideDateset({name:props.name,leiras:props.leiras})
  }

  return (
    <div className={DTYPE.Cetli} ref={drag}  >
      <div className='destroy'>
      <button className='delete' onClick={destroy}>X</button>
      </div>
      <div className='content'>
      <h4 className='FeladatCim'>{props.name}</h4>
      <button className='aktcetli' onMouseEnter={()=>show(true)} onMouseLeave={()=>show(false)}>👁</button>
      </div>
      <div className='end'>
      <button className='kesz' hidden={props.folyamatban} onClick={kesz}>✔</button>
      </div>
    
   
    
     
    </div>
  );
}


export default Cetli;

