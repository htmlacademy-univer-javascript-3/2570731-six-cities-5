import { Helmet } from 'react-helmet-async';
import OffersList from '../../components/offers-list/offers-list';
import { Header } from '../../components/header/header';
import Map from '../../components/map/map';
import { useRef, useState } from 'react';
import { useAppSelector } from '../../hooks/use-app-selector';
import CitiesList from './components/cities-list/cities-list';
import { City } from '../../types/city';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { SortingOption } from '../../types/sorting-option';
import sortOffersByOption from '../../utils/offer';
import Spinner from '../../components/spinner/spinner';
import { getActiveCity } from '../../store/slices/application-data/selectors';
import { getIsOffersLoading, getOffers } from '../../store/slices/offers-data/selectors';
import { setActiveCity } from '../../store/slices/application-data/application-data';
import SortingOptions from './components/sorting-options/sorting-options';

export default function MainPage(): JSX.Element {
  const [activeCardId, setActiveCardById] = useState<string | null>(null);
  const [currentSortingOption, setSortingOption] = useState<SortingOption>(SortingOption.Popular);
  const isFirstFetch = useRef(true);
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector(getActiveCity);
  const offers = useAppSelector(getOffers);
  const offersForCurrentCity = offers.filter((offer) => offer.city.name === currentCity.name);
  const sortedOffers = sortOffersByOption(offersForCurrentCity, currentSortingOption);
  const selectedOffer = offersForCurrentCity.find((offer) => offer.id === activeCardId);
  const isOffersDataLoading = useAppSelector(getIsOffersLoading);

  if(isOffersDataLoading && isFirstFetch.current) {
    isFirstFetch.current = false;
    return (
      <Spinner />
    );
  }

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList
            cities={Object.values(City)}
            selectedCity={currentCity}
            onSelectChange={(selectedCity) => dispatch(setActiveCity(selectedCity))}
          />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersForCurrentCity.length} places to stay in {currentCity.name}</b>
              <SortingOptions
                currentSortingOption={currentSortingOption}
                onSortingChange={(sortingOption) => setSortingOption(sortingOption)}
              />
              <OffersList
                className="cities__places-list places__list tabs__content"
                cardClassName="cities"
                offers={sortedOffers}
                onCardHover={setActiveCardById}
                onCardLeave={() => setActiveCardById(null)}
              />
            </section>
            <div className="cities__right-section">
              <Map
                className='cities'
                city={currentCity}
                points={offersForCurrentCity}
                selectedPoint={selectedOffer}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
