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
<h2>RENAISSANCE - Beyoncé</h2>
<div class="container-info">
    <div class="container-card">
        <div class="all-card">
            <div class="card" style="width: 14rem;">
                <img src="https://m.media-amazon.com/images/I/61yO73-xTcL._SL1500_.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <img class="icons-music" src ="https://upload.wikimedia.org/wikipedia/commons/7/75/Spotify_icon.png">
                        <img class="icons-music" src ="https://camo.githubusercontent.com/2f1afecef9033d21cc42b61763e9de2f28dcebfde75576d317c9dce72eb5c592/68747470733a2f2f696d616765732e67656e6975732e636f6d2f38656436363963616464393536343433653239633730333631656334663337322e31303030783130303078312e706e67">
                    </div>
            </div>
        </div>
    </div>
    <div class="container-tracklist">
        <span>RENAISSANCE is Beyoncé’s seventh studio album. On June 16, 2022 — the four-year anniversary of EVERYTHING IS LOVE, her collaborative album with her husband JAY-Z, Beyoncé announced the project through her social media bios:

act i ⠀RENAISSANCE ⠀7.29

The title of the project was being hinted at since 2021, on an August interview with Harper’s Bazaar Beyoncé said the following after being asked about new music:

With all the isolation and injustice over the past year, I think we are all ready to escape, travel, love, and laugh again. I feel a renaissance emerging, and I want to be part of nurturing that escape in any way possible

Speculations of an album release started around June 10, when Beyoncé’s social media profile pictures were removed, the day later an empty article titled “WHAT IS A B7?” appeared.

On June 14, the British magazine The Sun reported Beyoncé was working on UK pop-up shows to promote the album and revealed a source told them the project was mostly worked through the pandemic. Beyoncé herself later confirmed this for

The next day, Beyoncé’s nonprofit, the BeyGOOD Foundation, shared a picture on Twitter with various album covers to celebrate Black Music Month, including a never seen before image of an arm with a red glove, driving fans to believe this to be a hint to the new album.

The pre-save page from Apple Music revealed the project contained sixteen tracks.

Variety also reported RENAISSANCE would feature dance and country-leaning tracks, including contributions from songwriter Ryan Tedder.

On June 21, Beyoncé released “BREAK MY SOUL,” the house-inspired lead single of the project.

A leaked description for the CD’s page on Amazon’s Italian local website revealed that RENAISSANCE would be the first installment of a trilogy that would aim to celebrate black music and culture through many flips on past hits. The description also read that the album’s general soundscape would be up-tempo, with a strong dance, house, and even techno-influenced orientation.</span>
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
        <p>Beyoncé Giselle Knowles-Carter (born September 4, 1981), better known professionally by her first name Beyoncé, is an American singer, rapper, songwriter, producer, and actress.

In the twenty-first century, no pop star was as poised, as polished, or as generally fierce as Beyoncé. She scored early success with Destiny’s Child, who started out as a sexier and sassier (if less adult) version of TLC, then steadily became more and more of a vehicle for Beyoncé’s operatic vocals and general diva-tude, which may have been the plan all along.

Whether appearing in TV spots, co-starring in films like Dreamgirls, or killing it every night on stadium tours, Beyoncé was omnipresent in the 2000s. Almost everybody, Beygency member or otherwise, loved shiny, hip-hop-fueled hits like “Crazy in Love”, and “Single Ladies (Put a Ring on It)”. Moving into the 2010s, Beyoncé fights on, gaining more and more traction in pop culture with her work and music.

She has made a significant impact upon the music landscape in general with her recent albums 4 and BEYONCÉ, which explored complex themes like motherhood, feminism, marriage, sexuality, and doubt in a greater depth. With Lemonade, she went a step further—the fierce, intimate exploration of marriage, infidelity, and forgiveness was her most personal album yet.

In 2018, after years of rumors, Yoncé released the joint collaboration EVERYTHING IS LOVE with husband JAY-Z, paying tribute to their relationºships and bringing a sonic edge to their healing process after the scandal and heartbreak expressed on Lemonade.

In 2022, she released RENAISSANCE, a musically daring trip through Dance, House, Disco and Ballroom past, present, and future.

As music continues to evolve in sound and subject, Beyoncé continues to make her mark on the music industry and pop culture in general with her boundary-pushing, empowering, and evocative music. She is currently the most awarded artist alive (the second in history) and the most nominated female in Grammy history.</p>
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