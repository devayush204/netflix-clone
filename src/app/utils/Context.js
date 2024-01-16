"use client"

import axios from "axios"
import { useContext, createContext, useState, useEffect } from "react"

const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {

    const [TopRatedMovies, setTopRatedMovies] = useState([])
    const [Trending, setTrending] = useState([])
    const [Popular, setPopular] = useState([])

    const apiKey = "1423fd97"
    const tmdbApi = "7b1639b361a6c27c3fb05b55cb8f3867"
    const tmdbBaseUrl = 'https://api.themoviedb.org/3';

    const omdbBaseUrl = 'http://www.omdbapi.com/';
    const [user, setuser] = useState(true)

    const fetchTrendingMovies = async () => {
        try {
            const response = await axios.get(`${tmdbBaseUrl}/trending/movie/week?api_key=${tmdbApi}`);
            // console.log(response.data.results);

        } catch (error) {
            console.error('Error fetching trending movies:', error);
        }
    }
    const fetchTopRated = async () => {
        try {
            const response = await axios.get(`${tmdbBaseUrl}/movie/top_rated?api_key=${tmdbApi}`);
            if (response.data.results) {
                console.log(response.data.results, "top reateddd");
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
                console.log(response.data.results, "popular");
                setPopular(response.data.results)
            }

        } catch (error) {
            console.error('Error fetching trending movies:', error);
        }
    }

    useEffect(() => {
        fetchTrendingMovies()
        fetchTopRated()
        fetchPopularMovie()
    }, [])



    return (
        <GlobalContext.Provider value={{ user, TopRatedMovies, Popular }}>
            {children}
        </GlobalContext.Provider>
    )

}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}