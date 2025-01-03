import { Rating } from '../const';

type Review = {
  avatarSrc: string,
  username: string,
  rating: typeof Rating[keyof typeof Rating],
  text: string,
  reviewDate: Date,
}

export type { Review };
