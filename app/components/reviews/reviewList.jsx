import { Avatar, Card, CardBody } from "@nextui-org/react";
import ReviewStars from "../widgets/reviewStarts";
import Interact from "./interact";

const ReviewCard = () => {
  return (
    <Card shadow="none"  className="overflow-visible " >
      <CardBody className="!overflow-y-visible">
        <div className="flex md:flex-row flex-col gap-4">
          <div>
            <Avatar name="Junior" />
          </div>

          <div className="flex flex-col gap-3">
            <h4>Sofia Harvetz</h4>
            <ReviewStars
              isLabel={false}
              classNames={{ fontSize: "text-small" }}
            />
            <p>
              I bought it 3 weeks ago and now come back just to say “Awesome
              Product”. I really enjoy it. At vero eos et accusamus et iusto
              odio dignissimos ducimus qui blanditiis praesentium voluptatum
              deleniti atque corrupt et quas molestias excepturi sint non
              provident.
            </p>
            <div>
              <Interact />
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default function ReviewList() {
  return (
    <ul className="relative">
      <li>
        <ReviewCard />
      </li>
    </ul>
  );
}
