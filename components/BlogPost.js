import React from "react";

function BlogPost({ post }) {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between items-center md:bg-transparent_gray md:bg-opacity-20 md:backdrop-blur-md md:pr-5 relative">
      <div className="h-full w-full md:w-[55%] px-[7%] md:px-0 pt-8 pb-6 flex flex-col justify-center relative z-10 bg-transparent_gray md:bg-transparent md:backdrop-blur-none">
        <div className="text-secondary text-lg md:text-4xl mb-1 md:mb-2 md:pl-10">
          {post["title"]}
        </div>
        <div className="w-full mb-3 md:mb-4 md:px-10 md:py-8 text-sm md:text-lg text-justify text-white">
          {post["description"]}
        </div>
        <div
          className="w-fit text-white md:text-secondary text-sm md:text-lg bg-secondary md:bg-transparent md:ml-10 px-5 py-2 rounded-lg border-2 border-secondary flex items-center justify-center gap-4 group hover:bg-secondary hover:text-white hover:cursor-pointer"
          onClick={() => {
            window.open(post["link"]);
          }}
        >
          <span>Read More</span>
          <img
            src="/images/icons/share.svg"
            className="w-5 hidden md:block group-hover:invert-[100%] group-hover:brightness-[0%] group-hover:sepia-[100%] group-hover:saturate-[2%] group-hover:hue-rotate-[189deg] group-hover:brightness-[102%] group-hover:contrast-[101%]"
          />
        </div>
      </div>
      <div className="w-full h-full md:w-[36%] md:h-0 md:pb-[36%] flex flex-col justify-between items-center lg:self-start absolute top-0 md:relative z-0 lg:mb-5">
        <img
          src={post["image"]}
          className="h-full w-full object-cover md:absolute top-0"
        />
        <div className="h-full w-full absolute top-0 bg-gray_alt md:bg-transparent_gray bg-opacity-20 z-10"></div>
      </div>
    </div>
  );
}

export default BlogPost;
