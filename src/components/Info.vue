<script>
import MusicService from '../services/MusicService';

export default {
    name: 'Musics',
    data(){
        return {
            musics: []
        }
    },
    methods: {
        getMusics(){
            MusicService.getMusics().then((response) => {
            this.musics = response.data;   
            });
        }
    },
    created() {
        this.getMusics();
    }
}
</script>

<template>
<h1>ALBUM</h1>
<div class="container-info">
    <div class="container-card">
        <div class="all-card">
            <div class="card" style="width: 14rem;">
                <img src="https://m.media-amazon.com/images/I/61yO73-xTcL._SL1500_.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">Escucha en Spotify</p>
                        <p class="card-text">Lyrics en Genius</p>
                    </div>
            </div>
        </div>
    </div>
    <div class="container-tracklist">
        <p>Tracklist del disco / info del disco</p>
    </div>
</div>

<h2>ABOUT SINGER</h2>
<div class="container-info">
    <div class="container-card">
        <div class="all-card">
            <div class="card" style="width: 14rem;">
                <img src="https://m.media-amazon.com/images/I/61yO73-xTcL._SL1500_.jpg" class="card-img-top" alt="...">
            </div>
        </div>
    </div>
    <div class="container-tracklist">
        <p>Información del artista</p>
    </div>
</div>
</template>

<style scoped>
.h1, h1 {
    text-align: center;
}

.h2, h2 {
    text-align: center;
}
.container-info {
    display:flex;
    flex-flow: row wrap;
}

.all-card {
    margin: 1vw;
    padding: 2vw;
}
.card {
    border: none;
    text-align: center;
}

.card-img-top {
    border: 5px solid #CE98E8;
}
.container-tracklist {
    margin: 1vw;
    padding: 2vw;
}
</style>