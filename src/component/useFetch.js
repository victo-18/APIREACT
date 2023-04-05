import{ useEffect, useState } from "react";
export function useFetch(url){
    //const url=('https://rickandmortyapi.com/api/character')
      const[data,setData]=useState(null)
      useEffect(()=>{
        fetch(url)
        .then((respose)=>respose.json())
        .then((data)=> setData(data));
     // console.log(data);
      },[])
      return {data};
}