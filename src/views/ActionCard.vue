<template>
  <ion-card v-for="actionImage in actionImages" :key="actionImage.actionName">
    <div>ION-CARD_{{ actionImage.actionName }}</div>
    <ion-grid>
      <ion-row>
        <ion-col
          v-for="images in actionImage.actionImage"
          :key="images.platform"
        >
          <div>{{ images.platform }}</div>
          <ion-grid>
            <ion-row>
              <ion-col>
                <div v-for="image in images.old" :key="image.name">
                  old_{{ image.name }}
                  <img :src="image.path" />
                </div>
              </ion-col>
              <ion-col>
                <div v-for="image in images.new" :key="image.name">
                  new_{{ image.name }}
                  <img :src="image.path" />
                </div>
              </ion-col>
            </ion-row>
          </ion-grid>
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
    const actionImages = [
      {
        actionName: "action01",
        actionImage: [
          {
            platform: "chrome",
            old: [
              { path: "/images/Screenshot-001.png", name: "image1" },
              { path: "/images/Screenshot-001.png", name: "image2" },
              { path: "/images/Screenshot-001.png", name: "image3" },
              //   { path: "/images/Screenshot-001.png", name: "image4" },
            ],
            new: [
              { path: "/images/Screenshot-001.png", name: "image1" },
              { path: "/images/Screenshot-001.png", name: "image2" },
              { path: "/images/Screenshot-001.png", name: "image3" },
              { path: "/images/Screenshot-001.png", name: "image4" },
            ],
          },
          {
            platform: "IE",
            old: [
              //   { path: "/images/Screenshot-001.png", name: "image1" },
              //   { path: "/images/Screenshot-001.png", name: "image2" },
              //   { path: "/images/Screenshot-001.png", name: "image3" },
              //   { path: "/images/Screenshot-001.png", name: "image4" },
            ],
            new: [
              { path: "/images/Screenshot-001.png", name: "image1" },
              { path: "/images/Screenshot-001.png", name: "image2" },
              { path: "/images/Screenshot-001.png", name: "image3" },
              { path: "/images/Screenshot-001.png", name: "image4" },
            ],
          },
        ],
      },
      {
        actionName: "action02",
        actionImage: [
          {
            platform: "chrome",
            old: [
              { path: "/images/Screenshot-001.png", name: "image1" },
              { path: "/images/Screenshot-001.png", name: "image2" },
              { path: "/images/Screenshot-001.png", name: "image3" },
              { path: "/images/Screenshot-001.png", name: "image4" },
            ],
            new: [
              { path: "/images/Screenshot-001.png", name: "image1" },
              { path: "/images/Screenshot-001.png", name: "image2" },
              { path: "/images/Screenshot-001.png", name: "image3" },
              { path: "/images/Screenshot-001.png", name: "image4" },
            ],
          },
          {
            platform: "IE",
            old: [
              { path: "/images/Screenshot-001.png", name: "image1" },
              { path: "/images/Screenshot-001.png", name: "image2" },
              { path: "/images/Screenshot-001.png", name: "image3" },
              { path: "/images/Screenshot-001.png", name: "image4" },
            ],
            new: [
              { path: "/images/Screenshot-001.png", name: "image1" },
              { path: "/images/Screenshot-001.png", name: "image2" },
              { path: "/images/Screenshot-001.png", name: "image3" },
              { path: "/images/Screenshot-001.png", name: "image4" },
            ],
          },
        ],
      },
    ];
    return { actionImages, warning };
  },
});
</script>