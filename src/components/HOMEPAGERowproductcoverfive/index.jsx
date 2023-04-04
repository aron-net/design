import React from "react";

import { Img, Text, Button } from "components";

const HOMEPAGERowproductcoverfive = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-[178px] relative w-[44%] sm:w-full">
          <Img
            src={props?.productcoverfive}
            className="h-[178px] m-auto object-cover w-full"
            alt="productcoverFive"
          />
          <Text
            className="absolute bg-red_600 font-bold font-montserrat justify-center left-[10%] px-2.5 rounded-[3px] self-stretch text-center text-shadow-ts text-white_A700 top-[11%] tracking-[0.20px] w-auto"
            variant="body12"
          >
            {props?.tag}
          </Text>
        </div>
        <div className="flex flex-col gap-2.5 h-[178px] md:h-auto items-start justify-start pb-[35px] pt-[25px] sm:px-5 px-[25px]">
          <div className="flex flex-row gap-[58px] items-center justify-start self-stretch w-auto">
            <Text
              className="font-futuramaxicgdemi text-gray_601 text-left w-auto"
              variant="body13"
            >
              {props?.language}
            </Text>
            <Button
              className="bg-purple_900 cursor-pointer flex items-center justify-center min-w-[50px] p-[5px] rounded-[13px] w-auto"
              leftIcon={
                <Img
                  src="images/img_star_yellow_a700.svg"
                  className="mr-[5px]"
                  alt="star"
                />
              }
            >
              <div className="font-montserrat font-normal not-italic text-left text-white_A700 text-xs tracking-[0.20px]">
                {props?.p49}
              </div>
            </Button>
          </div>
          <Text
            className="font-futuramaxicgdemi leading-[18.00px] max-w-[221px] md:max-w-full text-gray_900 text-left"
            variant="body13"
          >
            {props?.h4posttitle}
          </Text>
          <div className="flex flex-row gap-2.5 items-center justify-start self-stretch w-auto">
            <Text
              className="font-futuramaxicgdemi text-left text-yellow_A700 w-auto"
              variant="body13"
            >
              {props?.h6}
            </Text>
            <Img
              src="images/img_arrowright_yellow_a700.svg"
              className="h-4 w-[9px]"
              alt="arrowright"
            />
          </div>
        </div>
      </div>
    </>
  );
};

HOMEPAGERowproductcoverfive.defaultProps = {
  productcoverfive: "images/img_productcover5.png",
  tag: "NEW",
  language: "Digital Cameras ",
  p49: "4.9",
  h4posttitle:
    "Nikon D7200 24.2 MP DX-Format Digital SLR Body with Wi-Fi and NFC (Black)(Renewed)",
  h6: "Learn More",
};

export default HOMEPAGERowproductcoverfive;
