import http from './http-common';

class MusicService {

    getMusics() {
        return http.get();
    }

    getById(id) {
        return http.get(`/${id}`);
    }

    deleteMusic(id) {
        return http.delete(`/delete/{id}`);
    }

}

export default new MusicService();