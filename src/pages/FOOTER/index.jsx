import React from "react";

import { Img, Text, List, Line } from "components";

const FOOTERPage = () => {
  function handleNavigate() {
    window.location.href = "https://twitter.com/login/";
  }

  return (
    <>
      <div className="flex items-center justify-start mx-auto w-full">
        <div className="bg-gray_900 flex items-center justify-end p-[43px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col justify-start max-w-[1499px] mt-[55px] mx-auto w-full">
            <div className="flex md:flex-col flex-row font-futuramaxicgbook md:gap-5 items-start justify-start md:ml-[0] ml-[69px] w-4/5 md:w-full">
              <div className="flex flex-col items-end justify-start w-[34%] md:w-full">
                <Img
                  src="images/img_group451.png"
                  className="h-[90px] md:h-auto object-cover w-full"
                  alt="group451"
                />
                <Text
                  className="font-normal leading-[22.00px] text-center text-white_A700 w-3/4 sm:w-full"
                  variant="body12"
                >
                  iKing.io is the best place to shop with cryptocurrency.
                </Text>
              </div>
              <div className="flex flex-col font-montserrat md:gap-10 gap-[107px] justify-start md:ml-[0] ml-[157px] md:mt-0 mt-0.5 w-[34%] md:w-full">
                <div className="flex flex-row gap-[75px] items-start justify-end ml-auto w-[95%] md:w-full">
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="font-bold font-montserrat text-left text-white_A700 tracking-[0.20px] w-auto"
                      variant="body12"
                    >
                      Company Information
                    </Text>
                    <Text
                      className="font-futuramaxicgbook font-normal mt-5 text-left text-white_A700 w-auto"
                      variant="body12"
                    >
                      About Us
                    </Text>
                    <Text
                      className="font-futuramaxicgbook font-normal mt-[25px] text-left text-white_A700 w-auto"
                      variant="body12"
                    >
                      Shop With Crypto
                    </Text>
                    <Text
                      className="font-futuramaxicgbook font-normal mt-[22px] text-left text-white_A700 w-auto"
                      variant="body12"
                    >
                      Returns & Refunds
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="font-bold font-montserrat text-left text-white_A700 tracking-[0.20px] w-auto"
                      variant="body12"
                    >
                      Customer Support
                    </Text>
                    <Text
                      className="font-futuramaxicgbook font-normal mt-[22px] text-left text-white_A700 w-auto"
                      variant="body12"
                    >
                      Help Desk
                    </Text>
                    <Text
                      className="font-futuramaxicgbook font-normal mt-[23px] text-left text-white_A700 w-auto"
                      variant="body12"
                    >
                      Blog
                    </Text>
                    <Text
                      className="font-futuramaxicgbook font-normal mt-[22px] text-left text-white_A700 w-auto"
                      variant="body12"
                    >
                      How It Works
                    </Text>
                    <Text
                      className="font-lato mt-6 not-italic text-left text-white_A700 w-auto"
                      variant="body10"
                    >
                      Contact Us
                    </Text>
                    <Text
                      className="font-lato mt-[21px] not-italic text-left text-white_A700 w-auto"
                      variant="body10"
                    >
                      Feedback
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-[50px] items-start justify-start w-[68%] md:w-full">
                  <Text
                    className="font-bold text-gray_700 text-right tracking-[0.20px] w-auto"
                    variant="body12"
                  >
                    Privacy policy
                  </Text>
                  <Text
                    className="font-bold text-gray_700 text-right tracking-[0.20px] w-auto"
                    variant="body12"
                  >
                    Term of service
                  </Text>
                </div>
              </div>
              <div className="flex flex-col font-montserrat gap-[25px] items-start justify-start md:ml-[0] ml-[65px] w-[15%] md:w-full">
                <Text
                  className="font-bold text-left text-white_A700 tracking-[0.20px] w-auto"
                  variant="body12"
                >
                  Social Media
                </Text>
                <div className="flex flex-row gap-[17px] items-center justify-between w-full">
                  <List
                    className="sm:flex-col flex-row gap-[17px] grid grid-cols-2 w-auto"
                    orientation="horizontal"
                  >
                    <div className="flex h-5 items-center justify-start sm:ml-[0] w-full">
                      <Img
                        src="images/img_facebook.svg"
                        className="h-5 w-5"
                        alt="facebook"
                      />
                    </div>
                    <div className="flex h-5 items-center justify-start sm:ml-[0] w-full">
                      <Img
                        src="images/img_linkedin.svg"
                        className="h-5 w-5"
                        alt="linkedin"
                      />
                    </div>
                  </List>
                  <Img
                    src="images/img_user_yellow_a700.svg"
                    className="h-5 w-5"
                    alt="user"
                  />
                  <div className="flex h-5 items-center justify-start w-5">
                    <Img
                      src="images/img_twitter.svg"
                      className="common-pointer h-5 w-5"
                      onClick={handleNavigate}
                      alt="twitter"
                    />
                  </div>
                  <Img
                    src="images/img_camera.svg"
                    className="h-5 w-5"
                    alt="camera"
                  />
                </div>
              </div>
            </div>
            <Line className="bg-gray_600_7a h-0.5 mt-2.5 w-full" />
            <Text
              className="font-lato md:ml-[0] ml-[645px] mt-[11px] not-italic text-center text-gray_601 w-auto"
              variant="body10"
            ></Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default FOOTERPage;
