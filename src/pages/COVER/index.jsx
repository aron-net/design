import React from "react";

import { Img, Text } from "components";

const COVERPage = () => {
  return (
    <>
      <div className="bg-yellow_A700 flex font-poppins items-center justify-end mx-auto md:pl-10 sm:pl-5 pl-[50px] pt-[50px] w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly max-w-[1664px] mx-auto w-full">
          <div className="flex md:flex-1 flex-col justify-start md:mt-0 mt-[142px] w-[69%] md:w-full">
            <div className="flex sm:flex-col flex-row font-codeproboldlc gap-[18px] items-end justify-start md:ml-[0] ml-[109px] w-[43%] md:w-full">
              <Img
                src="images/img_group1.svg"
                className="h-[124px] mb-[3px] w-[123px]"
                alt="groupOne"
              />
              <Text
                className="sm:mt-0 mt-[11px] text-black_900 text-left w-auto"
                as="h1"
                variant="h1"
              >
                iKing.io
              </Text>
            </div>
            <Text
              className="font-futuramaxicgbold leading-[170.00px] ml-12 md:ml-[0] mt-[62px] text-gray_800 text-left tracking-[-3.00px]"
              variant="body7"
            >
              <>
                Mockups
                <br />
                Pages
              </>
            </Text>
            <div className="flex flex-row font-poppins gap-3 items-start justify-start mt-[268px] w-[205px]">
              <Text
                className="font-normal not-italic text-bluegray_800 text-left w-auto"
                variant="body11"
              >
                ©2023
              </Text>
              <div className="flex items-start justify-end w-auto">
                <Text
                  className="font-normal mt-1 not-italic text-bluegray_800 text-left w-auto"
                  variant="body11"
                >
                  iking.io
                </Text>
              </div>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col md:gap-10 gap-[390px] justify-start w-[32%] md:w-full">
            <Text
              className="font-normal md:ml-[0] ml-[300px] not-italic text-gray_800 text-left w-auto"
              variant="body11"
            >
              Last Updated - Mar. 2023
            </Text>
            <Img
              src="images/img_group.png"
              className="h-[652px] sm:h-auto object-cover w-auto md:w-full"
              alt="group"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default COVERPage;
