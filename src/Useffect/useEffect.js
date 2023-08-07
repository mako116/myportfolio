// import { useEffect, useState } from "react";

// const useFetch = (url) => {
// //  const [blogs, setBlogs]=useState(null)
//  const[error,setError]=useState(null)

// useEffect(()=>{
// fetch(url)
// .then(res=>{
//     if(!res.ok){
//      throw Error("mumu nothing sup")
//     }
//   return  res.json()
// })
// .then(data=>{
//     setBlogs(data)
//     setError(null)
// }).catch(err=>{
//     setError(err.message)
// })

// },[url])
// return{blogs,error}
// }

// export default useFetch;