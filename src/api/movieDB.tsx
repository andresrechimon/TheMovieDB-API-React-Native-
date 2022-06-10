import axios from "axios";

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '3b02385c049d1e2f5080b8acdd5e113a',
        language: 'es-ES'
    }
});

export default movieDB;