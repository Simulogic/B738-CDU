import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import sampleData from '../defaultData/cduDefault';

export type CDUCharacter = {
  S: string;
  C: number;
  F: number;
};

export type CDUDisplayData = Array<Array<CDUCharacter>>;

export type CDUDisplayDataSet = Record<string, CDUDisplayData>;

const initialState: CDUDisplayDataSet = sampleData;

export const cduDataSlice = createSlice({
  name: 'cduData',
  initialState,
  reducers: {
    updateScreens: (state, action: PayloadAction<CDUDisplayDataSet>) => {
      // Loop over all the keys. That way we can set the data for each individual key
      let keys = Object.keys(action.payload);

      keys.forEach((key) => {
        const data = action.payload[key];
        state[key] = data;
      });
    },

    parseScreenData: (state, action: PayloadAction<any>) => {
      // Loop over all the keys. That way we can set the data for each individual key
      // let data = JSON.parse(action.payload) as CDUDisplayDataSet;
      let data = action.payload as CDUDisplayDataSet;

      let keys = Object.keys(data);

      console.log(data, keys);

      keys.forEach((key) => {
        const dataSet = data[key];
        state[key] = dataSet;
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateScreens, parseScreenData } = cduDataSlice.actions;

export default cduDataSlice.reducer;
