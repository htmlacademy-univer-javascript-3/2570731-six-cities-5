import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { City } from '../../../types/city';
import { ApplicationData } from '../../../types/state';
import { NameSpace } from '../../../const';

const initialState: ApplicationData = {
  activeCity: City.Paris
};

export const applicationData = createSlice({
  name: NameSpace.Application,
  initialState,
  reducers: {
    setActiveCity: (state, action: PayloadAction<City>) => {
      state.activeCity = action.payload;
    }
  }
});

export const {setActiveCity} = applicationData.actions;
