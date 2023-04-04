import React from "react";

import { Text, Line, Img, Input, Button } from "components";
import { CloseSVG } from "../../assets/images";
import Frame48095563Openyes from "components/Frame48095563Openyes";

const Frame48095563Page = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-white_A700 font-poppins h-[1203px] mx-auto relative w-full">
        <header className="flex flex-col font-futuramaxicgdemi items-center justify-center mb-[-80px] mx-auto md:px-5 w-full z-[1]">
          <div className="bg-gray_900 flex items-center justify-center pb-[15px] w-full">
            <div className="flex flex-col items-center justify-center w-full">
              <div className="h-[49px] md:h-[88px] relative w-full">
                <div className="absolute bg-yellow_A700 flex md:flex-col flex-row md:gap-5 inset-x-[0] items-center justify-end mx-auto px-[13px] top-[0] w-full">
                  <div className="flex md:flex-1 items-center justify-start w-[91%] md:w-full">
                    <div className="flex h-11 md:h-auto items-start justify-between max-w-[1438px] w-full">
                      <div className="flex sm:flex-col flex-row gap-[30px] items-start justify-between max-w-[1438px] sm:px-5 px-6 w-full">
                        <div className="flex sm:flex-1 items-center justify-end p-[7px] w-auto sm:w-full">
                          <Text
                            className="mt-[9px] text-gray_900 text-left w-auto"
                            variant="body13"
                          >
                            Follow Us and get a chance to win 80% off
                          </Text>
                        </div>
                        <Line className="bg-gray_900 h-11 sm:h-px sm:w-full w-px" />
                        <Text
                          className="text-gray_900 text-left w-auto"
                          variant="body13"
                        >
                          UNITED STATES
                        </Text>
                        <Img
                          src="images/img_folder.svg"
                          className="h-3 w-auto"
                          alt="folder"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="h-6 md:ml-[0] ml-[5px] relative w-[5%] md:w-full">
                    <Text
                      className="absolute h-max inset-y-[0] left-[0] my-auto text-gray_900 text-left w-auto"
                      variant="body13"
                    >
                      ENGLISH
                    </Text>
                    <Img
                      src="images/img_arrowdown_gray_901.svg"
                      className="absolute h-6 inset-y-[0] my-auto right-[0] w-6"
                      alt="arrowdown"
                    />
                  </div>
                </div>
                <Line className="absolute bg-gray_900 h-[49px] inset-y-[0] my-auto right-[6%] w-px" />
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[15px] w-[96%] md:w-full">
                <Img
                  src="images/img_group451.png"
                  className="h-[51px] sm:h-auto object-cover w-[11%] md:w-full"
                  alt="group451"
                />
                <Input
                  value={inputvalue}
                  onChange={(e) => setInputvalue(e?.target?.value)}
                  wrapClassName="bg-white_A700 flex md:ml-[0] ml-[62px] md:mt-0 my-0.5 pl-[22px] pr-[19px] py-3.5 rounded-[23px] w-[48%] md:w-full"
                  className="font-futuramaxicgbook font-normal p-0 placeholder:text-gray_700 sm:pl-5 text-gray_700 text-left text-xs w-full"
                  name="field_One"
                  placeholder="Search Products"
                  suffix={
                    <div className="h-[18px] ml-[35px] w-[18px] bg-gray_601">
                      {inputvalue?.length > 0 ? (
                        <CloseSVG
                          className="cursor-pointer my-auto"
                          onClick={() => setInputvalue("")}
                          fillColor="#5e5d5d"
                          height={18}
                          width={18}
                          viewBox="0 0 18 18"
                        />
                      ) : (
                        <Img
                          src="images/img_search.svg"
                          className="cursor-pointer my-auto"
                          alt="search"
                        />
                      )}
                    </div>
                  }
                ></Input>
                <Button
                  className="bg-yellow_A700 cursor-pointer flex items-center justify-center min-w-[122px] md:ml-[0] ml-[99px] md:mt-0 my-2.5 px-[13px] py-1.5 rounded-[15px] w-auto"
                  leftIcon={
                    <Img
                      src="images/img_menu.svg"
                      className="mt-1 mr-2"
                      alt="menu"
                    />
                  }
                >
                  <div className="font-bold font-montserrat text-center text-gray_900 text-sm tracking-[0.20px]">
                    Feedback
                  </div>
                </Button>
                <div
                  className="bg-cover bg-no-repeat flex font-montserrat h-[31px] items-center justify-end ml-3 md:ml-[0] p-[5px] rounded-[15px] w-[8%] md:w-full"
                  style={{ backgroundImage: "url('images/img_group87.svg')" }}
                >
                  <div className="flex flex-row gap-2 items-start justify-center w-[83%] md:w-full">
                    <Img
                      src="images/img_supporticon13.png"
                      className="h-3.5 md:h-auto object-cover w-3.5"
                      alt="supporticonThirteen"
                    />
                    <Text
                      className="font-bold text-center text-gray_900 tracking-[0.20px] w-auto"
                      variant="body12"
                    >
                      Support
                    </Text>
                  </div>
                </div>
                <Img
                  src="images/img_cart_yellow_a700.svg"
                  className="h-4 md:ml-[0] ml-[39px] w-[15px]"
                  alt="cart"
                />
                <Text
                  className="font-futuramaxicgdemi md:ml-[0] ml-[5px] text-center text-yellow_A700 w-auto"
                  variant="body13"
                >
                  1
                </Text>
                <Img
                  src="images/img_location.svg"
                  className="h-4 md:ml-[0] ml-[18px] w-4"
                  alt="location"
                />
                <Text
                  className="font-futuramaxicgdemi md:ml-[0] ml-[5px] text-center text-yellow_A700 w-auto"
                  variant="body13"
                >
                  1
                </Text>
                <Img
                  src="images/img_frame48095574.png"
                  className="h-[25px] md:h-auto md:ml-[0] ml-[22px] rounded-[50%] w-[25px]"
                  alt="frame48095574"
                />
                <Text
                  className="font-futuramaxicgdemi md:ml-[0] ml-[5px] text-left text-yellow_A700 w-auto"
                  variant="body13"
                >
                  Jeniffer H
                </Text>
                <Img
                  src="images/img_vector.svg"
                  className="h-1 md:ml-[0] ml-[9px] w-auto"
                  alt="vector"
                />
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center mt-[19px] p-[9px] w-[54%] md:w-full">
                <Text
                  className="md:ml-[0] ml-[34px] text-center text-yellow_A700 w-auto"
                  variant="body13"
                >
                  All Categories
                </Text>
                <Img
                  src="images/img_arrowdown_yellow_a701.svg"
                  className="h-2 ml-2 md:ml-[0] w-auto"
                  alt="arrowdown_One"
                />
                <div className="flex md:flex-col flex-row gap-[19px] items-start justify-start md:ml-[0] mx-[19px] self-stretch w-auto md:w-full">
                  <Text
                    className="leading-[18.00px] max-w-[95px] md:max-w-full text-center text-white_A700"
                    variant="body13"
                  >
                    Camera & Photo
                  </Text>
                  <Text
                    className="leading-[18.00px] max-w-[95px] md:max-w-full text-center text-white_A700"
                    variant="body13"
                  >
                    Computers & Accesories
                  </Text>
                  <Text
                    className="leading-[18.00px] max-w-[95px] md:max-w-full text-center text-white_A700"
                    variant="body13"
                  >
                    Home Appliances
                  </Text>
                  <Text
                    className="text-center text-white_A700 w-auto"
                    variant="body13"
                  >
                    Smart Home
                  </Text>
                  <Text
                    className="text-center text-white_A700 w-auto"
                    variant="body13"
                  >
                    Smartphones
                  </Text>
                  <Text
                    className="text-center text-white_A700 w-auto"
                    variant="body13"
                  >
                    Tv & Video
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="bg-gray_900 h-[1074px] mt-auto mx-auto md:px-5 shadow-bs2 w-full">
          <div
            className="bg-cover bg-no-repeat flex h-full items-center justify-end m-auto p-[23px] sm:px-5 w-full"
            style={{ backgroundImage: "url('images/img_group2.png')" }}
          >
            <div className="flex flex-col items-center justify-start mt-[94px] w-[67%] md:w-full">
              <Text
                className="font-futuramaxicgbold leading-[75.00px] text-center text-yellow_A701 tracking-[2.14px]"
                as="h4"
                variant="h4"
              >
                <>
                  Feel Free to shop with almost any <br />
                  cryptocurrency
                </>
              </Text>
              <div className="bg-gradient1  md:w-full mt-[85px] p-px rounded-lg sm:w-full w-[85%] ">
                <div className="bg-gray_900_99 border-solid flex font-montserrat items-start justify-start sm:px-5 px-8 py-6 rounded-lg self-stretch md:w-full">
                  <div className="flex md:flex-col flex-row gap-7 items-end justify-between w-full">
                    <div className="flex md:flex-1 items-center justify-start w-auto md:w-full">
                      <div className="flex flex-col gap-4 items-start justify-start self-stretch w-auto md:w-full">
                        <div className="flex font-futuramaxicgbook items-center justify-start self-stretch w-auto">
                          <Text
                            className="text-left text-white_A700_ab w-auto"
                            variant="body13"
                          >
                            Search Products
                          </Text>
                        </div>
                        <Input
                          wrapClassName="bg-bluegray_902 flex max-w-[655px] pl-4 pr-[381px] py-3 rounded w-full"
                          className="font-dmsans font-normal italic md:pr-10 p-0 placeholder:text-gray_51 sm:pr-5 text-gray_51 text-left text-lg w-full"
                          type="number"
                          name="field"
                          placeholder="headphones"
                          suffix={
                            <Img
                              src="images/img_mail.svg"
                              className="mt-0.5 mb-[5px] ml-[35px]"
                              alt="mail"
                            />
                          }
                        ></Input>
                      </div>
                    </div>
                    <Button className="bg-yellow_A700 cursor-pointer font-bold min-w-[132px] md:mt-0 mt-[34px] px-10 sm:px-5 py-[15px] rounded-[5px] text-center text-gray_900 text-sm tracking-[0.20px] w-auto">
                      Search
                    </Button>
                  </div>
                </div>
              </div>
              <Text
                className="font-futuramaxicglight font-normal leading-[32.00px] mt-16 text-center text-white_A700 w-4/5 sm:w-full"
                variant="body4"
              ></Text>
              <Button className="bg-gradient2  mt-[33px] p-px rounded-[5px]">
                <div className="bg-gray_900 border-solid cursor-pointer font-bold font-montserrat min-w-[126px] px-5 py-2.5 rounded-[5px] text-center text-sm text-yellow_A400 tracking-[0.20px]">
                  <div className="bg-gradient2  mt-[33px] p-px rounded-[5px]">
                    Get Started
                  </div>
                </div>
              </Button>
              <div className="bg-white_A700 flex md:flex-col flex-row gap-[30px] items-center justify-start mt-[52px] self-stretch shadow-bs6 w-auto md:w-full">
                <div className="flex items-start justify-start w-[328px]">
                  <div className="bg-white_A700 flex flex-col gap-2.5 items-center justify-start px-10 sm:px-5 py-[35px] w-[328px]">
                    <Img
                      src="images/img_bitcoinsvgrepocom.svg"
                      className="h-[43px] w-[43px]"
                      alt="bitcoinsvgrepoc"
                    />
                    <Text
                      className="font-futuramaxicgbold text-bluegray_900 text-center w-auto"
                      variant="body6"
                    >
                      WEB 3.0 Payments
                    </Text>
                    <Text
                      className="font-futuramaxicglight font-normal leading-[22.00px] text-center text-gray_600"
                      variant="body12"
                    >
                      <>
                        Through various Blockchain <br />
                        Networks / Wallets
                      </>
                    </Text>
                  </div>
                </div>
                <div className="flex items-start justify-start w-[329px]">
                  <div className="bg-white_A700 flex flex-col gap-2.5 items-center justify-start px-10 sm:px-5 py-[35px] w-[328px]">
                    <div className="flex items-center justify-start w-1/5 md:w-full">
                      <Img
                        src="images/img_bag_yellow_a701.svg"
                        className="h-[39px] w-auto"
                        alt="bag"
                      />
                    </div>
                    <Text
                      className="font-futuramaxicgbold text-bluegray_900 text-center w-auto"
                      variant="body6"
                    >
                      The Best Electronic Products
                    </Text>
                    <Text
                      className="font-futuramaxicglight font-normal leading-[22.00px] text-center text-gray_600"
                      variant="body12"
                    >
                      <>
                        With + 60.000 electronics products
                        <br />
                        with the best discounts
                      </>
                    </Text>
                  </div>
                </div>
                <div className="flex items-start justify-start self-stretch w-auto">
                  <div className="bg-white_A700 flex flex-col gap-2.5 h-[227px] md:h-auto items-center justify-start px-10 sm:px-5 py-[35px] w-[328px]">
                    <Img
                      src="images/img_music.svg"
                      className="h-[49px] w-12"
                      alt="music"
                    />
                    <Text
                      className="font-bold font-montserrat text-bluegray_900 text-center tracking-[0.10px] w-auto"
                      variant="body4"
                    >
                      Fast Shipping
                    </Text>
                    <Text
                      className="font-futuramaxicglight font-normal leading-[22.00px] text-center text-gray_600"
                      variant="body12"
                    >
                      <>
                        receive your products
                        <br /> in 1-3 days
                      </>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-gray_800_bf flex h-full inset-[0] items-center justify-center m-auto pb-[70px] md:px-10 sm:px-5 px-[70px] w-full">
            <div className="flex items-center justify-start mb-[644px] w-full">
              <div className="bg-gray_900 flex items-center justify-start pt-0.5 w-full">
                <div className="flex items-center justify-end p-[7px] w-full">
                  <Frame48095563Openyes
                    className="flex flex-col items-start justify-start mt-[13px] w-auto md:w-full"
                    label="Savings"
                    labelOne="International"
                    labelTwo="International"
                    labelThree="International"
                    labelFour="Camera, Photo & Video"
                    labelFive="Deposits"
                    labelSix="Deposits"
                    labelSeven="Deposits"
                    labelEight="Deposits"
                    labelNine="Deposits"
                    title="Binoculars & Scopes"
                    labelTen="Deposits"
                    labelEleven="Deposits"
                    labelTwelve="Deposits"
                    labelThirteen="Deposits"
                    titleOne="Fixed Deposits"
                    labelFourteen="Deposits"
                    labelFifteen="Deposits"
                    title1="Main Accounts"
                    label1="Deposits"
                    labelOne1="Deposits"
                    labelTwo1="Deposits"
                    labelThree1="Deposits"
                    title2="Main Accounts"
                    label2="Deposits"
                    labelOne2="Deposits"
                    labelTwo2="Deposits"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Frame48095563Page;
