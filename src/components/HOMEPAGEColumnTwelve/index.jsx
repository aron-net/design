import React from "react";

import { Img, Text } from "components";

const HOMEPAGEColumnTwelve = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row gap-[34px] items-center justify-between w-full">
          <div className="flex md:flex-1 flex-col gap-[30px] items-center justify-start w-[48%] md:w-full">
            <div className="h-[530px] relative w-full">
              <Img
                src="images/img_image.png"
                className="h-[530px] m-auto object-cover w-full"
                alt="image_One"
              />
              <div className="absolute flex flex-col gap-[37px] inset-x-[0] items-center justify-start mx-auto top-[8%] w-auto">
                <Text
                  className="font-futuramaxicgbold leading-[40.00px] text-center text-gray_800 w-full"
                  variant="body3"
                >
                  {props?.mediumlengthdis}
                </Text>
                <Text
                  className="font-futuramaxicgbook font-normal leading-[22.00px] text-center text-gray_800 w-full"
                  variant="body12"
                >
                  {props?.collectionofcom}
                </Text>
              </div>
            </div>
            <div className="h-[460px] relative w-full">
              <Img
                src="images/img_image_460x405.png"
                className="h-[460px] m-auto object-cover w-full"
                alt="image_Two"
              />
              <div className="absolute flex flex-col gap-6 inset-x-[0] items-center justify-start mx-auto top-[11%] w-auto">
                <Text
                  className="font-futuramaxicgbold text-center text-yellow_A700 w-auto"
                  variant="body3"
                >
                  {props?.mediumlengthdisOne}
                </Text>
                <Text
                  className="font-futuramaxicgbook font-normal leading-[22.00px] text-center text-yellow_A700 w-full"
                  variant="body12"
                >
                  {props?.collectionofcomOne}
                </Text>
              </div>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col gap-[30px] items-center justify-start w-[48%] md:w-full">
            <div className="h-[460px] relative w-full">
              <Img
                src="images/img_image_2.png"
                className="h-[460px] m-auto object-cover w-full"
                alt="image_Three"
              />
              <div className="absolute flex flex-col gap-2 inset-x-[0] items-center justify-start mx-auto top-[10%] w-auto">
                <Text
                  className="font-futuramaxicgbold leading-[40.00px] text-center text-white_A700 w-full"
                  variant="body3"
                >
                  {props?.mediumlengthdisTwo}
                </Text>
                <Text
                  className="font-futuramaxicgbook font-normal leading-[22.00px] text-center text-white_A700 w-full"
                  variant="body12"
                >
                  {props?.collectionofcomTwo}
                </Text>
              </div>
            </div>
            <div
              className="bg-cover bg-no-repeat flex flex-col md:gap-10 gap-[60px] h-[530px] items-end justify-end pt-[25px] sm:px-5 px-[25px] w-full"
              style={{ backgroundImage: "url('images/img_group17.svg')" }}
            >
              <Text
                className="font-futuramaxicgbold leading-[40.00px] mr-5 mt-5 text-center text-gray_800 w-[89%] sm:w-full"
                variant="body3"
              >
                {props?.mediumlengthdisThree}
              </Text>
              <div className="md:h-[290px] h-[305px] mr-5 relative w-[95%]">
                <Text
                  className="absolute font-futuramaxicgbook font-normal leading-[22.00px] right-[0] text-center text-gray_800 top-[0] w-[95%] sm:w-full"
                  variant="body12"
                >
                  {props?.collectionofcomThree}
                </Text>
                <Img
                  src="images/img_image8.png"
                  className="absolute bottom-[0] h-[290px] left-[0] object-cover w-[89%]"
                  alt="imageEight"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

HOMEPAGEColumnTwelve.defaultProps = {
  mediumlengthdis: "See how work gets done with Source",
  collectionofcom:
    "A website wireframe, also known as a page schematic or screen blueprint",
  mediumlengthdisOne: "Easy to Use",
  collectionofcomOne:
    "A website wireframe, also known as a page schematic or screen blueprint",
  mediumlengthdisTwo: "You’re in good company",
  collectionofcomTwo:
    "A website wireframe, also known as a page schematic or screen blueprint",
  mediumlengthdisThree: "We make sure that everyone is able to use a Source",
  collectionofcomThree:
    "A website wireframe, also known as a page schematic or screen blueprint",
};

export default HOMEPAGEColumnTwelve;
