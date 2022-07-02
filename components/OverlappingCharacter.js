import React from "react";

function OverlappingCharacter(props) {
  return (
    <div className="relative inline-block">
      <div
        className={
          "absolute top-0 z-0 text-secondary -translate-x-[8%] translate-y-[1.5%]" +
          props.textSize
        }
      >
        {props.char}
      </div>
      <div className={"relative text-primary z-10" + props.textSize}>
        {props.char}
      </div>
    </div>
  );
}

export default OverlappingCharacter;
