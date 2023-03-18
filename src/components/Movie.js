import React from "react";
// config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
// Component
import Grid from "./Grid/Grid";
import Spinnr from "./Spinner/Spinner";

import NoImage from "../Images/no_image.jpg";
// hooks
import useMovieFetch from "../hooks/useMovieFetch";
import { useParams } from "react-router-dom";
import BreadCrumb from "./BreadCrumb/BreadCrumb";
import MovieInfo from "./MovieInfo/MovieInfo";
import MovieInfoBar from "./MovieInfoBar/MovieInfoBar";
import Actor from "./Actor/Actor";

const Movie = () => {
    const { movieId } = useParams();
    const { state: movie, loading, error } = useMovieFetch(movieId);
    if (loading) {
        return <Spinnr />;
    }
    if (error) {
        return <div>Some Thing Went Wrong </div>;
    }
    return (
        <div>
            <BreadCrumb movieTitle={movie.original_title} />
            <MovieInfo movie={movie} />
            <MovieInfoBar
                time={movie.runtime}
                budget={movie.budget}
                revenue={movie.revenue}
            />
            <Grid header="Actors">
                {movie.actors.map((actor) => (
                    <Actor
                        key={actor.credit_id}
                        name={actor.name}
                        charcter={actor.charcter}
                        imageUrl={
                            actor.profile_path
                                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                                : NoImage
                        }
                    />
                ))}
            </Grid>
        </div>
    );
};

export default Movie;
