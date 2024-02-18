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




const Movies = () => {


    const [movies, setMovies] = useState([])
    const [page,setPages]=useState(1)
    useEffect(() => {

        axiosInstance.get(`https://api.themoviedb.org/3/movie/popular?f1eee73290adf14e14835c99a5183f79&page=${page}`
        // axiosInstance.get('https://api.themoviedb.org/3/movie/popular?f1eee73290adf14e14835c99a5183f79',{
            // params:{
            //     limit:5
            //   }
        // }
        ).then((res) => {
            console.log(res.data.results);
            setMovies(res.data.results)
        }).catch((err) => {
            console.log(err);
        })

    }, [page])

    const nextMovies = () => {
        setPages((prevPage) => prevPage + 1);
    };
    const prevMovies = () => {
        setPages((prevPage) => prevPage - 1);
    };
    const navigate = useNavigate();


/////////////////////////////////////////////////////////////////////////////////////////////////

const favMovies= useSelector((state)=>state.favouriteMov.favourites)
const favDispatch=useDispatch()


const addToFav=(id,e)=>
{

    if (favMovies.includes(id)) {
        e.target.style.color='black'
        favDispatch(removeFromFavourite(favMovies.indexOf(id)))


    } else {
    
        e.target.style.color='red'
        
        favDispatch(addToFavourite(id));
    }
  

}
    return <>
    
<div className="my-1">

<button className="btn btn-danger  " onClick={()=>{prevMovies()}} >previous</button>

<button className="btn btn-primary float-end  "  onClick={()=>{nextMovies()}}>next</button>

</div>
    <div className="contaner-fluid">
        <Row xs={1} md={6} className="g-2">
            {movies.map((movie) => (
                <Col key={movie.id}>
                    <Card>
                        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />

                        <Card.Body>
                        <FaHeart className="float-end"  onClick={()=>{addToFav(movie.id,event)}}/>
                            <Card.Title>{movie.title}</Card.Title>

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

