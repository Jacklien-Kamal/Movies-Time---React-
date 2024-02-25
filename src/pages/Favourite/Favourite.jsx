import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaTrash } from "react-icons/fa"
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { removeFromFavourite } from "../../store/slices/favourite";

import axiosInstance from '../../axiosConfig/instance';

const Favourite = () => {
    const favMovies = useSelector((state) => state.favouriteMov.favourites)
    const dispatch = useDispatch()
    // console.log(favMovies);


    const [movies, setMovies] = useState([]); // Change here
    const { id } = useParams();

    async function getMovies() {
        try {
            const moviesData = [];
            for (let index = 0; index < favMovies.length; index++) {
                const res = await axiosInstance.get(`https://api.themoviedb.org/3/movie/${favMovies[index]}?api_key=f1eee73290adf14e14835c99a5183f79`);
                moviesData.push(res.data);
            }
            setMovies(moviesData);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getMovies();
    }, [movies]);
   const removeFav = (moviId) => {
        dispatch(removeFromFavourite(favMovies.indexOf(moviId)))
    }
   
    return (
        <>
        <div className="bg-dark">
            <Row xs={1} md={4} className="g-4" >
                {movies.map((movie) => (
                    <Col key={movie.id}>
                        <Card>
                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                            <Card.Body style={{backgroundColor:'black'}} >
                                <FaTrash onClick={() => { removeFav(movie.id) }} className="text-danger float-end"></FaTrash>
                                <Card.Title className="text-light">{movie.title}</Card.Title>
                                <Button className="btn btn-success"onClick={() => {
                                navigate(`/details/${movie.id}`)}}>Details</Button>

                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            </div>
        </>
    );
}

export default Favourite;
