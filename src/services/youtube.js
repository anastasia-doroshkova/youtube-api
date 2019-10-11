import axios from 'axios';

const KEY = 'AIzaSyDOpnW0mRRgsdKWnnyvRJiyg8vGho_H9so';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
