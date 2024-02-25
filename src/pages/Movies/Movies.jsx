import axios from "axios"
import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import { addToFavourite,removeFromFavourite } from "../../store/slices/favourite";

import axiosInstance from "../../axiosConfig/instance"
import { useDispatch, useSelector } from "react-redux";
import { FaHeart } from "react-icons/fa6";
import { FaCaretRight } from "react-icons/fa6";
import { FaCaretLeft } from "react-icons/fa6";

import { movieAction } from "../../store/slices/movies";





    const Movies = () => {


        const [page, setPages] = useState(1)
        const dispatch=useDispatch()
       const movies= useSelector((state)=>state.movies.movies)
    
    
    
        useEffect(() => {
            dispatch(movieAction(page))
    
    
    
        }, [page])
    

    const nextMovies = () => {
        setPages((prevPage) => prevPage + 1);
    };
    const prevMovies = () => {
        setPages((prevPage) => prevPage - 1);
    };
    const navigate = useNavigate();

console.log(movies);
/////////////////////////////////////////////////////////////////////////////////////////////////

const favMovies= useSelector((state)=>state.favouriteMov.favourites)
const favDispatch=useDispatch()


const addToFav=(id,e)=>
{

    if (favMovies.includes(id)) {
        e.target.style.color='white'
        favDispatch(removeFromFavourite(favMovies.indexOf(id)))


    } else {
    
        e.target.style.color='red'
        
        favDispatch(addToFavourite(id));
    }
  

}

    return <>
    
<div className="mt-1 mb-2 mx-5">

<button className="btn btn-danger  fs-5 " onClick={()=>{prevMovies()}} > <FaCaretLeft/> Previous</button>

<button className="btn btn-success mx-3  fs-5"  onClick={()=>{nextMovies()}}>Next <FaCaretRight/></button>

</div>

    <div className="contaner-fluid mx-5">
        <Row xs={1} md={5} className="g-2" >
            {movies.map((movie) => (
                <Col key={movie.id} >
                    <Card >
                        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />

                        <Card.Body>
                        <FaHeart className="float-end"  onClick={()=>{addToFav(movie.id,event)}}/>
                            <Card.Title className="text-light">{movie.title}</Card.Title>

                            <button className="btn btn-primary " onClick={() => {
                                navigate(`/details/${movie.id}`)
                            }}>Details</button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
        </div>
    </>

}
export default Movies;

