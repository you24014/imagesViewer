<template>
  <ion-card>
    <ion-grid>
      <ion-row>
        <ion-col v-for="(image, key) in images" :key="key">
          <img :src="image.path" />
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-card>
</template>

<script>
import {
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonIcon,
  IonItem,
  IonLabel,
  IonCol,
  IonGrid,
  IonRow,
} from "@ionic/vue";
import { pin, walk, warning, wifi, wine } from "ionicons/icons";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    IonCard,
    IonCardContent,
    IonCardSubtitle,
    IonCardTitle,
    IonIcon,
    IonItem,
    IonLabel,
    IonCol,
    IonGrid,
    IonRow,
  },
  setup() {
    const images = [
      { path: "/images/Screenshot-001.png", name: "image1" },
      { path: "/images/Screenshot-001.png", name: "image2" },
      { path: "/images/Screenshot-001.png", name: "image3" },
      { path: "/images/Screenshot-001.png", name: "image4" },
    ];

    return { images, warning };
  },
});
</script>