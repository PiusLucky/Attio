import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface IProps {
  avatarUrl: string;
  review: string;
  name: string;
  position: string;
}

function ReviewCard({ avatarUrl, review, name, position }: IProps) {
  return (
    <div className="flex flex-col items-center">
      <Avatar className="w-11 h-11">
        <AvatarImage src={avatarUrl} alt="@user avatar" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex justify-center">
        <p className="my-[24px] text-[22px] text-[#31373D] text-center max-w-[600px]">
          {review}
        </p>
      </div>

      <div className="flex flex-col gap-4 items-center">
        <p className="text-[#31373D]">{name}</p>
        <p className="text-[#555E67]">{position}</p>
      </div>
    </div>
  );
}

export default ReviewCard;
