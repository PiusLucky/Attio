import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface IProps {
  imageUrl: string;
  reviewerName: string;
  reviewerTag: string;
  review: string;
  timestamp: string;
}

function TweetCard({
  imageUrl,
  review,
  reviewerName,
  reviewerTag,
  timestamp,
}: IProps) {
  return (
    <div className="border border-[#4B4F58] justify-between relative m-2 px-6 flex flex-col  py-[44px] rounded-[24px]">
      <div className="flex justify-between gap-4">
        <div className="flex items-center gap-3">
          <Avatar className="w-[34px] h-[34px]">
            <AvatarImage src={imageUrl} alt="@user avatar" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div className="">
            <p className="text-[#9098A0]">{reviewerName}</p>
            <p className="text-[#555E67]">{reviewerTag}</p>
          </div>
        </div>
        <div>
          <img src="/images/x.svg" alt="twitter icon" />
        </div>
      </div>
      <p className="text-white my-[24px]">{review}</p>
      <p className="text-[#555E67]">{timestamp}</p>

      <div className="bg-transparent absolute top-0 left-0 right-0 bottom-0 border border-[#4B4F58] rounded-[24px] m-2"></div>
    </div>
  );
}

export default TweetCard;
