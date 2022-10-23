import axios from 'axios';
const MUSIC_API_BASE_URL = 'http://localhost:8080/api/musics';

class MusicService {

    getMusics() {
        return axios.get(MUSIC_API_BASE_URL)
    }

}

export default new MusicService();