import { defineStore } from "pinia";

export const useDataStore = defineStore("data", {
  state: () => ({
    displays: { 1: [[{}]] } as unknown as { number: CDUCharacter[][] },
  }),
  getters: {
    // display1: (state) => state.display1,
  },
  actions: {
    // increment() {
    //   this.count++;
    // },
  },
});

type CDUCharacter = {
  // The character to display
  S: string;

  // 1 => small font, including that used for line headers
  // 2 => character background is highlighted in reverse video
  // 4 => Dimmed character color indicating inop/unused entries
  C: number;

  // 1 => white
  // 2 => cyan
  // 4 => green
  // 8 => magenta
  // 16 => amber
  // 32 => red
  F: number;
};
