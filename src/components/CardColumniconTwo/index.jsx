import React from "react";

import { Img } from "components";

const CardColumniconTwo = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-[104px] relative w-full">
          <Img
            src="images/img_icon_104x73.png"
            className="h-[104px] m-auto object-cover w-full"
            alt="icon_Two"
          />
          <Img
            src="images/img_icon_104x73.png"
            className="absolute h-[104px] inset-[0] justify-center m-auto object-cover w-full"
            alt="iconmask_Two"
          />
        </div>
      </div>
    </>
  );
};

CardColumniconTwo.defaultProps = {};

export default CardColumniconTwo;
