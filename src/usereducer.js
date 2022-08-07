
import { useReducer } from "react";


const initialState = 0;  
const reducer= (state, action)=>{
    if(action.type==="INCREASE"){
        return state + 1;
    }
    if(action.type==="DECREASE"){
        return state -1;
    }
    return state;
}

 export const UseReducer=()=>{
    
   
    const [state, dispatch]= useReducer(reducer, initialState);
    return(
        <>
        <h1>{state}</h1>
        <button onClick={()=>dispatch({type:"INCREASE"})}>INCREASE</button>
        <button onClick={()=>dispatch({type:"DECREASE"})}>DECREASE</button>
        </>
    )
}