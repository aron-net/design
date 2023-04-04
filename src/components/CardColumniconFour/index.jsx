import React from "react";

import { Img } from "components";

const CardColumniconFour = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-36 relative w-36">
          <Img
            src={props?.iconFour}
            className="absolute h-36 inset-[0] justify-center m-auto object-cover w-36"
            alt="icon_Four"
          />
          <Img
            src={props?.iconmaskFour}
            className="absolute h-36 inset-[0] justify-center m-auto object-cover w-36"
            alt="iconmask_Four"
          />
        </div>
      </div>
    </>
  );
};

CardColumniconFour.defaultProps = {
  iconFour: "images/img_icon_144x144.png",
  iconmaskFour: "images/img_icon_144x144.png",
};

export default CardColumniconFour;
