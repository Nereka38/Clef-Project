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
        <div class="container-card">
            <h2>Agosto 2022</h2>
            <div class="all-card">
            <div v-for="music in musics" v-bind:key="music.id" class="card" style="width: 14rem;">
                <img :src="music.imagealbum" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">{{music.album}} - {{music.artist}}</p>
                    </div>
            </div>
            </div>
            <h2>Septiembre 2022</h2>
            <div class="all-card">
            <div v-for="music in musics" v-bind:key="music.id" class="card" style="width: 14rem;">
                <img :src="music.imagealbum" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">{{music.album}} - {{music.artist}}</p>
                    </div>
            </div>
            </div>
        </div>
</template>

<style scoped>
.h1, h1, h2 {
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
    padding: 3vw;

}
</style>