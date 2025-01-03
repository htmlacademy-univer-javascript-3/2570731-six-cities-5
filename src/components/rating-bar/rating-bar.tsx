import { Rating } from '../../const'

type RatingBarProps = {
  className: string
  rating: typeof Rating[keyof typeof Rating]
}

export default function RatingBar({ className, rating } : RatingBarProps) {
  const perRatingUnitPercentage = 20;
  return (
    <div className={`${className}__rating rating`}>
      <div className={`${className}__stars rating__stars`}>
        <span style={{ width: `${rating * perRatingUnitPercentage}%` }} />
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  )
}
