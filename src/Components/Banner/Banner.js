import React,{useEffect, useState} from 'react'
import {API_KEY, imageUrl} from '../../constants/constants'
import "./Banner.css"
import axios  from '../../axios'
function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => {
   axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
        console.log(response.data)
        setMovie(response.data.results[1])
   })
  }, [])
  return (
    <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`} }
    className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title : ""}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>Mylist</button>
            </div>
            <div className='descripton'>
                <p>{movie ? movie.overview : ""}</p>
            </div>
        </div>
    <div className="fade"></div>
    </div>
  )
}

export default Banner
