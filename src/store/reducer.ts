import { createReducer } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { Offer } from '../types/offer';
import { setCity, loadOffers, setOffersDataLoadingStatus } from './action';

const initialState = {
  city: City.Paris,
  offers: [] as Offer[],
  isOffersDataLoading: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setCity, (state, action) => {
    state.city = action.payload;
  });
  builder.addCase(loadOffers, (state, action) => {
    state.offers = action.payload;
  });
  builder.addCase(setOffersDataLoadingStatus, (state, action) => {
    state.isOffersDataLoading = action.payload;
  });
});
