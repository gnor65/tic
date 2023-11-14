import { type } from "os";
import { Dispatch, SetStateAction } from "react";

type CellProps={
    id:number;
    go:string;
    setGo:Dispatch<SetStateAction<string>>;
    cells:string[];
    setCells:Dispatch<SetStateAction<string[]>>;
    cell:string;
    winningMessage:string;

}

const Cell=({go,setGo,id,cells,setCells,cell,winningMessage}:CellProps)=>{
    
    const hndleClick=(e)=>{
        if(winningMessage){
            return
        }
        const nottaken=!cells[id]
        if(nottaken){
            if(go==="circle"){
                handlecellchange("circle")
                setGo("cross")
            }else if (go==="cross"){
                handlecellchange("cross")
                setGo("circle")
            }
        }
        }
       
    const handlecellchange=(cellToChange:string)=>{
        let copycells=[...cells]
        copycells[id]=cellToChange
        setCells(copycells)
    }
    
    return <div className="square" onClick={hndleClick}>
    <div className={cell}>{cell?(cell==="circle" ?"o":"x"):""}</div>
    </div>
}
export default Cell;