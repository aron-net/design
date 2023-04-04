import React from "react";

import { Img } from "components";

const CardColumnicon = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-[118px] relative w-full">
          <Img
            src="images/img_icon.png"
            className="h-[118px] m-auto object-cover w-full"
            alt="icon"
          />
          <Img
            src="images/img_icon.png"
            className="absolute h-[118px] inset-[0] justify-center m-auto object-cover w-full"
            alt="iconmask"
          />
        </div>
      </div>
    </>
  );
};

CardColumnicon.defaultProps = {};

export default CardColumnicon;
