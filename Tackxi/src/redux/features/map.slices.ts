import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Location} from '../../interface/map.interface';

type MapSliceState = {
  currentLocation?: Location;
};

const initialState: MapSliceState = {
  currentLocation: undefined,
};

export const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    setCurrentLocation: (state, action: PayloadAction<Location>) => {
      state.currentLocation = action.payload;
    },
  },
});

export const {setCurrentLocation} = mapSlice.actions;
export default mapSlice.reducer;
