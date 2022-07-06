import React from "react";

function ScrollToTopBtn() {
  return (
    <div className="hidden md:block w-20 h-20 fixed bottom-6 right-6 z-20 group">
      <div
        className="w-full h-full flex items-center justify-center rounded-full border-solid border-2 border-secondary relative z-10 group-hover:border-primary group-hover:cursor-pointer"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        <img
          src="/images/icons/up_arrow_alt.png"
          className="w-1/2 h-1/2 group-hover:hidden"
        />
        <img
          src="/images/icons/up_arrow.png"
          className="w-1/2 h-1/2 hidden group-hover:block"
        />
      </div>
    </div>
  );
}

export default ScrollToTopBtn;
