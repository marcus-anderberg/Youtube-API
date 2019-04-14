import axios from 'axios';

const KEY = "AIzaSyDyasUCRH1XjuoK24Igfp-ANppQ0B9h3-E";


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: snippet,
        maxResults: 5,
        key: KEY,
    
    }
})