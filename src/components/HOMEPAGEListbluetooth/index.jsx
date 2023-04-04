import React from "react";

import { List, Img } from "components";

const HOMEPAGEListbluetooth = (props) => {
  return (
    <>
      <List className={props.className} orientation="horizontal">
        <div className="bg-white_A700 flex h-[120px] items-center justify-start mb-[42px] sm:ml-[0] sm:mt-0 mt-[90px] p-[25px] sm:px-5 rounded-[50%] shadow-bs1 w-full">
          <Img
            src="images/img_arrowdown.svg"
            className="h-[70px] w-[70px]"
            alt="arrowdown"
          />
        </div>
        <div className="bg-white_A700 flex h-[120px] items-center justify-start mb-[42px] sm:ml-[0] sm:mt-0 mt-[90px] p-[25px] sm:px-5 rounded-[50%] shadow-bs1 w-full">
          <Img
            src="images/img_bluetooth.svg"
            className="h-[70px] w-[70px]"
            alt="bluetooth"
          />
        </div>
        <div className="bg-white_A700 flex h-[120px] items-center justify-start mb-[42px] sm:ml-[0] sm:mt-0 mt-[90px] p-[25px] sm:px-5 rounded-[50%] shadow-bs1 w-full">
          <Img
            src="images/img_bag_yellow_700.svg"
            className="h-[70px] w-[70px]"
            alt="bag"
          />
        </div>
        <div className="bg-white_A700 flex h-[120px] items-center justify-start mb-[42px] sm:ml-[0] sm:mt-0 mt-[90px] p-[25px] sm:px-5 rounded-[50%] shadow-bs1 w-full">
          <Img
            src="images/img_airplane.svg"
            className="h-[70px] w-[70px]"
            alt="airplane"
          />
        </div>
        <div className="bg-white_A700 flex h-[120px] items-center justify-start mb-[42px] sm:ml-[0] sm:mt-0 mt-[90px] p-[25px] sm:px-5 rounded-[50%] shadow-bs1 w-full">
          <Img
            src="images/img_sushiswap.png"
            className="h-[70px] md:h-auto object-cover w-[70px]"
            alt="sushiswap"
          />
        </div>
        <div className="bg-white_A700 flex h-[120px] items-center justify-start mb-[42px] sm:ml-[0] sm:mt-0 mt-[90px] p-[25px] sm:px-5 rounded-[50%] shadow-bs1 w-full">
          <Img
            src="images/img_info.svg"
            className="h-[70px] w-[70px]"
            alt="info"
          />
        </div>
      </List>
    </>
  );
};

HOMEPAGEListbluetooth.defaultProps = {};

export default HOMEPAGEListbluetooth;
