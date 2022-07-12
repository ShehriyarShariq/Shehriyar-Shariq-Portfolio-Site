import React from "react";
import OverlappingCharacter from "./OverlappingCharacter";
import BlogPost from "./BlogPost";
import DATA from "../public/files/data.json";

const POSTS = [
  {
    id: "blog_jazz_cash_payment_gateway",
    title: "JazzCash Payment Gateway",
    tagLine: "Lorem ipsum dolor sit amet",
    description:
      "To implement third-party payment gateways which do not natively support flutter by means of platform-specific code using Platform Channels in Flutter.",
    image: "/images/posts/jazz_cash_payment_gateway.webp",
    link: "https://medium.com/flutter-by-wajahat-shehriyar/flutter-payment-gateway-integration-jazzcash-redirect-api-using-platform-channels-d56f3cbb9a21",
  },
];

function BlogPosts() {
  return (
    <div className="w-full h-full px-[8%] md:px-[10%] mt-0 md:mt-24">
      <div className="text-3xl sm:text-5xl text-center sm:text-left mb-6 sm:mb-10">
        <span className="text-primary whitespace-nowrap">
          <OverlappingCharacter
            char="B"
            textSize=" text-3xl sm:text-5xl " //" text-5xl sm:text-6xl md:text-5xl lg:text-7xl xl:text-[5rem] "
          />
          log
        </span>
        <span className="text-primary whitespace-nowrap ml-3 sm:ml-4">
          <OverlappingCharacter
            char="P"
            textSize=" text-3xl sm:text-5xl " //" text-5xl sm:text-6xl md:text-5xl lg:text-7xl xl:text-[5rem] "
          />
          osts
        </span>
      </div>
      <div className="flex flex-col gap-6 md:gap-14 lg:gap-20">
        {DATA["blog_posts"].map((post) => (
          <BlogPost key={post["id"]} post={post} />
        ))}
      </div>
      <div
        className="w-fit text-white text-base md:text-lg bg-secondary mx-auto mt-6 sm:mt-8 px-5 py-2 rounded-lg border-2 border-secondary flex items-center justify-center gap-4 hover:cursor-pointer"
        // onClick={() => {
        //   window.open(post["link"]);
        // }}
      >
        View more blogs
      </div>
    </div>
  );
}

export default BlogPosts;
