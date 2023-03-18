// API
import API from "../API";
// config
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from "../config";

// hook
import { useHomeFetch } from "../hooks/useHomeFetch";
// img
import NoImage from "../Images/no_image.jpg";
import Button from "./Button/Button";
// components
import Grid from "./Grid/Grid";
import HeroImage from "./HeroImage/HeroImage";
import SearchBar from "./SearchBar/SearchBar";

import Spinner from "./Spinner/Spinner";
import Thumb from "./Thumb/Thumb";

const Home = () => {
    const {
        state,
        loading,
        error,
        searchTerm,
        setSearchTerm,
        setIsLoadingMore,
    } = useHomeFetch();
    //  console
    console.log(state);

    if (error) {
        return <div>Some Thing Went Wrong :( .....</div>;
    }
    const MoviesList = state.results;
    return (
        <div>
            {state.results[0] ? (
                <HeroImage
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${MoviesList[0].backdrop_path}`}
                    title={`${MoviesList[0].original_title}`}
                    text={MoviesList[0].overview}
                />
            ) : null}
            <SearchBar setSearchTerm={setSearchTerm} />

            <Grid header={searchTerm ? "Search Result" : "Popular Movies"}>
                {MoviesList.map((movie) => (
                    <Thumb
                        key={movie.id}
                        image={
                            movie.poster_path
                                ? IMAGE_BASE_URL +
                                  POSTER_SIZE +
                                  movie.poster_path
                                : NoImage
                        }
                        clickable={true}
                    />
                ))}
            </Grid>
            {loading && <Spinner />}
            {state.page < state.total_pages && !loading && (
                <Button
                    text="Load More"
                    callback={() => setIsLoadingMore(true)}
                />
            )}
        </div>
    );
};
export default Home;
