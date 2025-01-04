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

const APIRoute = {
  Offers: '/offers',
  Login: '/login',
  Logout: 'logout'
};

export { AppRoute, AuthorizationStatus, CommentFormSettings, MapSettings, APIRoute };
