import React from 'react'
import ReactStars from 'react-stars'
import { reviewsRef } from '../firebase/firebase'
import { addDoc } from 'firebase/firestore'
import { useState } from 'react'
import { TailSpin } from 'react-loader-spinner'
import swal from 'sweetalert'
const Reviews = ({id}) => {
  const [rating, setRating] =useState("")
  const [loading,setLoading]=useState(false)
  const sendReview = async () => {
    try 
    {
      await addDoc(reviewsRef, {
        movieid:"",
        name:"",
        rating:"",
        thought:"",
        time:""
      })
      setLoading(true);
      swal({
        title: "Successfylly added",
        icon: "success",
        timer: 2000,
      })
    } 
    catch (error) {
      swal({
        title:error,
        icon: "error",
        timer: 2000,
      })
      
    }
    setLoading(false);
  }
  return (

     <div className='flex flex-col w-full border-t-2 mt-10 border-gray-700'>
        <ReactStars className="mt-4" count={5} size={20} half={true} value={rating} edit={true}
        onchange={(rate)=>setRating(rate)}
        />

      <input style={{border:"1px solid black",borderRadius:"5px"}} className='mt-2 header h-8 ' 
      placeholder='What you think about this movie'></input>
    
      <button className='mt-4 border-spacing-y-72 bg-green-600 flex justify-center' style={{borderRadius:"10px",fontSize:"20px"}}>
        {loading?<TailSpin height={40} color='white'/>:`Submit`}</button>
      
    </div>
  )
}

export default Reviews
