import { defineStore } from "pinia";

export const useGlobalStore = defineStore("global", {
  state: () => ({ screentype: "default" }),
  getters: {
    screenType: (state) => state.screentype,
  },
  actions: {
    // increment() {
    //   this.count++;
    // },
  },
});
