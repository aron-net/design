import React from "react";

import { Img, Text, Input, Button } from "components";
import CardColumnicon from "components/CardColumnicon";
import CardColumniconTwo from "components/CardColumniconTwo";
import CardColumniconFour from "components/CardColumniconFour";
import CardColumniconSeven from "components/CardColumniconSeven";

const CardPage = () => {
  return (
    <>
      <div className="bg-gray_900 flex font-inter items-center justify-start mx-auto shadow-bs7 w-full">
        <div className="h-[664px] md:px-5 relative w-full">
          <div
            className="absolute bg-cover bg-no-repeat bottom-[0] flex h-[435px] inset-x-[0] items-center justify-start mx-auto w-full"
            style={{ backgroundImage: "url('images/img_group7.png')" }}
          >
            <Img
              src="images/img_group7.png"
              className="h-[435px] sm:h-auto object-cover w-auto md:w-full"
              alt="vector"
            />
          </div>
          <div className="absolute h-[664px] inset-y-[0] left-[4%] my-auto w-[51%] md:w-full">
            <div className="absolute bottom-[0] md:h-[664px] h-[754px] inset-x-[0] mx-auto pb-[90px] w-[97%] md:w-full">
              <div className="h-[664px] mx-auto w-full">
                <div className="h-[664px] m-auto w-full">
                  <Img
                    src="images/img_20794850convertido.png"
                    className="h-[664px] m-auto object-cover w-full"
                    alt="20794850convert"
                  />
                  <div className="absolute flex flex-col gap-[21px] justify-start left-[17%] top-[17%] w-[59%]">
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start mr-9 w-[93%] md:w-full">
                      <CardColumnicon className="flex flex-col items-center justify-start sm:mt-0 mt-[22px] rotate-[2deg] shadow-bs4 w-auto sm:w-full" />
                      <div className="h-[124px] sm:h-[127px] md:h-[139px] mb-1 sm:ml-[0] ml-[130px] sm:mt-0 mt-3 relative rotate-[-42deg] shadow-bs8 w-[29%] sm:w-full">
                        <div className="absolute bg-gradient3  h-[123px] inset-y-[0] left-[0] my-auto rotate-[-37deg] rounded-[61px] w-[96%]"></div>
                        <div className="absolute h-[121px] inset-y-[0] my-auto right-[0] w-[92%]">
                          <div className="bg-yellow_A700 h-[121px] m-auto rotate-[-37deg] rounded-[60px] w-full"></div>
                          <div className="absolute h-[105px] inset-[0] justify-center m-auto w-[89%]">
                            <div className="bg-gray_900 h-[105px] m-auto rotate-[-37deg] rounded-[52px] w-full"></div>
                            <div className="absolute h-[89px] inset-[0] justify-center m-auto w-[85%]">
                              <div className="bg-gray_900 h-[89px] m-auto rotate-[-38deg] rounded-[44px] w-full"></div>
                              <div className="absolute h-[87px] inset-[0] justify-center m-auto w-[97%]">
                                <div className="bg-gray_900 h-[87px] m-auto rotate-[-38deg] rounded-[43px] w-full"></div>
                                <Img
                                  src="images/img_image61.png"
                                  className="absolute h-[79px] inset-[0] justify-center m-auto object-cover rounded-[36px] w-[92%]"
                                  alt="imageSixtyOne"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <CardColumnicon className="flex flex-col items-center justify-start mb-[22px] sm:ml-[0] ml-[52px] rotate-[2deg] shadow-bs4 w-auto sm:w-full" />
                    </div>
                    <div className="flex flex-row gap-[30px] items-start justify-end ml-auto w-[36%] md:w-full">
                      <CardColumniconTwo className="flex flex-col items-center justify-start mt-[106px] shadow-bs4 w-auto sm:w-full" />
                      <CardColumnicon className="flex flex-col items-center justify-start mb-[92px] rotate-[2deg] shadow-bs4 w-auto sm:w-full" />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[32%] flex flex-row items-start justify-between right-[2%] w-[58%]">
                  <CardColumniconFour
                    className="flex flex-col h-36 items-center justify-start mb-[35px] rotate-[-21deg] shadow-bs4 w-36 sm:w-full"
                    iconFour="images/img_icon_144x144.png"
                    iconmaskFour="images/img_icon_144x144.png"
                  />
                  <CardColumniconTwo className="flex flex-col items-center justify-start mt-[75px] shadow-bs4 w-auto sm:w-full" />
                </div>
              </div>
              <div className="absolute flex flex-row gap-[39px] items-start justify-center left-[27%] top-[18%] w-[35%]">
                <CardColumniconFour
                  className="flex flex-col h-[134px] items-center justify-start mb-[27px] rotate-[-2deg] shadow-bs4 w-[134px] sm:w-full"
                  iconFour="images/img_icon_134x134.png"
                  iconmaskFour="images/img_icon_134x134.png"
                />
                <CardColumniconSeven className="flex flex-col h-[103px] items-center justify-start mt-[59px] shadow-bs4 w-[103px] sm:w-full" />
              </div>
            </div>
            <CardColumniconFour
              className="absolute bottom-[31%] flex flex-col items-center justify-start left-[0] rotate-[-1deg] shadow-bs4 w-[122px] sm:w-full"
              iconFour="images/img_icon_123x122.png"
              iconmaskFour="images/img_icon_123x122.png"
            />
          </div>
          <div className="absolute flex flex-col gap-12 md:h-auto h-max inset-y-[0] items-center justify-center max-w-[694px] my-auto pb-20 pt-[51px] md:px-10 px-12 sm:px-5 right-[2%] w-full">
            <div className="flex flex-col gap-6 items-center justify-start w-full">
              <Text
                className="text-center text-white_A700 tracking-[-0.90px] w-auto"
                variant="body1"
              >
                Join our community
              </Text>
              <Text
                className="leading-[28.00px] max-w-2xl md:max-w-full not-italic text-blue_100 text-center"
                variant="body9"
              >
                <>
                  Receive exclusive offers and unique content, only for iKing.io
                  community members. Don&#39;t miss our new features
                </>
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row gap-3 items-start justify-center w-full">
              <Input
                wrapClassName="bg-white_A700 border border-solid border-white_A700 sm:flex-1 px-[21px] py-[13px] rounded-md w-[58%] sm:w-full"
                className="font-inter font-normal not-italic p-0 placeholder:text-gray_604 sm:px-5 text-base text-gray_604 text-left w-full"
                type="email"
                name="newslettersecti"
                placeholder="Enter your email"
              ></Input>
              <Button className="bg-yellow_A700 cursor-pointer font-bold font-montserrat sm:px-5 px-[25px] py-[13px] rounded-md shadow-bs9 text-center text-gray_900 text-sm tracking-[0.20px] w-[156px]">
                SUBSCRIBE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardPage;
