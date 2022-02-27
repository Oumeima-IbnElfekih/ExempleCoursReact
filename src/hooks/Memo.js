import { useEffect, useMemo, useState } from "react"

export default function Memo(){
    useEffect(()=>{console.log("re-render another time")})
    const [value, setValue] = useState(0);
    const [testValue, setTestValue] = useState(0);
    const incrementWith1 =()=> {setTestValue(testValue+1);}
    const incrementwith3 = (elem)=> { console .log("Execute increment") ; return elem+3 }
    const result = incrementwith3(value);
   // const MemoRes =useMemo(()=> {
    //    console.log("execute useMemo");
     //   return incrementwith3(value)}, [value]);
     return (<div>
        <input type="number" value={value} onChange={e=> setValue(parseInt(e.target.value))} /> <br></br>
        {result}
        <br></br>
        <button onClick={incrementWith1}>Increment with 1 </button> <br></br>
        result TestValue = {testValue}
        </div>)
  
    
    }