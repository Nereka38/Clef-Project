<script>
import MusicService from '../services/MusicService';
import { RouterLink } from 'vue-router'

export default {
    name: 'Musics',
    data(){
        return {
            musics: [],
        }
    },
    methods: {
        getMusics(){
            MusicService.getMusics().then((response) => {
            this.musics = response.data;   
            });
        },
    },
    created() {
        this.getMusics();
    },
}
</script>

<template>
    <h1>NEW MUSIC</h1>
        <div class="container-card">
            <div class="all-card">
            <div v-for="music in musics" v-bind:key="music.id" class="card" style="width: 14rem;">
                <figure class="effect-zoe">
                <RouterLink to="/info"><img :src="music.imagealbum" class="card-img-top" alt="..."></RouterLink>
                <figcaption>
                        <span class="card-text card-body">{{music.album}} - {{music.artist}}</span>
                </figcaption> 
                </figure>
            </div>
            </div>
        </div>
</template>

<style>
.h1, h1 {
    text-align: center;
}
.card-img-top {
    border: 5px solid #CE98E8;
}

.card {
    border: none !important;
    display: flex;
    justify-content: center;
    width: 10vw;
    margin: 2vw;
}

.card-body {
    display: flex;
    justify-content: center;
    padding: 0 !important;
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

figure:hover {
    background: rgb(209, 134, 184);
    opacity: 0.6;

}

figure.effect-zoe figcaption {
	top: auto;
	bottom: 0;
	padding: 0.2em;
	height: 0.1em;
	background: #fff;
	color: #3c4a50;
	-webkit-transition: -webkit-transform 0.35s;
	transition: transform 0.35s;
	-webkit-transform: translate3d(0,100%,0);
	transform: translate3d(0,100%,0);
}

figure.effect-zoe h2 {
	float: left;
}
figure.effect-zoe p.icon-links a {
	float: right;
	color: #3c4a50;
	font-size: 1.4em;
}

figure.effect-zoe:hover p.icon-links a:hover,
figure.effect-zoe:hover p.icon-links a:focus {
	color: #252d31;
}

figure.effect-zoe p.description {
	position: absolute;
	bottom: 1em;
	padding: 1em;
	color: #fff;
	text-transform: none;
	font-size: 90%;
	opacity: 0;
	-webkit-transition: opacity 0.35s;
	transition: opacity 0.35s;
	-webkit-backface-visibility: hidden; /* Fix for Chrome 37.0.2062.120 (Mac) */
}
figure.effect-zoe h2,
figure.effect-zoe p.icon-links a {
	-webkit-transition: -webkit-transform 0.35s;
	transition: transform 0.35s;
	-webkit-transform: translate3d(0,200%,0);
	transform: translate3d(0,200%,0);
}

figure.effect-zoe p.icon-links a span::before {
	display: inline-block;
	padding: 8px 10px;
	font-family: 'feathericons';
	speak: none;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.icon-eye::before {
	content: '\e000';
}

.icon-paper-clip::before {
	content: '\e001';
}

.icon-heart::before {
	content: '\e024';
}

figure.effect-zoe h2 {
	display: inline-block;
}
figure.effect-zoe:hover p.description {
	opacity: 1;
}

figure.effect-zoe:hover figcaption,
figure.effect-zoe:hover h2,
figure.effect-zoe:hover p.icon-links a {
	-webkit-transform: translate3d(0,0,0);
	transform: translate3d(0,0,0);
}

figure.effect-zoe:hover h2 {
	-webkit-transition-delay: 0.05s;
	transition-delay: 0.05s;
}

figure.effect-zoe:hover p.icon-links a:nth-child(3) {
	-webkit-transition-delay: 0.1s;
	transition-delay: 0.1s;
}

figure.effect-zoe:hover p.icon-links a:nth-child(2) {
	-webkit-transition-delay: 0.15s;
	transition-delay: 0.15s;
}

figure.effect-zoe:hover p.icon-links a:first-child {
	-webkit-transition-delay: 0.2s;
	transition-delay: 0.2s;
}

</style>