<script>
/* import MusicService from "../services/MusicService";

export default {
    name: "info",

    data(){
        return {
            music: null,
        };
    },

    methods: {
        getById(id){
            MusicService.getById(id).then((response) => {
            this.music = response.data;   
            });
        },
    },

    created() {
        this.getById(this.$route.params.id);
    },

}; */
</script>

<template>
<h2> - </h2>
<div class="container-info">
    <div class="container-card">
        <div class="all-card">
            <div class="card" style="width: 14rem;">
                <img src="" class="card-img-top" alt="...">
                    <div class="card-body">
                        <img class="icons-music" src ="https://upload.wikimedia.org/wikipedia/commons/7/75/Spotify_icon.png">
                        <img class="icons-music" src ="https://camo.githubusercontent.com/2f1afecef9033d21cc42b61763e9de2f28dcebfde75576d317c9dce72eb5c592/68747470733a2f2f696d616765732e67656e6975732e636f6d2f38656436363963616464393536343433653239633730333631656334663337322e31303030783130303078312e706e67">
                    </div>
                <span></span>
            </div>
        </div>
    </div>
    <div class="container-tracklist">
        <span></span>
    </div>
</div>
<h2>ABOUT SINGER</h2>
<div class="container-info">
    <div class="container-card">
        <div class="all-card">
            <div class="card" style="width: 14rem;">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4bWpfC54n4IkIjQtRIooGZOugxSvAFnb7usfBgo6soGpkxChBOCAXysJbM-8xE5KqYKg&usqp=CAU" class="card-img-top" alt="...">
            </div>
        </div>
    </div>
    <div class="container-tracklist">
        <p></p>
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
    margin: 1.5vw;
    float: left;
}
.card {
    border: none;
    text-align: center;
}

.card-img-top {
    border: 5px solid #CE98E8;
}
.container-tracklist {
    width: 40vw;
    padding: 2vw;
}

.icons-music {
    width: 4rem;
    margin: 1vw;
}
</style>