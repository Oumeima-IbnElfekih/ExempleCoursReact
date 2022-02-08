import { useEffect, useState } from "react"

export default function Hooks(props){


    const [{color,background},setColor]=useState({color:"red",background:"blue"})
   useEffect(() => {
        console.log(
          "cette fonction va etre execute la premiere fois et a chaque modification de la variable color "
        );
        console.log("car le deuxieme argument est color ");
        return () => {
          console.log(
            "cette partie va etre execute pour nettoyer et  lors de loperation unmounting "
          );
        };
      }, [color]);
    
      useEffect(() => {
      
        console.log("cette fonction va etre execute une fois seulement ");
        console.log("car le deuxieme argument est un tableau vide ");
        return () => {
          console.log(
            "cette partie va etre execute seulement lors de loperation unmounting "
          );
        };
      }, []);

           useEffect(() => {
            console.log("cette fonction va etre execute chaque re-render");
            console.log("car pas de deuxieme argument passer");
          });
    return (<div>
        for background : <input  onChange={e=>setColor(current=> ({background:e.target.value}))}/>



        for color : <input  onChange={e=>setColor(current=> ({...current,color:e.target.value}))}/>
        <h1>My favaroute color is {color}, {background} </h1>

    </div>)
  
    
    }