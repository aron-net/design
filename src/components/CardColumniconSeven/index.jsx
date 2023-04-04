import React from "react";

import { Img } from "components";

const CardColumniconSeven = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-[103px] relative w-[103px]">
          <Img
            src="images/img_icon_103x103.png"
            className="h-[103px] m-auto object-cover w-[103px]"
            alt="icon_Seven"
          />
          <Img
            src="images/img_icon_103x103.png"
            className="absolute h-[103px] inset-[0] justify-center m-auto object-cover w-[103px]"
            alt="iconmask_Seven"
          />
        </div>
      </div>
    </>
  );
};

CardColumniconSeven.defaultProps = {};

export default CardColumniconSeven;
