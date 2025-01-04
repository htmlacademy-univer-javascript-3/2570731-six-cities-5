import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { Offer } from '../types/offer';
import { AppRoute, AuthorizationStatus } from '../const';
import { UserData } from '../types/user-data';

export const setCity = createAction<City>('data/setCity');

export const loadOffers = createAction<Offer[]>('data/loadOffers');

export const setUserData = createAction<UserData | null>('data/setUserData');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setQuestionsDataLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');
