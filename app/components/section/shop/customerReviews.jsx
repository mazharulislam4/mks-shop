"use client"
import Reviews from "../../reviews/reviews";
import Tabs from "../../ui/tab";

function CustomerReviews() {

  return (
    <div>
      <div className="w-full ">
        <Tabs
          items={[
            {
              key: "Additional Info",
              title: "Additional Info",
            },
            {
              key: "Questions",
              title: "Questions",
            },
            {
              key: "Reviews",
              title: "Reviews",
              component: <Reviews />,
            },
          ]}
        />
      </div>
    </div>
  );
}

export default CustomerReviews;
