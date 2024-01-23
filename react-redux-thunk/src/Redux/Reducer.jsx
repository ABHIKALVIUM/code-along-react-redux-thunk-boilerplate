import {ERROR,SUCCESS} from "./ActionType";
const initialState={
    user:[],
    error:""
  }

  const reducer=(state=initialState,action)=>{
    switch(action.type){
      case SUCCESS:
        let newstate={...state,user:action.payload}
        return newstate
      case ERROR:
        return{
          ...state,
          error:action.payload
        }
        default:
          return state
    }
  }

  export default reducer;