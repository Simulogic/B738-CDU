import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type ISFDData = {
  heading: number;
  pitch: number;
  bankangle: number;
  IAS: number;
  pressurealt: number;
  NAV1LocDeflection: number;
  NAV1GSDeflection: number;
  KohlsmanSettingMB: number;
};

/**
 * We put the information under 'data' to allow the state to be updated without override all the integrated properties of the state variable
 */
export type ISFDDataSet = {
  data: ISFDData;
};

const initialState: ISFDDataSet = {
  data: {
    heading: 0,
    pitch: 0,
    bankangle: 0,
    IAS: 10,
    pressurealt: 0,
    NAV1LocDeflection: 0,
    NAV1GSDeflection: 0,
    KohlsmanSettingMB: 1013,
  },
};

export const ISFDDataSlice = createSlice({
  name: 'ISFDData',
  initialState,
  reducers: {
    /**
     * Internal function to set any property from inside the application
     * @param state Automatically passed through
     * @param action The payload with {ISFDData} should be passed through
     */
    updateISFDScreens: (state, action: PayloadAction<ISFDData>) => {
      // Loop over all the keys. That way we can set the data for each individual key
      state.data = action.payload;
    },

    /** Function that interprets the external data */
    parseISFDScreenData: (state, action: PayloadAction<any>) => {
      //   console.log(JSON.stringify(initialState));
      // Loop over all the keys. That way we can set the data for each individual key
      // let data = JSON.parse(action.payload) as CDUDisplayDataSet;

      let data = action.payload as ISFDData;
      console.log(state);

      state.data = data;

      //   let keys = Object.keys(data);

      //   console.log(data, keys);

      //   keys.forEach((key) => {
      //     const dataSet = data[key];
      //     state[key] = dataSet;
      //   });

      console.log(state);
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateISFDScreens, parseISFDScreenData } = ISFDDataSlice.actions;

export default ISFDDataSlice.reducer;
