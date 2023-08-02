import React from 'react'
import { useState } from 'react'
import { TailSpin } from 'react-loader-spinner'
import {addDoc} from "firebase/firestore"
import { moviesRef } from '../firebase/firebase'
import swal from 'sweetalert'



const AddMovie = () => {
    const[form,setForm]=useState({
        title:"",
        year:"",
        img:"",
        description:""
        
    })
const[loading,setLoading]=useState(false);

const addMovie=async()=>{
  setLoading(true);
  
  await addDoc(moviesRef,form)
  
  swal({
    title: "Successfylly added",
    icon: "success",
    timer: 2000,
  })
  setForm({
    title:"",
    year:"",
    img:"",
    description:"" 
  })
  
  setLoading(false);
}
  return (
   <>
   <section className="text-black-600 body-font relative">
  <div className="container px-5 py-8 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white underline decoration-sky-500"><span className='text-rose-600'>ADD</span> MOVIE</h1>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="title" className="leading-7 text-sm text-white">Title</label>
            <input type="text" id="title" name="title" value={form.title} onChange={(e)=>setForm({...form,title:e.target.value})} className="w-full bg-white-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="Year" className="leading-7 text-sm text-white">Year</label>
            <input type="text" id="year" name="Year" value={form.year} onChange={(e)=>setForm({...form,year:e.target.value})} className="w-full bg-white-100 bg-opacity-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="Image" className="leading-7 text-sm text-white">Image-Link</label>
            <textarea type="text" name="img" value={form.img} onChange={(e)=>setForm({...form,img:e.target.value})} className="w-full bg-white-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-10 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
          <div className="relative">
            <label htmlFor="Description" className="leading-7 text-sm text-white">Description</label>
            <textarea type="text" name="Description" value={form.description} onChange={(e)=>setForm({...form,description:e.target.value})} className="w-full bg-white-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div className="p-2 w-full">
          <button onClick={addMovie} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">{loading?<TailSpin height={25} color='white'/>:"Submit"}</button>
        </div>
        </div>
    </div>
  </div>
</section>

   </>
  )
}

export default AddMovie

