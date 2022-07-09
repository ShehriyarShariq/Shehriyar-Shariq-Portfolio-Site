import React from "react";

function Footer() {
  return (
    <div className="w-full mt-8">
      <div className="w-full h-[100px] sm:h-[120px] bg-black flex flex-col items-center justify-evenly">
        <div className="h-[30px] sm:h-[35px] flex flex-row gap-4">
          <img src="/images/icons/github_white.svg" />
          <img src="/images/icons/linkedin_white.svg" />
        </div>
        <p className="text-light_gray text-base sm:text-lg">
          shehriyarshariq@gmail.com
        </p>
      </div>
    </div>
  );
}

export default Footer;
