<template>
  <IonApp>
    <ion-menu side="start" menu-id="first" type="overlay" content-id="main">
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Start Menu</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-menu-toggle auto-hide="false" v-for="(p, i) in appPages" :key="i">
          <ion-item
            @click="selectedIndex = i"
            router-direction="root"
            :router-link="p.url"
            lines="none"
            detail="false"
            class="hydrated"
            :class="{ selected: selectedIndex === i }"
          >
            <ion-icon slot="start" :ios="p.iosIcon" :md="p.mdIcon"></ion-icon>
            <ion-label>{{ p.title }}</ion-label>
          </ion-item>
        </ion-menu-toggle>
        <ion-chip>
          <ion-label>Default</ion-label>
        </ion-chip>

        <ion-chip>
          <ion-label color="secondary">Secondary Label</ion-label>
        </ion-chip>

        <ion-chip color="secondary">
          <ion-label color="dark">Secondary w/ Dark label</ion-label>
        </ion-chip>

        <ion-chip :disabled="true">
          <ion-label>Disabled Chip</ion-label>
        </ion-chip>

        <ion-chip>
          <ion-icon :icon="pin"></ion-icon>
          <ion-label>Default</ion-label>
        </ion-chip>

        <ion-chip>
          <ion-icon :icon="heart" color="dark"></ion-icon>
          <ion-label>Default</ion-label>
        </ion-chip>

        <ion-chip>
          <ion-label>Button Chip</ion-label>
          <ion-icon :icon="closeCircle"></ion-icon>
        </ion-chip>

        <ion-chip>
          <ion-icon :icon="pin" color="primary"></ion-icon>
          <ion-label>Icon Chip</ion-label>
          <ion-icon :icon="close"></ion-icon>
        </ion-chip>

        <ion-chip>
          <ion-avatar>
            <img
              src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
            />
          </ion-avatar>
          <ion-label>Avatar Chip</ion-label>
          <ion-icon :icon="closeCircle"></ion-icon>
        </ion-chip>
      </ion-content>
    </ion-menu>

    <!-- <ion-router-outlet id="main"></ion-router-outlet> -->
    <!-- <ion-menu content-id="main-content" type="overlay">
        <ion-content>
          <ion-menu-toggle
            auto-hide="false"
            v-for="(p, i) in appPages"
            :key="i"
          >
            <ion-item
              @click="selectedIndex = i"
              router-direction="root"
              :router-link="p.url"
              lines="none"
              detail="false"
              class="hydrated"
              :class="{ selected: selectedIndex === i }"
            >
              <ion-icon slot="start" :ios="p.iosIcon" :md="p.mdIcon"></ion-icon>
              <ion-label>{{ p.title }}</ion-label>
            </ion-item>
          </ion-menu-toggle>
        </ion-content>
      </ion-menu> -->
    <ion-router-outlet id="main"></ion-router-outlet>
  </IonApp>
</template>

<script lang="ts">
import {
  IonApp,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonRouterOutlet,
  IonSplitPane,
  menuController,
  IonAvatar,
  IonChip,
} from "@ionic/vue";
import { defineComponent, ref } from "vue";
import { useRoute } from "vue-router";
import {
  archiveOutline,
  archiveSharp,
  bookmarkOutline,
  bookmarkSharp,
  heartOutline,
  heartSharp,
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp,
  trashOutline,
  trashSharp,
  warningOutline,
  warningSharp,
  close,
  closeCircle,
  heart,
  pin,
} from "ionicons/icons";

