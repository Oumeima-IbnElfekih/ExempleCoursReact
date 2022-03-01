import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./actions";


export default function Redux(){
    const compteur = useSelector(state=>state.count);
    const dispatch = useDispatch();
     return (<div>
       {compteur}
        <br></br>
         <button onClick={()=>dispatch(increment())}>Increment</button> <br></br>
         <button onClick={()=>dispatch(decrement())} > Decrement </button>
       </div>)
  
    
    }