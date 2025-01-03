enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  OfferBase = '/offer'
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

const CommentFormSettings = {
  CommentMinLength: 50
};

const MapSettings = {
  UrlMarkerDefault: '/public/img/pin.svg',
  UrlMarkerCurrent: '/public/img/pin-active.svg'
};

const Rating = {
  'Terriby': 1,
  'Badly': 2,
  'NotBad': 3,
  'Good': 4,
  'Perfect': 5,
} as const;

export { AppRoute, AuthorizationStatus, CommentFormSettings, MapSettings, Rating };
