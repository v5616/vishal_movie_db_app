import React from 'react'
import { Link } from 'react-router-dom';



import {useLocation} from 'react-router-dom';
import "./abc.css"

const img_Api = "https://image.tmdb.org/t/p/w1280"
function Abc() {
 
  
  const location = useLocation();
 
  console.log(location.state,"hsaduichsaudchu");
  
  return (
    <>
   <div  className="about d-flex justify-content-between mt-5">
     <div className='ml-4 mt-4' style={{width:"30%",border:"2px solid white",borderRadius:"20px"}}>
              <img  src={img_Api + location.state.poster_path} alt="" />
     </div>
     <div style={{width:"55%", marginRight:"20px"}}>
       <div style={{textAlign:"start",marginRight:"100px"}}>
             <Link to="/"> <h1 className='mt-3 ml-1' style={{textAlign:"start", color:"white"}}>{location.state.title}</h1> </Link>
       </div >
       <div style={{color:"white",fontSize:"1rem",marginTop:"50px"}}>

              <p style={{fontSize:"1.3rem"}}>{location.state.overview}</p>
       </div>
       <div className='mt-4'><h3><span style={{color:"red"}}> Rating  :</span> <span style={{color:"white"}}>{location.state.vote_average} 🌟</span></h3></div>
       <div className='mt-4'><h3><span style={{color:"green"}}> Release Date  :</span> <span style={{color:"white"}}>{location.state.release_date} 📅</span></h3></div>
       <div className='mt-4'><h3><span style={{color:"orange"}}> Popularity  :</span> <span style={{color:"white"}}>{location.state.popularity} 👍</span></h3></div>
       <div className='mt-4'><h3><span style={{color:"blue"}}> Vote Count  :</span> <span style={{color:"white"}}>{location.state.vote_count} 💌</span></h3></div>
     </div>
          </div>

    </>
  )
}

export default Abc