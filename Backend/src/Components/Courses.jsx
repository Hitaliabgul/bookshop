import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import { Link } from 'react-router-dom'
import axios from 'axios'
function Courses() {
  const [book,setBook]=useState([]);
  
useEffect(()=>{
  const getBook=async()=>{
    try {
    const res= await axios.get("http://localhost:4001/book");
    console.log(res.data);
    setBook(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  getBook();
}
,[])
  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className='m-28 items-center text-center justify-center'> 
        <h1 className='text-2xl font-semibold md:text-4xl'>We're delighted to have you <span className='text-pink-500'>here! :)</span></h1>
      <p className='mt-12'>Books play a quintessential role in every student's life by introducing them to a world of imagination, 
        providing knowledge of the outside world, improving their reading, writing and speaking skills as well and boosting memory and intelligence. The importance of books in our life cannot be undermined for they not only help in broadening our horizons but also act as doorways to connecting us with the world around us. 
        They function as survival kits, they influence us and leave an impact on us.</p>
    <Link to="/">
      <button className='bg-pink-500 text-white px-5 py-3 rounded-medium hover:bg-pink-700 duration-300 mt-6'>Back</button>
      </Link>
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
        {
          book.map((item)=>(
            <Cards key={item.id} item={item}/>
          ))
        }
        </div>
    </div>
  )
}

export default Courses