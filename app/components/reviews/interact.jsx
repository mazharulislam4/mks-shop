"use client";
import { Button, Textarea } from "@nextui-org/react";
import { useState } from "react";
function Interact() {
  const [isTextAreaOpen, setTextAreaOpen] = useState(false);

  const HandleTextAreaOpen = () => {
    setTextAreaOpen(true);
  };

  const HandleTextAreaClose = () => {
    setTextAreaOpen(false);
  };

  return (
    <div className="w-full relative">
      <div className="flex items-center text-small gap-3  ">
        <span>About an hour ago</span>
        <button
          type="button"
          className="font-gray font-medium"
          onClick={HandleTextAreaClose}
        >
          Like
        </button>
        <button
          type="button"
          className="font-gray font-medium"
          onClick={HandleTextAreaOpen}
        >
          Replay
        </button>
      </div>

      {/* review replay  */}

      <form
        className={`flex w-full  flex-col  mt-2  review-replay relative transition-[height] duration-300  ${
          isTextAreaOpen ? "h-[150px]" : "h-0 overflow-hidden"
        }`}
      >
        <Textarea required placeholder="Write your replay..." />
        <Button
          type="submit"
          radius="sm"
          aria-label="Send"
          className="self-end mt-2 bg-black text-white rounded-full"
        >
          Send
        </Button>
      </form>
    </div>
  );
}

export default Interact;
