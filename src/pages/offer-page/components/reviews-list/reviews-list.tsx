import { memo, useEffect, useRef } from 'react';
import { MAX_REVIEWS_LOADED } from '../../../../const';
import { useAppSelector } from '../../../../hooks/use-app-selector';
import { getIsReviewsLoading, getReviews } from '../../../../store/slices/reviews-data/selectors';
import ReviewItem from './review-item';
import { useAppDispatch } from '../../../../hooks/use-app-dispatch';
import { fetchReviewsAction } from '../../../../store/api-actions/offer-api-actions';
import Spinner from '../../../../components/spinner/spinner';

type ReviewListProps = {
  offerId: string;
}

function ReviewsListComponent({ offerId }: ReviewListProps): JSX.Element {
  const dispatch = useAppDispatch();
  const didMount = useRef(false);
  const reviews = useAppSelector(getReviews);
  const isReviewsLoading = useAppSelector(getIsReviewsLoading);

  useEffect(() => {
    if (!didMount.current) {
      dispatch(fetchReviewsAction(offerId));
      didMount.current = true;
    }
  });

  const filteredReviews = reviews
    .toSorted((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()))
    .slice(0, MAX_REVIEWS_LOADED);


  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      {
        isReviewsLoading ? <Spinner /> :
          <ul className="reviews__list">
            {
              filteredReviews.map((review) => (
                <ReviewItem review={review} key={review.id} />
              ))
            }
          </ul>
      }
    </>
  );
}

export const ReviewsList = memo(ReviewsListComponent);
