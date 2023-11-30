import { useState } from "react";
import Button from "../../UI/Button";
import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";

function Comment() {
  return (
    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-6 mb-6 border-gray-200 sm:flex-row flex-col">
      <div className="sm:w-16 sm:h-16 h-12 w-14 sm:mr-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="sm:w-16 sm:h-16 w-10 h-10"
          viewBox="0 0 24 24"
        >
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      </div>
      <div className="flex-grow sm:text-left text-center mt-2 sm:mt-0">
        <h2 className="text-gray-900 text-base title-font font-medium mb-1">
          Shooting Stars
        </h2>
        <p className="leading-relaxed text-xs">
          Blue bottle crucifix vinyl post-ironic four dollar toast vegan
          taxidermy. Gastropub indxgo juice poutine.
        </p>
        <div className="flex justify-left">
          <Button
            onClick={changeLike}
            className="mt-1 text-indigo-500 inline-flex items-center text-xs"
          >
            {isLiked ? <AiFillLike /> : <AiOutlineLike />}
          </Button>
          <Button className="mt-1 text-indigo-500 inline-flex items-center text-xs">
            Reply
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-3 h-3 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Comment;
