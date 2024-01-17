"use client"

import axios from "axios"
import { useContext, createContext, useState, useEffect } from "react"

const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {

    const [TopRatedMovies, setTopRatedMovies] = useState([])
    const [Trending, setTrending] = useState([])
    const [Popular, setPopular] = useState([])
    const [NowPlaying, setNowPlaying] = useState([])
    const [upcoming, setupcoming] = useState([])


    const tmdbApi = "7b1639b361a6c27c3fb05b55cb8f3867"
    const tmdbBaseUrl = 'https://api.themoviedb.org/3';

    const [user, setuser] = useState(true)

    const fetchTrendingMovies = async () => {
        try {
            const response = await axios.get(`${tmdbBaseUrl}/trending/movie/week?api_key=${tmdbApi}`);
            const top10 = response.data.results.splice(0, 10)
            setTrending(top10)

        } catch (error) {
            console.error('Error fetching trending movies:', error);
        }
    }
    const fetchTopRated = async () => {
        try {
            const response = await axios.get(`${tmdbBaseUrl}/movie/top_rated?api_key=${tmdbApi}`);
            if (response.data.results) {
                setTopRatedMovies(response.data.results)
            }

        } catch (error) {
            console.error('Error fetching trending movies:', error);
        }
    }
    const fetchPopularMovie = async () => {
        try {
            const response = await axios.get(`${tmdbBaseUrl}/movie/popular?api_key=${tmdbApi}`);
            if (response.data.results) {
                setPopular(response.data.results)
            }

        } catch (error) {
            console.error('Error fetching trending movies:', error);
        }
    }

    const fecthNowPlaying = async () => {
        try {
            const res = await axios.get(`${tmdbBaseUrl}/movie/now_playing?api_key=${tmdbApi}`)
            setNowPlaying(res.data.results)
        } catch (error) {
            console.log(error);
        }
    }
    const fecthUpcoming = async () => {
        try {
            const res = await axios.get(`${tmdbBaseUrl}/movie/upcoming?api_key=${tmdbApi}`)
            setupcoming(res.data.results)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchTrendingMovies()
        fetchTopRated()
        fetchPopularMovie()
        fecthNowPlaying()
        fecthUpcoming()
    }, [])



    return (
        <GlobalContext.Provider value={{ user, TopRatedMovies, Popular, Trending, NowPlaying, upcoming }}>
            {children}
        </GlobalContext.Provider>
    )

}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}