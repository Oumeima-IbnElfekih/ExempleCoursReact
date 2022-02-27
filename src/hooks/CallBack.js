import { useCallback, useEffect, useState } from "react"

export default function CallBack(){
    const [number , setNumber]=useState(0);
    const [testValue, setTestValue] = useState(0);
    const incrementWith1 =()=> {setTestValue(testValue+1);}
    const addNumber =useCallback(()=>

    {console.log("call use Callback");
    return [number + 1] },[number])
    
    return (<div>
         <input type="number" value={number} onChange={e=> setNumber(parseInt(e.target.value))} /> <br></br>
        <br></br>
        <Cellule key={number} getCellules={addNumber}/>
        <button onClick={incrementWith1}>Increment with 1 </button> <br></br>
        result TestValue = {testValue}
      
        </div>)
  
    
    }
function Cellule({getCellules}) {
    
    const[cells,setCell] =useState([]);
    useEffect(()=> {
        setCell(getCellules());
        console.log("added cell");

    },[getCellules])
    return cells?.map(cell=> <div> {cell}</div>)
}