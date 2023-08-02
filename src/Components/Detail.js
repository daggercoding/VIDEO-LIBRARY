import React from 'react'
import ReactStars from 'react-stars'
import { useParams } from 'react-router-dom'
import Reviews from './Reviews'
import { useEffect,useState } from 'react'
import { doc,getDoc } from 'firebase/firestore'
import { dataBase } from '../firebase/firebase'
import { Bars } from 'react-loader-spinner'


const Detail = () => {
  const {id}=useParams();
  const [loading,setLoading]=useState(false);
  const [data,setData]=useState(
    {
      title:"",
      year:"",
      img:"",
      description:""
     }
  )
  
  useEffect(()=>{
    
    async  function getData(){
      setLoading(true);
      const _doc=doc(dataBase,"movies",id);
      const _data=await getDoc(_doc);
      setData(_data.data());
      setLoading(false);
    }
    getData();
  },[])

  return (

          <div className='body1 w-full text-white flex flex-col md:flex-row items-center md:items-start p-10 '>
            {loading?<div className='h-96 flex justify-center w-full items-center'><Bars height={30} color="white" /></div>:
         <>
        <img className='h-96 md:sticky md:top-28' src={data.img} alt=""/>
        <div className='w-full md:w-full mx-16 my-3'>
            <h1 className='text-2xl'>{data.title}<span className='text-xl'>({data.year})</span> </h1>
            <ReactStars className='space-x-1' count={5} size={20} half={true} value={5} edit={false}/>
            <p className='mt-3'>{data.description}</p>
            <Reviews id={id}/>
        </div>
        </>
        }
    </div>
 
  )
}

export default Detail
