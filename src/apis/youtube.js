import axios from 'axios';

const API_KEY = 'AIzaSyBuh01_xMPHt71pQ0xsTy8bBiEeG7xohwg';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: API_KEY,
        q: ''
    }
});