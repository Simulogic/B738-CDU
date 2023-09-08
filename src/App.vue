<template>
  <div v-if="screentype == 'main'">
    <router-view />
  </div>

  <div v-if="screentype == 'cdu1_screen'" style="-webkit-app-region: drag">
    <cdu :screen-location="1"></cdu>
  </div>
  <div v-if="screentype == 'cdu2_screen'" style="-webkit-app-region: drag">
    <cdu :screen-location="2"></cdu>
  </div>
  <div v-if="screentype == 'cdu3_screen'" style="-webkit-app-region: drag">
    <cdu :screen-location="3"></cdu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useGlobalStore } from "@/store/index";

import cdu from "./views/CDU.vue";
import { storeToRefs } from "pinia";

export default defineComponent({
  name: "HomeView",
  components: {
    cdu,
  },
  data: function () {
    return {
      store: useGlobalStore(),
      screenType: "",
    };
  },
});
</script>

<script setup lang="ts">
const store = useGlobalStore();

const { screentype } = storeToRefs(store);

// Extracts the screen type from the arguments
// eslint-disable-next-line
process.argv.forEach((argv, i) => {
  if (/(--screentype=)\w+/g.test(argv)) {
    const val = argv.split("=")[1];
    store.$state.screentype = val;
  }
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
