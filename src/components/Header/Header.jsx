import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios"
import Movie from "../movie/Movie";
import Youtube from "../Youtube/Youtube";
import { useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";



function Header() {

  let navigate = useNavigate();
  // let history = useHistory();
  const img_Api = "https://image.tmdb.org/t/p/w1280"
  const api =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=10e784bf2808e363f5cc8d92fe6d8000";
  const [movies, setMovies] = useState([]);
  const [first, setfirst] = useState({vote_average: "8",release_date:"2022-03-30",title:"Dr. Strange",overview:"Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble."})
  useEffect(() => {
    // fetch(api)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setMovies(data.results);
        // console.log(data,"|sjdifjasifhhhhhhhhhhhhhhhh")
        // console.log(data.results);
 
      // });

        async function getData (){
          const res = await axios.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=10e784bf2808e363f5cc8d92fe6d8000")
          console.log(res.data.results)
          setMovies(res.data.results)
        }
        getData()
  }, []);



const  click =(item)=>{
  // console.log(id);

setfirst(item)
// history.push("/Abc")
navigate('/abc',{state:item})

}


  return (
    <>
      <div className="header">
        <div className="img">
          {/* <img
            style={{ opacity: ".9", zIndex: "-1", overflow: "hidden",width:"100%",height:"700px" }}
            className="img"
            src={img_Api+first.backdrop_path}
            alt=""
          /> */}
          <div style={{width: "100%",height:"750px"}} className="plyr__video-embed" id="player"> 
            <iframe style={{marginTop:"-69px"}} width="100%" height="750" src="https://www.youtube.com/embed/sFTD5vBfRGY" title="YouTube video player" frameborder="0"  allowfullscreen></iframe>
        </div>
        </div>

        <div className="container1  ">
          <div>
            <h1 className="ml-4">
             <Link to = "/"> <span style={{ color: "yellow" }}>🎬 Ro</span></Link>
              <span style={{ color: "red", fontSize: "2.2rem" }}>wth 🎥</span>
            </h1>
          </div>

          <div className="mt-5  ">
            <h1
              style={{
                color: "white",
                fontSize: "5rem",
                position: "relative",
                top: "8px",
                left: "30px",
              }}
            >
              {first.title}
            </h1>
          </div>
          <div className="mt-3 all" style={{ width: "50%" }}>
            <p>
             {first.overview}
            </p>
          </div>
          {/* <div className="mt-3 all">
            <h4>
              <span style={{ fontFamily: "cursive" }}> Director </span>:{" "}
              <span style={{ color: "gold" }}> Vishal </span>{" "}
            </h4>
          </div> */}
          <div className="all">
            <h4>
            
              <span style={{ fontFamily: "cursive" }}>Rating </span> :{" "}
              <span style={{ color: "gold" }}>{first.vote_average} </span>
            </h4>
            <h4 > <span style={{ fontFamily: "cursive" }}>Realese Date </span> :{" "}
              <span style={{ color: "gold" }}>{first.release_date} </span></h4>
          </div>

          <div className="raecto ">
            {movies.map((item,index) => {
              
              return (
                <>
              
               <div  onClick={()=>click(item)}>

                  <Movie
                  key ={index} id={`testjxdh${index}` }
                  img={item.poster_path}
                  title={item.title}
                  first={first}
                  
                  />

                  </div>
                 
                  </>
             
              );
            })}
          </div>
        </div>
      </div>

      <div></div>
    </>
  );
}

export default Header;
