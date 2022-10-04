import React,{useEffect,useState} from "react";
import axios from 'axios'
 const FetchAxios = () => {
    const [state,setState] =useState([])
    //========= Get data with Fetch in JS ==============
   /*
    const fetchDataAxios = async()=>{
        await fetch('https://jsonplaceholder.typicode.com/posts',{
            method:'GET',
        }).then((res)=>{
            res.json().then(data=>setState(data))
        })
    }
    */
       //========= Get data with Axios in JS ==============

    const fetchAxios=async ()=>{
       const res= await axios.get('https://jsonplaceholder.typicode.com/posts');
       setState(res.data);
    }
    useEffect(()=>{
        fetchAxios();
    },[])
  return (
    <div>
        {
            state.map((e)=>{
                return (
                    <div>{e.title}</div>
                )
            })
        }
    </div>
  )
}

export default FetchAxios;
