const intialState = {

    count : 0,
    ListItem : [] ,

}
const compteur = (state =intialState, action ) => {
    switch(action.type)
    {
      case "increment" : return  {...state.count , count :state.count + action.payload}
      case  "decrement" :return  {...state.count , count :state.count - action.payload};
       default : return state ;
    }
  }

export default compteur ;