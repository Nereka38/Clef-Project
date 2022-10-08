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
    <div class = "container">
            
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
        </div>
</template>