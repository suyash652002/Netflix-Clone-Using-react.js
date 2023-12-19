import React, { useEffect, useState } from 'react';
import "./Home.scss";
import axios from 'axios';
import { BiPlay } from 'react-icons/bi'
import { AiOutlinePlus } from 'react-icons/ai'

const apiKey = "11adcc101d73390cb05702cc4d73cd32";
const url = "https://api.themoviedb.org/3/";
const imgUrl = "https://image.tmdb.org/t/p/original"
const upcoming = "upcoming";
const nowPlaying = "now_playing";
const popular = "popular";
const topRated = "top_rated";

const Card = ({ img }) => {
    return (
        <img className='card' src={img} alt="cover" />
    )
}

const Row = ({ title, arr = [{
    img: "https://ohsmagnet.com/wp-content/uploads/2019/04/unnamed-607x900.jpg"
}] }) => {
    return (
        <div className='row'>
            <h2>
                {title}
            </h2>

            <div>
                {
                    arr.map((item, index) =>
                        <Card key={index} img={`${imgUrl}/${item.poster_path}`} />
                    )
                }
            </div>
        </div>
    )
}
export default function Home() {
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [nowPlayingMovies, setNowPlayinhMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);

    useEffect(() => {
        const fetchUpcoming = async () => {
            const { data: { results } } = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`);
            // console.log(results);
            setUpcomingMovies(results);
            console.log(upcomingMovies);
        };
        const fetchnowPlaying = async () => {
            const { data: { results } } = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`);
            // console.log(results);
            setNowPlayinhMovies(results);
            console.log(nowPlayingMovies);
        };

        const fetchPopular = async () => {
            const { data: { results } } = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`);
            // console.log(results);
            setPopularMovies(results);
            console.log(popularMovies);
        };

        const fetchtopRated = async () => {
            const { data: { results } } = await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}`);
            // console.log(results);
            setTopRatedMovies(results);
            console.log(topRatedMovies);
        };

        fetchUpcoming();
        fetchnowPlaying();
        fetchPopular();
        fetchtopRated();
    }, [])

    return (
        <section className='home'>

            <div className='banner' style={{ backgroundImage: popularMovies[0] ? `url(${`${imgUrl}/${popularMovies[15].poster_path}`})` : "rgb(16, 16, 16)" }}>
                {
                    popularMovies[15] && (<h1>{popularMovies[15].original_title}</h1>)
                }
                {
                    popularMovies[15] && (<p>{popularMovies[15].overview}</p>)
                }
                <div>
                    <button><BiPlay /> Play</button>
                    <button>My List <AiOutlinePlus /></button>
                </div>
            </div>

            <Row title={"Upcoming on Netflix"} arr={upcomingMovies} />
            <Row title={"Now Playing on Netflix"} arr={nowPlayingMovies} />
            <Row title={"Popular on Netflix"} arr={popularMovies} />
            <Row title={"Top Rated on Netflix"} arr={topRatedMovies} />

        </section>
    )
}
