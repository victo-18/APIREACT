//import logo from './logo.svg';
import React,{ useEffect, useState } from 'react';
import './App.css';

function App() {
  
  const url=('https://rickandmortyapi.com/',
{
  method: 'GET',
  headers:'riki',
  mode: 'cors', // <---
  cache: 'default'
}
  )
  const[todos,setTodos]=useState()
  const fetchApi= async ()=>{
    const respuesta = await fetch(url)
    console.log(respuesta.status)
    const responJSON = await respuesta.json();
    setTodos(responJSON);
    console.log(responJSON)
  }
  useEffect(()=>{
    fetchApi()
  },[])
  return (
    <div className="App">
      
    funcionando...
    </div>
  );
}

export default App;
