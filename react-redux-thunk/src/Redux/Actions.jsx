import axios from "axios";
import store from './store';


function fetchData(){
    axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
      console.log(res.data)
      let user=res.data
      store.dispatch(showData(user))
    }).catch((err)=>{
      store.dispatch(showErr(err.message))
    });

}


function showData(user){
    return{
      type:"show_data",
      payload:user
    }
}


function showErr(errMsg){
    return{
      type:"error",
      payload:errMsg
    }
}

export {showData,showErr,fetchData}