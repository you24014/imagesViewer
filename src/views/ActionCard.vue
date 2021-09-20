<template>
  <ion-card v-for="(actionImages, dirName) in dirImages" :key="dirName">
    <div>ION-CARD</div>
    <ion-grid>
      <ion-row>
        <ion-col
          v-for="(actionImages, platform) in actionImages"
          :key="platform"
        >
          <ion-grid>
            <ion-row>
              <ion-col>
                <div v-for="(image, name) in actionImages.old" :key="name">
                  old_{{ name }}
                </div>
                <!-- <img :src="image.path" /> -->
              </ion-col>
              <ion-col>
                <div v-for="(image, name) in actionImages.old" :key="name">
                  new_{{ name }}
                </div>
                <!-- <img :src="image.path" /> -->
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-card>
  <ion-card>
    <ion-grid>
      <ion-row class="ion-align-items-start">
        <ion-col>
          <div>1 of 4</div>
        </ion-col>
        <ion-col>
          <div>2 of 4</div>
        </ion-col>
        <ion-col>
          <div>3 of 4</div>
        </ion-col>
        <ion-col>
          <div>
            4 of 4 <br />
            # <br />
            # <br />
            #
          </div>
        </ion-col>
      </ion-row>

      <ion-row class="ion-align-items-center">
        <ion-col>
          <div>1 of 4</div>
        </ion-col>
        <ion-col>
          <div>2 of 4</div>
        </ion-col>
        <ion-col>
          <div>3 of 4</div>
        </ion-col>
        <ion-col>
          <div>
            4 of 4 <br />
            # <br />
            # <br />
            #
          </div>
        </ion-col>
      </ion-row>

      <ion-row class="ion-align-items-end">
        <ion-col>
          <div>1 of 4</div>
        </ion-col>
        <ion-col>
          <div>2 of 4</div>
        </ion-col>
        <ion-col>
          <div>3 of 4</div>
        </ion-col>
        <ion-col>
          <div>
            4 of 4 <br />
            # <br />
            # <br />
            #
          </div>
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-card>
  <ion-card>
    <ion-grid>
      <ion-row>
        <ion-col class="ion-align-self-start">
          <div>1 of 4</div>
        </ion-col>
        <ion-col class="ion-align-self-center">
          <div>2 of 4</div>
        </ion-col>
        <ion-col class="ion-align-self-end">
          <div>3 of 4</div>
        </ion-col>
        <ion-col>
          <div>
            4 of 4 <br />
            # <br />
            # <br />
            #
          </div>
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
    const dirImages = {
      dirName: "dir01",
      dirImage: [
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
    };
    return { dirImages, warning };
  },
});
</script>