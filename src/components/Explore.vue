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
    <h2>R&B</h2>
        <div class="container-card">
            <div class="all-card">
            <div v-for="music in musics" v-bind:key="music.id" class="card" style="width: 14rem;">
                <img :src="music.imagealbum" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">{{music.album}} - {{music.artist}}</p>
                    </div>
            </div>
            </div>
        </div>
        <div class="all-card">
            <div class="card" style="width: 14rem;">
                <img src="https://m.media-amazon.com/images/I/61yO73-xTcL._SL1500_.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">Título - Artista</p>
                    </div>
            </div>
            <div class="all-card">
            <div class="card" style="width: 14rem;">
                <img src="https://m.media-amazon.com/images/I/61yO73-xTcL._SL1500_.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">Título - Artista</p>
                    </div>
            </div>
            </div>
            <div class="all-card">
            <div class="card" style="width: 14rem;">
                <img src="https://m.media-amazon.com/images/I/61yO73-xTcL._SL1500_.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">Título - Artista</p>
                    </div>
            </div>
            </div>
            <div class="all-card">
            <div class="card" style="width: 14rem;">
                <img src="https://m.media-amazon.com/images/I/61yO73-xTcL._SL1500_.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">Título - Artista</p>
                    </div>
            </div>
            </div>
            </div>
            <h2>Pop</h2>
        <div class="container-card">
            <div class="all-card">
            <div v-for="music in musics" v-bind:key="music.id" class="card" style="width: 14rem;">
                <img :src="music.imagealbum" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">{{music.album}} - {{music.artist}}</p>
                    </div>
            </div>
            </div>
        </div>
        <div class="all-card">
            <div class="card" style="width: 14rem;">
                <img src="https://m.media-amazon.com/images/I/61yO73-xTcL._SL1500_.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">Título - Artista</p>
                    </div>
            </div>
            <div class="all-card">
            <div class="card" style="width: 14rem;">
                <img src="https://m.media-amazon.com/images/I/61yO73-xTcL._SL1500_.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">Título - Artista</p>
                    </div>
            </div>
            </div>
            <div class="all-card">
            <div class="card" style="width: 14rem;">
                <img src="https://m.media-amazon.com/images/I/61yO73-xTcL._SL1500_.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">Título - Artista</p>
                    </div>
            </div>
            </div>
            <div class="all-card">
            <div class="card" style="width: 14rem;">
                <img src="https://m.media-amazon.com/images/I/61yO73-xTcL._SL1500_.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">Título - Artista</p>
                    </div>
            </div>
            </div>
            </div>
    <!-- </div> -->
</template>

<style>
.h1, h1 {
    text-align: center;
}
.card-img-top {
    border: 5px solid #CE98E8;
}

.card {
    border: none;
    display: flex;
    justify-content: center;
    width: 10vw;
    margin: 2vw;
}

.card-body {
    display: flex;
    justify-content: center;
}

.container-card {
    display: flex;
    justify-content: center;
    flex-direction: column;
}
.all-card {
    display: flex;
    justify-content: center;
    flex-flow: row wrap;

}
</style>