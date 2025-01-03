import { Review } from '../../types/review'
import RatingBar from '../rating-bar/rating-bar'

type ReviewProps = {
  review: Review
}


export default function ReviewItem({ review }: ReviewProps): JSX.Element {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.avatarSrc} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {review.username}
        </span>
      </div>
      <div className="reviews__info">
        <RatingBar className='reviews' rating={review.rating} />
        <p className="reviews__text">
          {review.text}
        </p>
        <time className="reviews__time" dateTime={review.reviewDate.toDateString()}>{getReviewDateString(review.reviewDate)}</time>
      </div>
    </li>
  )
}
