<template>
  <div
    class="cdu-screen-wrapper h-screen w-screen bg-black m-auto absolute text-clip content-around font-sans"
    :class="`text-gray-50`"
  >
    <div
      v-for="row in 14"
      :key="row"
      class="flex flex-row flex-1 content-around"
    >
      <div v-for="col in 24" :key="col" class="flex-col flex-1 content-around">
        <div>
          {{ charToRender(row, col)["S"] }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { storeToRefs } from "pinia";
import { defineProps } from "vue";
import { useDataStore } from "@/store/cdudata/cdudata";
import init from "@/util/cduDataParser";

export default {
  setup: function () {
    init();

    const store = useDataStore();
    const { displays } = storeToRefs(store);

    window.addEventListener("resize", (e) => {
      // console.log("bounds:", remote.getCurrentWindow().getBounds());
    });

    return {
      store,
      displays,
    };
  },

  data: function () {
    return {
      rows: 5,
      colums: 5,
      brightness: 1, // value from 0 to 1
    };
  },
  props: {
    screenLocation: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    charToRender: function (j, i) {
      const store = useDataStore();
      var char = store.displays[1][i - 1][j - 1];
      if (char == undefined) return;
      else {
        console.log(char["S"]);

        // replace characters
        if (char["S"] == "*") char["S"] = "▯";

        return char;
      }
    },
  },
  computed: {
    displayData: function () {
      const _store = useDataStore();
      console.log(_store.displays);
      return _store.displays;
    },
  },
};
</script>

<style lang="scss" scoped>
.cdu-screen-wrapper {
  -webkit-app-region: drag;

  @if calc(1vh / 1vw) > 2 {
    font-size: 4vh;
  } @else {
    font-size: 4vw;
  }
}
</style>
