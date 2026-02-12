import React from "react";
import JoinProject from "@/components/JoinProject";
import Image from "next/image";

export default function page() {
  return (
    <>
      <div className="relative py-32 md:pt-44">
        <div className="mask-radial-from-45% mask-radial-to-75% mask-radial-at-top mask-radial-[75%_100%] mask-t-from-50% lg:aspect-9/4 absolute inset-0 aspect-square lg:top-24 dark:opacity-10">
          <Image
            src="/hero-img.avif"
            alt="hero background"
            width={2268}
            height={1740}
            className="size-full object-cover object-top"
          />
        </div>
        <JoinProject />
      </div>
    </>
  );
}
