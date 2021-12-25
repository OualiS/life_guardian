<template>
  <v-container>
    <!-- Ask for new day -->
    <div v-if="askForNewDay">
      <v-row align="center" justify="center">
        <v-col cols="12" sm="5">
          Bienvenue Salah ! Prêt à commencer une nouvelle journée ?
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="2">
          <v-btn color="green" @click="newDay">C'est partit</v-btn>
        </v-col>
      </v-row>
    </div>
    <!-- Ask for new day FIN -->

    <!-- Carousel  -->
    <v-row v-if="showCarrousel">
      <v-col>
        <v-carousel
          cycle
          height="600"
          hide-delimiter-background
          show-arrows-on-hover
        >
          <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <v-sheet :color="colors[i]" height="100%">
              <v-row class="fill-height" align="center" justify="center">
                <!-- <div class="text-h2">{{ slide }} Slide</div> -->
                <v-img :src="slide"></v-img>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
    <!-- Carousel FIN -->

    <!-- Form for new day -->
    <div id="formNewDay">
      <v-row align="center" justify="center">
        <v-col>
         Nous sommes le <b>{{todayDate}}</b> et il est <b>{{timeNow}}</b>
        </v-col>
      </v-row>
    </div>
    <!-- Form for new day FIN -->
  </v-container>
</template>

<script>
import TextToSpeech from 'text-to-speech-js'
export default {
  name: "HelloWorld",

  data: () => ({
    showCarrousel: true,
    askForNewDay: true,
    todayDate: null,
    timeNow : null,
    messageTime : null,
    colors: [
      "indigo",
      "warning",
      "pink darken-2",
      "red lighten-1",
      "deep-purple accent-4",
    ],
    slides: [
      "https://www.mega-gear.net/modules/psblog/uploads/repos%20muscu.png",
      "https://www.masculin.com/wp-content/uploads/sites/2/2017/04/resultats-musculation.jpg.webp",
      "https://reussirsonbpjeps.com/wp-content/uploads/2016/09/entretien.jpg",
      "https://cache.cosmopolitan.fr/data/photo/w1000_ci/1bj/musculation-poids.jpg",
      "https://medias.toutelanutrition.com/blog/2020/07/muscu-banner.jpg",
    ],
  }),

  methods: {
    newDay() {
      TextToSpeech.talk("Hello Beautiful World!");
      this.showCarrousel = false;
      this.askForNewDay = false;
      const event = new Date(Date());
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };

      this.todayDate = event.toLocaleDateString("fr-FR", options);
      let hours = event.getHours()
      let minutes = event.getMinutes()
      this.timeNow  = `${hours}h${minutes}`
      if (hours < 8) {
        this.messageTime = "L'avenir appartient à ceux qui se lévent tôt !"
      }
      else if(hours < 10){
        this.messageTime = "Il est bon de rester au lit plus tard de temps en temps."
      }
      else if (hours < 12){
        return
      }
    },
  },
};
</script>
