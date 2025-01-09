export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:offerId',
  OfferBase = '/offer',
  NotFound = '/not-found'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export const CommentFormSettings = {
  CommentMinLength: 50,
  CommentMaxLength: 300
};

export const MAX_REVIEWS_LOADED = 10;

export const MAX_OFFERS_NEARBY_LOADED = 3;

export const MapSettings = {
  UrlMarkerDefault: '/img/pin.svg',
  UrlMarkerCurrent: '/img/pin-active.svg'
};

export const APIRoute = {
  Offers: '/offers',
  Comments: '/comments',
  Favorites: '/favorite',
  Login: '/login',
  Logout: '/logout'
};

export enum NameSpace {
  Application = 'Application',
  User = 'User',
  Offers = 'Offers',
  Favorites = 'Favorites',
  OfferDetails = 'OfferDetails',
  Reviews = 'Reviews',
  NearbyOffers = 'NearbyOffers'
}
