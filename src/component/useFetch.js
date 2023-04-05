// import{ useEffect, useState } from "react";
// const app = document.querySelector('.app');
// const ul = document.createElement('ul');
// export function useFetch(url){
//     //const url=('https://rickandmortyapi.com/api/character')
//       const[data,setData]=useState(null)
//       useEffect(()=>{
//         fetch(url)
//         .then((respose)=>respose.json())
//         .then((data)=> setData(data));
//         data.forEach((dato)=> {
//             let elment = document.createElement('li');
//             elment.appendChild(
//                 document.createTextNode(`${data.id} ${data.name}`)
//             );
//            ul.appendChild(elment);
//         });
//      // console.log(data);
//       },[])
//       return {data};
// }