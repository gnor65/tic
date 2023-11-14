"use client"; 
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Cell from './component/cell';
const winningscombos =[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]
export default function Home() {
  const[ cells,setCells ]=useState(["","","","","","","","","",])
  const[ go,setGo ]=useState("circle");
  const [winningMessage,setWinningMessage]=useState("");
  useEffect(()=>{
    winningscombos.forEach((combo)=>{
     const circleewins=combo.every((cell)=>cells[cell]==="circle")
     const crosswins=combo.every((cell)=>cells[cell]==="cross")
     if(circleewins){
      setWinningMessage("circle waning")
     }else if(crosswins){
      setWinningMessage("cross waning")
     }
    });
  },[cells,winningMessage ]
    
  );
  useEffect(()=>{
    if(cells.every((Cell)=>Cell!=="")&&!winningMessage){
      setWinningMessage("draw!") ;
    }
  },[cells,winningMessage ]);
  console.log(cells)
  return (
    <div className='container' >
   <div className='gameboard'>
   {cells.map((cell,index)=>(
     <Cell id={index} go={go} setGo={setGo} key={index} cells={cells} setCells={setCells} cell={cell} winningMessage={winningMessage}/>
   ))}
   </div>
   <div className='turn'>{winningMessage}</div>
   {!winningMessage && <div className='turn'>{`its now ${go} turn!`}</div>}

    </div>
  )
}
