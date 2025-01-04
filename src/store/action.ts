import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { Offer } from '../types/offer';

const setCity = createAction<City>('data/setCity');

const loadOffers = createAction<Offer[]>('data/loadOffers');

const setOffersDataLoadingStatus = createAction<boolean>('data/setQuestionsDataLoadingStatus');

export {setCity, loadOffers, setOffersDataLoadingStatus};
