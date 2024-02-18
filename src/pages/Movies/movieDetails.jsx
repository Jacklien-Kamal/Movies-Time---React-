import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axiosInstance from '../../axiosConfig/instance';
const Details = () => {

    const [movie, setMovies] = useState({})
    const {id } = useParams()
    async function getMoviesId() {
        try {
            const res = await axiosInstance.get(`https://api.themoviedb.org/3/movie/${id}?api_ 
            key=f1eee73290adf14e14835c99a5183f79
            `)
            console.log(res);
            setMovies(res.data)
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {


        getMoviesId()

    }, [])
    return (
        <>
     
            <Card style={{ width: '18rem',marginLeft:'37rem' }}>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                <Card.Body>
                    <Card.Title style={{color:'green' ,fontSize:'24px'}}>{movie.title}</Card.Title>
                    <Card.Title style={{fontSize:'18px'}}>{movie.overview}</Card.Title>


                </Card.Body>
            </Card>
            
        </>
    );
}

export default Details;
