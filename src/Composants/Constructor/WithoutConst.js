import React from "react";


export class WithoutConst extends React.Component {

    state = {
        value1 :" HELLO",
        value2 :0,
        value3 :{value31 :"works too ..."},
        
          }
render(){
    return (<div>
<ul>
My State without constructor: 
<li>{this.state.value1}</li>
<li>{this.state.value2}</li>
<li>{this.state.value3.value31}</li>


</ul>


    </div>)
}
}