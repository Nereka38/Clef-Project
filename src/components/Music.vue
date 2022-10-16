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
    <!-- <div class = "container">
            <h1 class = "text-center"> Music</h1>
            <table class = "table table-striped">
                <thead>
                    <tr>
                        <th> Id</th>
                        <th> Album</th>
                        <th> Artist</th>
                        <th> Date</th>
                    </tr>

                </thead>
                <tbody>
                    <tr v-for="music in musics" v-bind:key="music.id">
                        <td> {{music.id}}</td>
                        <td> {{music.album}}</td>
                        <td> {{music.artist}}</td>    
                        <td> {{music.date}}</td>
                    </tr>
                </tbody>
            </table>
        </div> -->
    <!-- <div v-for="music in musics" v-bind:key="music.id"> -->
        <div class="container-card">
            <h1>NEW MUSIC</h1>
            <div class="all-card">
            <div class="card" style="width: 14rem;">
                <img src="https://m.media-amazon.com/images/I/61yO73-xTcL._SL1500_.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">Título - Artista</p>
                    </div>
            </div>
            <div class="card" style="width: 14rem;">
                <img src="https://m.media-amazon.com/images/I/61yO73-xTcL._SL1500_.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">Título - Artista</p>
                    </div>
            </div>
            <div class="card" style="width: 14rem;">
                <img src="https://m.media-amazon.com/images/I/61yO73-xTcL._SL1500_.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">Título - Artista</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-card">
            <h1>EXPLORE</h1>
            <div class="all-card">
            <div class="card" style="width: 14rem;">
                <img src="https://m.media-amazon.com/images/I/61yO73-xTcL._SL1500_.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">Título - Artista</p>
                    </div>
            </div>
            <div class="card" style="width: 14rem;">
                <img src="https://m.media-amazon.com/images/I/61yO73-xTcL._SL1500_.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">Título - Artista</p>
                    </div>
            </div>
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

<style scoped>
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
    margin: 5vw;
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

}
</style>