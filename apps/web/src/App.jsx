import './App.css'
import { useEffect } from 'react';

function App() {

  useEffect(()=>{
    fetch("http://localhost:3000/add?a=1&b=2")
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
    })
  })
  return (
    <>
      
    </>
  )
}

export default App
