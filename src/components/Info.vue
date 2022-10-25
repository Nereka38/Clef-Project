<template>
<h2> 5SOS5 - 5SOS </h2>
<div class="container-info">
    <div class="container-card">
        <div class="all-card">
            <div class="card" style="width: 14rem;">
                <img src="https://i.scdn.co/image/ab67616d0000b2738bfbaac83000c56775070328" class="card-img-top" alt="...">
                    <div class="card-body">
                        <a href="https://open.spotify.com/album/26uA5pGrTovBLxikRsMQJ4" target="_blank" ><img class="icons-music" src ="https://upload.wikimedia.org/wikipedia/commons/7/75/Spotify_icon.png"></a>
                        <a href="https://genius.com/albums/5-seconds-of-summer/5sos5" target="_blank"><img class="icons-music" src ="https://camo.githubusercontent.com/2f1afecef9033d21cc42b61763e9de2f28dcebfde75576d317c9dce72eb5c592/68747470733a2f2f696d616765732e67656e6975732e636f6d2f38656436363963616464393536343433653239633730333631656334663337322e31303030783130303078312e706e67"></a>
                    </div>
            </div>
        </div>
    </div>
    <div class="container-tracklist">
        <span>Following an 18-month break from releasing music right after the successful release of their fourth studio album, CALM, 5 Seconds of Summer released “2011” on December 3, 2021, a nostalgic song that celebrates and reflects upon their 10-year journey as a band.
                    The album’s official name and release date was announced via Twitter on May 11, 2022.</span>
            <div class="buttons">
                <button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">
                    Want to Listen
                </button>
                <button type="button" class="btn btn-secondary" data-toggle="button" aria-pressed="false" autocomplete="off">
                    Listened
                </button>
            </div>
    </div>
</div>
<h2>ABOUT SINGER</h2>
<div class="container-info">
    <div class="container-card">
        <div class="all-card">
            <div class="card" style="width: 14rem;">
                <img src="https://i.scdn.co/image/ab6761610000e5eb92ce1e218cb7b48386efe3d8" class="card-img-top" alt="...">
            </div>
        </div>
    </div>
    <div class="container-tracklist">
        <p>5 Seconds of Summer is an Australian pop-rock band that consists of Luke Hemmings on lead vocals, Calum Hood on bass, Ashton Irwin on drums, and Michael Clifford on guitar. They formed in 2011 and rose to international fame when One Direction found their covers of songs on YouTube in 2013.</p>
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
    margin: 0 1vw 0 0;
}

.icons-music {
    width: 4rem;
    margin: 1vw;
}

.buttons {
    display: flex;
    justify-content: center;
    margin:1vw;
}

.btn {
    margin:1vw;
}
</style>