export default defineComponent({
  name: "App",
  components: {
    IonApp,
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenu,
    IonMenuToggle,
    IonNote,
    IonRouterOutlet,
    IonSplitPane,
    IonAvatar,
    IonChip,
  },
  setup() {
    const info = null;
    const selectedIndex = ref(0);
    const appPages = [
      {
        title: "Inbox",
        url: "/folder/Inbox",
        iosIcon: mailOutline,
        mdIcon: mailSharp,
      },
      {
        title: "ABC",
        url: "/folder/ABC",
        iosIcon: paperPlaneOutline,
        mdIcon: paperPlaneSharp,
      },
      {
        title: "Favorites",
        url: "/folder/Favorites",
        iosIcon: heartOutline,
        mdIcon: heartSharp,
      },
      {
        title: "Archived",
        url: "/folder/Archived",
        iosIcon: archiveOutline,
        mdIcon: archiveSharp,
      },
      {
        title: "Trash",
        url: "/folder/Trash",
        iosIcon: trashOutline,
        mdIcon: trashSharp,
      },
      {
        title: "Spam",
        url: "/folder/Spam",
        iosIcon: warningOutline,
        mdIcon: warningSharp,
      },
    ];
    const labels = [
      "Family",
      "Friends",
      "Notes",
      "Work",
      "Travel",
      "Reminders",
    ];

    const path = window.location.pathname.split("folder/")[1];
    if (path !== undefined) {
      selectedIndex.value = appPages.findIndex(
        (page) => page.title.toLowerCase() === path.toLowerCase()
      );
    }

    const route = useRoute();

    return {
      selectedIndex,
      appPages,
      labels,
      archiveOutline,
      archiveSharp,
      bookmarkOutline,
      bookmarkSharp,
      heartOutline,
      heartSharp,
      mailOutline,
      mailSharp,
      paperPlaneOutline,
      paperPlaneSharp,
      trashOutline,
      trashSharp,
      warningOutline,
      warningSharp,
      close,
      closeCircle,
      heart,
      pin,
      info,
      isSelected: (url: string) => (url === route.path ? "selected" : ""),
    };
  },
  mounted() {
    // const axios = require("axios");
    this.axios
      .get("http://localhost:3000/getImageDirs")
      .then((response: any) => {
        console.log(response);
        this.info = response;
      });
  },
  methods: {},
});
</script>

<style scoped>
ion-menu ion-content {
  --background: var(--ion-item-background, var(--ion-background-color, #fff));
}

ion-menu.md ion-content {
  --padding-start: 8px;
  --padding-end: 8px;
  --padding-top: 20px;
  --padding-bottom: 20px;
}

ion-menu.md ion-list {
  padding: 20px 0;
}

ion-menu.md ion-note {
  margin-bottom: 30px;
}

ion-menu.md ion-list-header,
ion-menu.md ion-note {
  padding-left: 10px;
}

ion-menu.md ion-list#inbox-list {
  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);
}

ion-menu.md ion-list#inbox-list ion-list-header {
  font-size: 22px;
  font-weight: 600;

  min-height: 20px;
}

ion-menu.md ion-list#labels-list ion-list-header {
  font-size: 16px;

  margin-bottom: 18px;

  color: #757575;

  min-height: 26px;
}

ion-menu.md ion-item {
  --padding-start: 10px;
  --padding-end: 10px;
  border-radius: 4px;
}

ion-menu.md ion-item.selected {
  --background: rgba(var(--ion-color-primary-rgb), 0.14);
}

ion-menu.md ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.md ion-item ion-icon {
  color: #616e7e;
}

ion-menu.md ion-item ion-label {
  font-weight: 500;
}

ion-menu.ios ion-content {
  --padding-bottom: 20px;
}

ion-menu.ios ion-list {
  padding: 20px 0 0 0;
}

ion-menu.ios ion-note {
  line-height: 24px;
  margin-bottom: 20px;
}

ion-menu.ios ion-item {
  --padding-start: 16px;
  --padding-end: 16px;
  --min-height: 50px;
}

ion-menu.ios ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.ios ion-item ion-icon {
  font-size: 24px;
  color: #73849a;
}

ion-menu.ios ion-list#labels-list ion-list-header {
  margin-bottom: 8px;
}

ion-menu.ios ion-list-header,
ion-menu.ios ion-note {
  padding-left: 16px;
  padding-right: 16px;
}

ion-menu.ios ion-note {
  margin-bottom: 8px;
}

ion-note {
  display: inline-block;
  font-size: 16px;

  color: var(--ion-color-medium-shade);
}

ion-item.selected {
  --color: var(--ion-color-primary);
}
</style>