import React from "react";

import { Text, Button, Img } from "components";

const HOMEPAGEColmd = (props) => {
  return (
    <>
      <div className={props.className}>
        <div
          className="absolute bg-cover bg-no-repeat bg-white_A700 flex h-[300px] items-center justify-start right-[0] top-[0] w-[96%]"
          style={{ backgroundImage: "url('images/img_carditem.svg')" }}
        >
          <div className="flex items-end justify-end p-[15px] w-full">
            <div className="flex flex-col items-end justify-start mr-0.5 mt-[50px] w-[53%] md:w-full">
              <Text
                className="font-futuramaxicgbook font-normal text-gray_700 text-right w-auto"
                variant="body12"
              >
                {props?.h6}
              </Text>
              <Text
                className="font-bold font-montserrat leading-[50.00px] mr-10 mt-[17px] text-gray_900 text-right tracking-[0.20px]"
                as="h6"
                variant="h6"
              >
                {props?.h2}
              </Text>
              <div className="flex flex-row gap-[15px] items-center justify-end ml-auto mt-[35px] w-[63%] md:w-full">
                <Text
                  className="font-futuramaxicgbook font-normal text-bluegray_900 text-right w-auto"
                  variant="body12"
                >
                  {props?.h6One}
                </Text>
                <Button className="border border-solid border-yellow_A701 flex h-[49px] items-center justify-center px-5 py-[17px] rotate-[180deg] rounded-[24px] w-12">
                  <Img
                    src="images/img_arrowright.svg"
                    className=""
                    alt="arrowright"
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Img
          src={props?.imageone}
          className="absolute bottom-[0] h-[294px] left-[0] object-cover w-[59%]"
          alt="imageOne"
        />
      </div>
    </>
  );
};

HOMEPAGEColmd.defaultProps = {
  h6: "Featured",
  h2: (
    <>
      DSLR <br />
      CAMERAS
    </>
  ),
  h6One: "Explore Items",
  imageone: "images/img_image1.png",
};

export default HOMEPAGEColmd;
