import {useEffect, useState } from "react"
import ReactStars from 'react-stars'
import { Dna } from "react-loader-spinner"
import { getDocs } from "firebase/firestore"
import { moviesRef } from "../firebase/firebase"
import { Link } from "react-router-dom"


const Card = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
   async function fetchData() {
    setLoading(true);
    const _data = await getDocs(moviesRef);
    _data.forEach((e) => {
      setData((prev)=>[...prev,{...(e.data()),id:e.id}])
      setLoading(false);
    })
   }
   fetchData();
  },[])

  return (
    
    <div className="flex flex-wrap p-3 mt-3 justify-between ">
      {loading?<div className="w-full flex justify-center items-center h-96 "><Dna height={80} width={80} /></div>:
      data.map((e,i)=>{return(
        <Link to={`/detail/${e.id}`}><div key={i} className="card font-bold shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-pointer mt-8 m-1 ">
      <img className="h-56 md:h-72" src={e.img} alt="" style={{width:"inherit"}}/>
      <h1><span className="text-green-500">NAME</span>: {e.title}</h1>
      <h1 className="flex items-center"><span className="text-green-500 mr-1">RATING</span>:<ReactStars count={5} size={20} half={true} value={5} edit={false}/></h1>
      <h1><span className="text-green-500">YEAR</span> : {e.year}</h1>
    </div>
  
    </Link>
    )})}
    </div>
  
  )
}

export default Card
