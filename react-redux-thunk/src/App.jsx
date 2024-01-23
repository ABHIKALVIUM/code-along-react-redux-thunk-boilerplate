import { useState } from 'react'
import './App.css'
import store from './Redux/store'
import { fetchData , showData, showErr } from './Redux/Actions'



function App() {

  const [data,setData]=useState();

  store.subscribe(()=>{
    console.log(store)
    setData(store.getState().user)
  })


  return (
    <>

    {
      data && data.map((user)=>
        <div key={user.id}>
          <h1>{user.name}</h1>
          <p>{user.email}</p>
        </div>
      )
    }
      <button onClick={fetchData}>Fetch Data</button>
    </>
  )
}

export default App