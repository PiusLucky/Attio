import Link from "next/link";
import React from "react";

function AlertSection() {
  return (
    <div className="bg-primary  flex justify-center p-[12px] rounded-[12px]">
      <div className="flex gap-3 text-white font-semibold">
        <p>We&apos;ve raised a $23.5m Series A led by Redpoint Ventures! </p>
        <Link href="/" className="underline underline-offset-4">
          Read more
        </Link>
      </div>
    </div>
  );
}

export default AlertSection;
