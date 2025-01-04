import { createReducer } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { Offer } from '../types/offer';
import { setCity, loadOffers, setOffersDataLoadingStatus, requireAuthorization, setUserData } from './action';
import { AuthorizationStatus } from '../const';
import { UserData } from '../types/user-data';

const initialState: {
  city: City;
  offers: Offer[];
  userData: UserData | null;
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
} = {
  city: City.Paris,
  offers: [] as Offer[],
  userData: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setCity, (state, action) => {
    state.city = action.payload;
  });
  builder.addCase(loadOffers, (state, action) => {
    state.offers = action.payload;
  });
  builder.addCase(setUserData, (state, action) => {
    state.userData = action.payload;
  });
  builder.addCase(requireAuthorization, (state, action) => {
    state.authorizationStatus = action.payload;
  });
  builder.addCase(setOffersDataLoadingStatus, (state, action) => {
    state.isOffersDataLoading = action.payload;
  });
});
