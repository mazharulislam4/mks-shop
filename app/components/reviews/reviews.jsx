import ReviewStarts from "../widgets/reviewStarts";
import PostReview from "./postReview";
import ReviewList from "./reviewList";

function Reviews() {
  return (
    <div className="pl-[12px]">
      <div>
        <h3 className="mb-3">Customer Reviews</h3>
        <ReviewStarts classNames={{ fontSize: "text-small" }} />
      </div>

      <div className="mt-6">
        <PostReview />
      </div>

      <div>
        <ReviewList />
      </div>
    </div>
  );
}

export default Reviews;
