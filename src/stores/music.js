import { defineStore } from "pinia";

export const musicFavoritesStore = defineStore({
    id: "musicfavorites",
    state: () => ({
      favoritesmusic: [],
    }),

    actions: {
      addFavorite(favoriteMusic) {
        console.log('add favorite')
        this.favoritesMusic.push(favoriteMusic);
      },
      deleteFavorite(favoriteMusic) {
        this.favoritesMusic.splice(this.favoritesMusic.indexOf(favoriteMusic), 1)
        if (window.updateMusic != null) {
          window.updateMusic.call(window.homeInstance)
        }
      }
    },
  });