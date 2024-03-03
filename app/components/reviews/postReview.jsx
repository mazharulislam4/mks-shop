import { Button, Textarea } from "@nextui-org/react";
import { useState } from "react";
import Modal from "../ui/modal";

function PostReview() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalHandler = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="flex items-center justify-between  py-5 border border-primary rounded-md px-3 ">
        <span aria-label="label">Share your thoughts</span>
        <Button
          type="button"
          onClick={modalHandler}
          className="bg-black text-white px-8 rounded-full "
          aria-label="write button"
        >
          Write a review
        </Button>
      </div>
      <Modal onClose={modalHandler} isOpen={isModalOpen} size={"sm"}>
        <form className="relative ">
          <Textarea
            isRequired
            label="Description"
            placeholder="Write your thoughts..."
          />

          <Button type="submit" size="md" radius="sm" className="mt-6 w-full">
            Post
          </Button>
        </form>
      </Modal>
    </>
  );
}

export default PostReview;
