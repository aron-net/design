import React from "react";

import {
  List,
  Text,
  Button,
  Img,
  Line,
  Input,
  Slider,
  PagerIndicator,
} from "components";
import HOMEPAGEColmd from "components/HOMEPAGEColmd";
import HOMEPAGECard from "components/HOMEPAGECard";
import { CloseSVG } from "../../assets/images";
import HOMEPAGEListbluetooth from "components/HOMEPAGEListbluetooth";
import HOMEPAGEColumnTwelve from "components/HOMEPAGEColumnTwelve";
import HOMEPAGERowproductcoverfive from "components/HOMEPAGERowproductcoverfive";
import HOMEPAGEColumnSixteen from "components/HOMEPAGEColumnSixteen";

const HOMEPAGEPage = () => {
  const homepageColmdPropList = [
    {
      h2: (
        <>
          DSLR <br />
          CAMERAS
        </>
      ),
      imageone: "images/img_image1.png",
    },
    {
      h2: (
        <>
          SMART
          <br />
          WATCHS
        </>
      ),
      imageone: "images/img_image1_294x312.png",
    },
    {
      h2: (
        <>
          OLED........
          <br />
          TVS ........
        </>
      ),
      imageone: "images/img_image1_1.png",
    },
  ];
  const [inputvalue, setInputvalue] = React.useState("");
  const homepageRowproductcoverfivePropList = [
    { productcoverfive: "images/img_productcover5.png" },
    { productcoverfive: "images/img_productcover5_178x209.png" },
    { productcoverfive: "images/img_productcover5_1.png" },
    { productcoverfive: "images/img_image1_294x312.png" },
  ];
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-white_A700 flex font-futuramaxicgbold items-start justify-start mx-auto pb-[1215px] w-full">
        <div className="flex flex-col items-end justify-start md:px-5 w-full">
          <div className="md:h-[2414px] h-[2800px] relative w-full">
            <div className="absolute h-[2414px] inset-x-[0] mx-auto overflow-auto top-[1%] w-full">
              <div className="absolute flex inset-x-[0] items-center justify-end mx-auto pr-0.5 py-20 self-stretch top-[30%] w-auto">
                <List
                  className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start max-w-[1954px] w-full"
                  orientation="horizontal"
                >
                  {homepageColmdPropList.map((props, index) => (
                    <React.Fragment key={`HOMEPAGEColmd${index}`}>
                      <HOMEPAGEColmd
                        className="h-[317px] relative w-full"
                        h6="Featured"
                        h6One="Explore Items"
                        {...props}
                      />
                    </React.Fragment>
                  ))}
                </List>
              </div>
              <div className="bg-gray_900 flex h-full items-center justify-end ml-auto mt-[175px] p-[111px] md:px-10 sm:px-5 w-auto md:w-full">
                <Text
                  className="leading-[75.00px] text-center text-yellow_A700 tracking-[2.14px]"
                  as="h4"
                  variant="h4"
                >
                  <>
                    Feel Free to shop with almost any <br />
                    cryptocurrency
                  </>
                </Text>
              </div>
              <div
                className="absolute bg-cover bg-no-repeat flex h-full inset-y-[0] items-center justify-end my-auto py-[351px] right-[0] w-[84%] md:w-full"
                style={{ backgroundImage: "url('images/img_group16.png')" }}
              >
                <div className="flex flex-col md:gap-10 gap-[94px] items-center justify-start mt-[351px] w-full">
                  <div className="flex flex-col md:gap-10 gap-[502px] items-center justify-start w-full">
                    <div className="flex items-center justify-start w-[459px] sm:w-full">
                      <Text
                        className="text-bluegray_900 text-center w-auto"
                        variant="body3"
                      >
                        TOP CATEGORIES
                      </Text>
                    </div>
                    <div className="flex flex-col font-montserrat relative w-full">
                      <div className="bg-gray_900 flex items-center justify-start max-w-[1621px] mx-auto py-[100px] w-full">
                        <div className="flex items-center justify-start max-w-[1175px] pb-10 w-full">
                          <div className="flex flex-col gap-[29px] items-center justify-start w-full">
                            <div className="flex flex-col gap-4 items-start justify-start max-w-[1175px] w-full">
                              <Text
                                className="font-semibold font-urbanist text-center text-white_A700 w-auto"
                                as="h6"
                                variant="h6"
                              ></Text>
                              <Text
                                className="font-futuramaxicgbook leading-[29.00px] max-w-[1175px] md:max-w-full text-center text-white_A700"
                                variant="body9"
                              >
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Eu est amet a ornare tempus,
                                risus. Integer in nunc tempus nunc, risus, vel
                                vitae ut. Ut sodales fusce purus risus, turpis
                                faucibus. Ipsum adipiscing nunc.
                              </Text>
                            </div>
                            <Button className="bg-yellow_A700 cursor-pointer font-bold leading-[normal] sm:px-5 px-8 py-4 rounded-lg text-center text-gray_900 text-sm uppercase w-[148px]">
                              SHOP NOW
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-center max-w-[1175px] ml-auto mr-[188px] mt-[-147px] py-2.5 w-full z-[1]">
                        <div className="bg-white_A700 border border-gray_600_59 border-solid flex flex-1 flex-col items-center justify-start p-[31px] sm:px-5 rounded-[16px] shadow-bs5 w-full">
                          <div className="bg-gray_900 flex h-[69px] md:h-auto items-center justify-center mt-[50px] rounded-[34px] w-[69px]">
                            <Img
                              src="images/img_volume.svg"
                              className="h-[69px] rounded-[50%] w-[69px]"
                              alt="volume"
                            />
                          </div>
                          <Text
                            className="font-futuramaxicgbold mt-[52px] text-bluegray_900 text-left w-auto"
                            variant="body5"
                          >
                            WEB 3.0 Payments
                          </Text>
                          <Text
                            className="font-futuramaxicgbook font-normal leading-[22.00px] mb-[50px] mt-[23px] text-center text-gray_600"
                            variant="body12"
                          >
                            <>
                              Through various Blockchain <br />
                              Networks / Wallets
                            </>
                          </Text>
                        </div>
                        <div className="bg-white_A700 border border-gray_600_59 border-solid flex flex-1 flex-col items-center justify-start p-[23px] sm:px-5 rounded-[16px] shadow-bs5 w-full">
                          <div className="md:h-[127px] h-[70px] mt-[57px] relative w-[85px]">
                            <div className="bg-gray_900 h-[69px] m-auto rounded-[34px] w-[69px]"></div>
                            <div className="absolute h-[70px] inset-[0] justify-center m-auto px-[7px] w-full">
                              <Img
                                src="images/img_bag.svg"
                                className="h-[50px] m-auto w-[50px]"
                                alt="bag"
                              />
                              <Img
                                src="images/img_contrast.svg"
                                className="absolute h-[70px] inset-[0] justify-center m-auto w-[70px]"
                                alt="contrast"
                              />
                            </div>
                          </div>
                          <Text
                            className="font-futuramaxicgbold mt-[50px] text-bluegray_900 text-left w-auto"
                            variant="body6"
                          >
                            The Best Electronic Products
                          </Text>
                          <Text
                            className="font-futuramaxicgbook font-normal leading-[22.00px] mb-[58px] mt-[27px] text-center text-gray_600"
                            variant="body12"
                          >
                            <>
                              With + 60.000 electronics products
                              <br />
                              with the best discounts
                            </>
                          </Text>
                        </div>
                        <div className="bg-white_A700 border border-gray_600_59 border-solid flex flex-1 flex-col items-center justify-start p-[31px] sm:px-5 rounded-[16px] shadow-bs5 w-full">
                          <div className="bg-gray_900 flex h-[69px] md:h-auto items-center justify-center mt-[49px] rounded-[34px] w-[69px]">
                            <Img
                              src="images/img_ticket.svg"
                              className="h-[69px] rounded-[50%] w-[69px]"
                              alt="ticket"
                            />
                          </div>
                          <Text
                            className="font-futuramaxicgbold mt-12 text-bluegray_900 text-left w-auto"
                            variant="body6"
                          >
                            Fast Shipping
                          </Text>
                          <Text
                            className="font-futuramaxicgbook font-normal leading-[22.00px] mb-[49px] mt-[22px] text-center text-gray_600"
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
                  <div className="flex items-center justify-start w-[459px] sm:w-full">
                    <Text
                      className="text-bluegray_900 text-center w-auto"
                      variant="body3"
                    >
                      BESTSELLER PRODUCTS
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[0] flex font-futuramaxicgbook items-center justify-start right-[3%] w-[79%]">
              <div className="flex flex-col gap-[39px] items-center justify-start w-full">
                <div className="flex items-center justify-start w-full">
                  <div className="flex items-center justify-start w-full">
                    <div className="flex flex-col gap-[9px] items-center justify-start w-full">
                      <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                        <div className="flex items-start justify-start w-[223px]">
                          <Text
                            className="font-normal text-center text-gray_900 uppercase w-auto"
                            variant="body12"
                          >
                            PC Game Hardware
                          </Text>
                        </div>
                        <div className="flex md:flex-1 md:flex-col flex-row gap-[23px] items-center justify-end w-[74%] md:w-full">
                          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start self-stretch w-auto md:w-full">
                            <div className="flex items-start justify-start self-stretch w-auto">
                              <div className="flex items-center justify-start px-5 py-2.5 rounded-[5px] self-stretch w-auto">
                                <Text
                                  className="font-normal text-center text-yellow_A701 w-auto"
                                  variant="body12"
                                >
                                  Notebooks
                                </Text>
                              </div>
                            </div>
                            <div className="flex items-start justify-start self-stretch w-auto">
                              <div className="flex items-center justify-start px-5 py-2.5 rounded-[21px] self-stretch w-auto">
                                <Text
                                  className="font-normal text-center text-gray_600 w-auto"
                                  variant="body12"
                                >
                                  Webcams
                                </Text>
                              </div>
                            </div>
                            <div className="flex items-start justify-start self-stretch w-auto">
                              <div className="flex items-center justify-start px-5 py-2.5 rounded-[21px] self-stretch w-auto">
                                <Text
                                  className="font-normal text-center text-gray_600 w-auto"
                                  variant="body12"
                                >
                                  Cameras
                                </Text>
                              </div>
                            </div>
                            <div className="flex items-start justify-start self-stretch w-auto">
                              <div className="flex items-center justify-start px-5 py-2.5 rounded-[21px] self-stretch w-auto">
                                <Text
                                  className="font-normal text-center text-gray_600 w-auto"
                                  variant="body12"
                                >
                                  Webcams
                                </Text>
                              </div>
                            </div>
                            <div className="flex items-start justify-start self-stretch w-auto">
                              <div className="flex items-center justify-start px-5 py-2.5 rounded-[21px] self-stretch w-auto">
                                <Text
                                  className="font-normal text-center text-gray_600 w-auto"
                                  variant="body12"
                                >
                                  Cameras
                                </Text>
                              </div>
                            </div>
                            <div className="flex items-start justify-start self-stretch w-auto">
                              <div className="flex items-center justify-start px-5 py-2.5 rounded-[21px] self-stretch w-auto">
                                <Text
                                  className="font-normal text-center text-gray_600 w-auto"
                                  variant="body12"
                                >
                                  Webcams
                                </Text>
                              </div>
                            </div>
                            <List
                              className="sm:flex-col flex-row gap-px grid grid-cols-2 w-[24%] md:w-full"
                              orientation="horizontal"
                            >
                              <div className="flex items-start justify-start self-stretch w-auto">
                                <div className="flex items-center justify-start px-5 py-2.5 rounded-[21px] self-stretch w-auto">
                                  <Text
                                    className="font-normal text-center text-gray_600 w-auto"
                                    variant="body12"
                                  >
                                    Cameras
                                  </Text>
                                </div>
                              </div>
                              <div className="flex items-start justify-start self-stretch w-auto">
                                <div className="flex items-center justify-start px-5 py-2.5 rounded-[21px] self-stretch w-auto">
                                  <Text
                                    className="font-normal text-center text-gray_600 w-auto"
                                    variant="body12"
                                  >
                                    Cameras
                                  </Text>
                                </div>
                              </div>
                            </List>
                          </div>
                          <div className="flex flex-row gap-[15px] items-start justify-start self-stretch w-auto">
                            <div className="flex items-start justify-start w-12">
                              <Button className="border border-gray_400 border-solid flex h-12 items-center justify-center px-5 py-3.5 rounded-[50%] w-12">
                                <Img
                                  src="images/img_arrowleft.svg"
                                  className=""
                                  alt="arrowleft"
                                />
                              </Button>
                            </div>
                            <div className="flex h-[49px] md:h-auto items-start justify-start w-[49px]">
                              <Button className="border border-solid border-yellow_A701 flex h-[49px] items-center justify-center px-5 py-3.5 rounded-[24px] w-[49px]">
                                <Img
                                  src="images/img_arrowright_yellow_a701.svg"
                                  className=""
                                  alt="arrowright"
                                />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Line className="bg-gray_200 h-0.5 w-full" />
                    </div>
                  </div>
                </div>
                <List
                  className="sm:flex-col flex-row font-montserrat gap-[39px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-full"
                  orientation="horizontal"
                >
                  {new Array(4).fill({}).map((props, index) => (
                    <React.Fragment key={`HOMEPAGECard${index}`}>
                      <HOMEPAGECard
                        className="bg-white_A700 border border-gray_600_1c border-solid h-[546px] pt-[21px] relative shadow-bs w-full"
                        tag="Sale"
                        linkproductcate="Digital Cameras"
                        p49="4.9"
                        paragraphproduc="Nikon D7200 24.2 MP DX-Format Digital SLR Body with Wi-Fi and NFC (Black)(Renewed)"
                        price="$ 1,039.95"
                        priceOne="USDT"
                        paywith2000="Pay with +2000 cryptocurrencies"
                        addToCart="Add to cart"
                        buyNow="Buy Now"
                        {...props}
                      />
                    </React.Fragment>
                  ))}
                </List>
              </div>
            </div>
            <header className="absolute flex flex-col font-futuramaxicgdemi items-center justify-center right-[0] top-[0] w-full">
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
                    <Line className="absolute bg-gray_900 h-12 inset-y-[0] my-auto right-[15%] w-px" />
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[15px] w-[96%] md:w-full">
                    <Img
                      src="images/img_group451.png"
                      className="h-[51px] sm:h-auto object-cover w-[12%] md:w-full"
                      alt="group451"
                    />
                    <Input
                      value={inputvalue}
                      onChange={(e) => setInputvalue(e?.target?.value)}
                      wrapClassName="bg-white_A700 flex md:ml-[0] ml-[62px] md:mt-0 my-0.5 pl-[22px] pr-[19px] py-3.5 rounded-[23px] w-[48%] md:w-full"
                      className="font-futuramaxicgbook font-normal p-0 placeholder:text-gray_700 sm:pl-5 text-gray_700 text-left text-xs w-full"
                      name="field"
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
                      style={{
                        backgroundImage: "url('images/img_group87.svg')",
                      }}
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
                      className="h-4 ml-7 md:ml-[0] w-[15px]"
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
                      src="images/img_user.svg"
                      className="h-[13px] md:ml-[0] ml-[18px] w-3"
                      alt="user"
                    />
                    <Text
                      className="font-futuramaxicgdemi md:ml-[0] ml-[5px] text-center text-yellow_A700 w-auto"
                      variant="body13"
                    >
                      Login / Register
                    </Text>
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
                      className="h-2 md:ml-[0] ml-[11px] w-auto"
                      alt="arrowdown_One"
                    />
                    <div className="flex md:flex-col flex-row gap-[19px] items-start justify-start md:ml-[0] mx-[17px] self-stretch w-auto md:w-full">
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
          </div>
          <Text
            className="mt-[121px] text-bluegray_900 text-center w-auto"
            variant="body3"
          >
            NEW ARRIVALS{" "}
          </Text>
          <div className="flex font-futuramaxicgbook items-center justify-start mt-[81px] w-[79%] md:w-full">
            <div className="flex flex-col gap-10 items-center justify-start w-full">
              <div className="flex items-center justify-start w-full">
                <div className="flex items-center justify-start w-full">
                  <div className="flex flex-col gap-[9px] items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                      <div className="flex items-start justify-start w-[223px]">
                        <Text
                          className="font-normal text-center text-gray_900 uppercase w-auto"
                          variant="body12"
                        >
                          PC Game Hardware
                        </Text>
                      </div>
                      <div className="flex md:flex-1 md:flex-col flex-row gap-[23px] items-center justify-end w-[74%] md:w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start self-stretch w-auto md:w-full">
                          <div className="flex items-start justify-start self-stretch w-auto">
                            <div className="flex items-center justify-start px-5 py-2.5 rounded-[5px] self-stretch w-auto">
                              <Text
                                className="font-normal text-center text-yellow_A700 w-auto"
                                variant="body12"
                              >
                                Notebooks
                              </Text>
                            </div>
                          </div>
                          <div className="flex items-start justify-start self-stretch w-auto">
                            <div className="flex items-center justify-start px-5 py-2.5 rounded-[21px] self-stretch w-auto">
                              <Text
                                className="font-normal text-center text-gray_600 w-auto"
                                variant="body12"
                              >
                                Webcams
                              </Text>
                            </div>
                          </div>
                          <div className="flex items-start justify-start self-stretch w-auto">
                            <div className="flex items-center justify-start px-5 py-2.5 rounded-[21px] self-stretch w-auto">
                              <Text
                                className="font-normal text-center text-gray_600 w-auto"
                                variant="body12"
                              >
                                Cameras
                              </Text>
                            </div>
                          </div>
                          <div className="flex items-start justify-start self-stretch w-auto">
                            <div className="flex items-center justify-start px-5 py-2.5 rounded-[21px] self-stretch w-auto">
                              <Text
                                className="font-normal text-center text-gray_600 w-auto"
                                variant="body12"
                              >
                                Webcams
                              </Text>
                            </div>
                          </div>
                          <div className="flex items-start justify-start self-stretch w-auto">
                            <div className="flex items-center justify-start px-5 py-2.5 rounded-[21px] self-stretch w-auto">
                              <Text
                                className="font-normal text-center text-gray_600 w-auto"
                                variant="body12"
                              >
                                Cameras
                              </Text>
                            </div>
                          </div>
                          <div className="flex items-start justify-start self-stretch w-auto">
                            <div className="flex items-center justify-start px-5 py-2.5 rounded-[21px] self-stretch w-auto">
                              <Text
                                className="font-normal text-center text-gray_600 w-auto"
                                variant="body12"
                              >
                                Webcams
                              </Text>
                            </div>
                          </div>
                          <List
                            className="sm:flex-col flex-row gap-px grid grid-cols-2 w-[24%] md:w-full"
                            orientation="horizontal"
                          >
                            <div className="flex items-start justify-start self-stretch w-auto">
                              <div className="flex items-center justify-start px-5 py-2.5 rounded-[21px] self-stretch w-auto">
                                <Text
                                  className="font-normal text-center text-gray_600 w-auto"
                                  variant="body12"
                                >
                                  Cameras
                                </Text>
                              </div>
                            </div>
                            <div className="flex items-start justify-start self-stretch w-auto">
                              <div className="flex items-center justify-start px-5 py-2.5 rounded-[21px] self-stretch w-auto">
                                <Text
                                  className="font-normal text-center text-gray_600 w-auto"
                                  variant="body12"
                                >
                                  Cameras
                                </Text>
                              </div>
                            </div>
                          </List>
                        </div>
                        <div className="flex flex-row gap-[15px] items-start justify-start self-stretch w-auto">
                          <div className="flex items-start justify-start w-12">
                            <Button className="border border-gray_400 border-solid flex h-12 items-center justify-center px-5 py-3.5 rounded-[50%] w-12">
                              <Img
                                src="images/img_arrowleft.svg"
                                className=""
                                alt="arrowleft_One"
                              />
                            </Button>
                          </div>
                          <div className="flex h-[49px] md:h-auto items-start justify-start w-[49px]">
                            <Button className="border border-solid border-yellow_A701 flex h-[49px] items-center justify-center px-5 py-3.5 rounded-[24px] w-[49px]">
                              <Img
                                src="images/img_arrowright_yellow_a701.svg"
                                className=""
                                alt="arrowright_One"
                              />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Line className="bg-gray_200 h-0.5 w-full" />
                  </div>
                </div>
              </div>
              <List
                className="sm:flex-col flex-row font-montserrat gap-[39px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-full"
                orientation="horizontal"
              >
                {new Array(4).fill({}).map((props, index) => (
                  <React.Fragment key={`HOMEPAGECard${index}`}>
                    <HOMEPAGECard
                      className="bg-white_A700 border border-gray_600_1c border-solid h-[546px] pt-[21px] relative shadow-bs w-full"
                      tag="Sale"
                      linkproductcate="Digital Cameras"
                      p49="4.9"
                      paragraphproduc="Nikon D7200 24.2 MP DX-Format Digital SLR Body with Wi-Fi and NFC (Black)(Renewed)"
                      price="$ 1,039.95"
                      priceOne="USDT"
                      paywith2000="Pay with +2000 cryptocurrencies"
                      addToCart="Add to cart"
                      buyNow="Buy Now"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </List>
            </div>
          </div>
          <div className="flex flex-col font-futuramaxicgbold items-center justify-start mt-[111px] w-[84%] md:w-full">
            <div className="bg-white_A700 flex flex-col gap-11 items-center justify-start pb-12 md:px-10 px-12 sm:px-5 w-full">
              <Text
                className="leading-[58.00px] text-bluegray_900 text-center tracking-[-0.79px] w-[48%] sm:w-full"
                as="h5"
                variant="h5"
              ></Text>
              <div className="font-futuramaxicgbook md:h-[274px] h-[309px] relative w-[71%] md:w-full">
                <Text
                  className="absolute inset-x-[0] leading-[23.00px] mx-auto text-center text-gray_900 top-[0] tracking-[0.57px] w-[66%] sm:w-full"
                  variant="body8"
                >
                  We pride ourselves on being the leading
                  cryptocurrency-friendly electronic products platform. Pay for
                  your purchases anywhere in the world seamlessly using your
                  favorite cryptocurrency.
                </Text>
                <HOMEPAGEListbluetooth className="absolute bottom-[0] sm:flex-col flex-row gap-[57px] grid grid-cols-1 inset-x-[0] justify-center mx-auto p-[11px] w-full" />
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[110px] w-[88%] md:w-full">
              <HOMEPAGEColumnTwelve
                className="flex flex-col items-center justify-start w-auto md:w-full"
                mediumlengthdis="See how work gets done with Source"
                collectionofcom="A website wireframe, also known as a page schematic or screen blueprint"
                mediumlengthdisOne="Easy to Use"
                collectionofcomOne="A website wireframe, also known as a page schematic or screen blueprint"
                mediumlengthdisTwo="You’re in good company"
                collectionofcomTwo="A website wireframe, also known as a page schematic or screen blueprint"
                mediumlengthdisThree="We make sure that everyone is able to use a Source"
                collectionofcomThree="A website wireframe, also known as a page schematic or screen blueprint"
              />
              <div className="flex flex-col font-montserrat gap-[29px] items-center justify-start w-[34%] md:w-full">
                <div className="flex flex-col gap-[15px] items-center justify-start w-[459px] sm:w-full">
                  <Text
                    className="not-italic text-center text-gray_600 tracking-[0.20px] w-auto"
                    variant="body6"
                  >
                    Featured Products
                  </Text>
                  <Text
                    className="font-bold text-bluegray_900 text-center tracking-[0.20px] w-auto"
                    as="h6"
                    variant="h6"
                  >
                    Featured Products
                  </Text>
                </div>
                <List
                  className="flex-col gap-[39px] grid items-center w-full"
                  orientation="vertical"
                >
                  {homepageRowproductcoverfivePropList.map((props, index) => (
                    <React.Fragment key={`HOMEPAGERowproductcoverfive${index}`}>
                      <HOMEPAGERowproductcoverfive
                        className="bg-white_A700 flex sm:flex-1 flex-row items-start justify-start self-stretch shadow-bs2 w-auto sm:w-full"
                        tag="NEW"
                        language="Digital Cameras "
                        p49="4.9"
                        h4posttitle="Nikon D7200 24.2 MP DX-Format Digital SLR Body with Wi-Fi and NFC (Black)(Renewed)"
                        h6="Learn More"
                        {...props}
                      />
                    </React.Fragment>
                  ))}
                </List>
              </div>
            </div>
            <div className="bg-gray_900 flex items-center justify-start mt-[121px] p-[59px] md:px-10 sm:px-5 w-full">
              <div className="flex flex-col gap-[49px] items-center justify-start w-[96%] md:w-full">
                <Text
                  className="text-center text-yellow_A700 w-auto"
                  variant="body3"
                >
                  CUSTOMER REVIEWS
                </Text>
                <Slider
                  autoPlay
                  autoPlayInterval={2000}
                  activeIndex={sliderState}
                  responsive={{
                    0: { items: 1 },
                    550: { items: 2 },
                    1050: { items: 3 },
                  }}
                  onSlideChanged={(e) => {
                    setsliderState(e?.item);
                  }}
                  activeSlideCSS="scale-[0.64]"
                  magnifiedIndex={1}
                  centerMode
                  ref={sliderRef}
                  className="bg-white_A700 border border-gray_600_5b border-solid font-futuramaxicglight rounded-[20px] shadow-bs2 w-full"
                  items={[...Array(15)].map(() => (
                    <React.Fragment key={Math.random()}>
                      <div className="flex flex-col gap-8 items-center justify-start mx-2.5 md:pl-10 sm:pl-5 pl-[95px]">
                        <div className="flex items-end justify-start self-stretch w-auto sm:w-full">
                          <Text
                            className="leading-[34.00px] text-gray_900 text-left tracking-[-0.20px]"
                            variant="body6"
                          >
                            <>
                              &quot;I would also like to say thank you to all
                              your <br />
                              staff. It fits our needs perfectly. I don&#39;t
                              know <br />
                              what else to say. Keep up the excellent
                              work.&quot;
                            </>
                          </Text>
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                  renderDotsItem={({ isActive }) => {
                    if (isActive) {
                      return (
                        <div className="inline-block cursor-pointer rounded-[50%] h-2.5 bg-yellow_A700 w-2.5" />
                      );
                    }
                    return (
                      <div
                        className="inline-block cursor-pointer rounded-[50%] h-2.5 bg-gray_300 w-2.5"
                        role="button"
                        tabIndex={0}
                      />
                    );
                  }}
                />
              </div>
            </div>
            <div className="font-montserrat h-[1580px] md:h-[1701px] mt-[121px] relative w-full">
              <div className="flex h-full items-center justify-start m-auto w-full">
                <div className="flex flex-col md:gap-10 gap-[334px] items-center justify-start w-full">
                  <div className="bg-white_A700 flex items-center justify-start p-[5px] w-[98%] md:w-full">
                    <div className="flex md:flex-col flex-row gap-4 items-center justify-between mb-[79px] w-[97%] md:w-full">
                      <div className="flex h-[797px] md:h-auto items-start justify-start pb-[47px] self-stretch w-auto sm:w-full">
                        <div className="flex items-start justify-start self-stretch w-auto">
                          <div
                            className="bg-cover bg-no-repeat bg-white_A700 border border-blue_200 border-solid h-[796px] relative w-full"
                            style={{
                              backgroundImage:
                                "url('images/img_carditem_gray_403.svg')",
                            }}
                          >
                            <div className="flex flex-col gap-[5px] h-full items-start justify-center mx-auto md:pl-10 pl-12 pr-6 sm:px-5 py-6 w-[389px] sm:w-full">
                              <Text
                                className="font-bold text-bluegray_900 text-left tracking-[0.20px] w-auto"
                                variant="body12"
                              >
                                GAMING
                              </Text>
                              <Text
                                className="font-bold text-gray_600 text-left tracking-[0.20px] w-auto"
                                variant="body12"
                              >
                                12 Items
                              </Text>
                            </div>
                            <div className="absolute bg-bluegray_900 flex h-full inset-[0] items-center justify-center m-auto w-full">
                              <div className="h-[796px] relative w-full">
                                <Img
                                  src="images/img_unsplashryyrk3ysqg.png"
                                  className="h-[796px] m-auto object-cover w-full"
                                  alt="unsplashryyrk3y"
                                />
                                <div className="absolute bg-gradient  flex h-full inset-[0] items-center justify-center m-auto w-full">
                                  <div className="flex items-center justify-start py-28 self-stretch w-auto sm:w-full">
                                    <div className="flex items-center justify-start w-[389px] sm:w-full">
                                      <div className="flex flex-col gap-[30px] items-center justify-start self-stretch w-auto">
                                        <div className="flex flex-col gap-[30px] items-center justify-start w-auto md:w-full">
                                          <Text
                                            className="font-bold leading-[50.00px] text-center text-white_A700 tracking-[0.20px]"
                                            as="h6"
                                            variant="h6"
                                          >
                                            <>
                                              Designing <br />
                                              Better <br />
                                              Experience
                                            </>
                                          </Text>
                                          <Text
                                            className="font-normal leading-[20.00px] not-italic text-center text-white_A700 tracking-[0.20px]"
                                            variant="body12"
                                          >
                                            <>
                                              Problems trying to resolve the c
                                              <br />
                                              onflict between the two major
                                              <br /> realms of Classical
                                              physics: <br />
                                              Newtonian mechanics{" "}
                                            </>
                                          </Text>
                                        </div>
                                        <Img
                                          src="images/img_blouse1.png"
                                          className="h-[397px] sm:h-auto object-cover w-[316px] md:w-full"
                                          alt="blouseOne"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start mb-0.5 w-[74%] md:w-full">
                        <div className="flex flex-col items-center justify-start max-w-[1098px] w-full">
                          <Text
                            className="not-italic text-center text-gray_600 tracking-[0.20px] w-auto"
                            variant="body6"
                          >
                            Featured Products
                          </Text>
                          <Text
                            className="font-bold text-bluegray_900 text-center tracking-[0.20px] w-auto"
                            as="h6"
                            variant="h6"
                          >
                            Featured Products
                          </Text>
                          <Text
                            className="font-normal leading-[20.00px] not-italic text-center text-gray_600 tracking-[0.20px]"
                            variant="body12"
                          >
                            <>
                              Problems trying to resolve the conflict between{" "}
                              <br />
                              the two major realms of Classical physics: <br />
                              Newtonian mechanics{" "}
                            </>
                          </Text>
                        </div>
                        <List
                          className="sm:flex-col flex-row gap-[31px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mt-[43px] w-full"
                          orientation="horizontal"
                        >
                          {new Array(3).fill({}).map((props, index) => (
                            <React.Fragment key={`HOMEPAGECard${index}`}>
                              <HOMEPAGECard
                                className="bg-white_A700 border border-gray_600_1c border-solid h-[546px] pt-[21px] relative shadow-bs w-full"
                                tag="Sale"
                                linkproductcate="Digital Cameras"
                                p49="4.9"
                                paragraphproduc="Nikon D7200 24.2 MP DX-Format Digital SLR Body with Wi-Fi and NFC (Black)(Renewed)"
                                price="$ 1,039.95"
                                priceOne="USDT"
                                paywith2000="Pay with +2000 cryptocurrencies"
                                addToCart="Add to cart"
                                buyNow="Buy Now"
                                {...props}
                              />
                            </React.Fragment>
                          ))}
                        </List>
                        <div className="font-hind h-[39px] md:h-[70px] mt-[31px] relative w-[28%]">
                          <div className="absolute flex h-full inset-[0] items-center justify-center m-auto w-[58%]">
                            <div className="flex flex-row items-center justify-between w-full">
                              <div className="h-[39px] relative w-[18%]">
                                <div className="absolute bg-yellow_A700 h-[30px] inset-[0] justify-center m-auto rounded-[50%] w-[30px]"></div>
                                <Text
                                  className="absolute font-medium h-full inset-[0] justify-center m-auto text-gray_900 text-left w-max"
                                  variant="body4"
                                >
                                  1
                                </Text>
                              </div>
                              <Text
                                className="font-medium text-gray_601 text-left w-auto"
                                variant="body4"
                              >
                                2
                              </Text>
                              <Text
                                className="font-medium text-gray_601 text-left w-auto"
                                variant="body4"
                              >
                                3
                              </Text>
                              <Text
                                className="font-medium text-gray_601 text-left w-auto"
                                variant="body4"
                              >
                                4
                              </Text>
                            </div>
                          </div>
                          <Img
                            src="images/img_arrows.svg"
                            className="absolute bottom-[15%] h-6 inset-x-[0] mx-auto w-auto"
                            alt="arrows"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <HOMEPAGEColumnSixteen
                    className="bg-white_A700 flex flex-col items-center justify-end p-[57px] md:px-10 sm:px-5 w-full"
                    h2sectiontitleFive="Meet our partners"
                    poweredby="powered by"
                  />
                </div>
              </div>
              <div className="absolute bottom-[20%] flex inset-x-[0] items-center justify-start mx-auto py-20 self-stretch w-auto md:w-full">
                <div className="flex md:flex-col flex-row gap-[52px] items-start justify-start self-stretch w-auto md:w-full">
                  <div className="flex items-center justify-start w-[32%] md:w-full">
                    <div className="flex items-center justify-start w-full">
                      <div className="flex items-end justify-start md:pl-10 sm:pl-5 pl-[43px] w-full">
                        <div className="flex sm:flex-col flex-row sm:gap-10 gap-[60px] items-center justify-end ml-auto w-full">
                          <div className="flex sm:flex-1 flex-col items-start justify-start w-auto sm:w-full">
                            <Text
                              className="font-bold font-montserrat text-left text-yellow_A700 tracking-[0.20px] w-auto"
                              variant="body12"
                            >
                              Ends Today
                            </Text>
                            <Text
                              className="font-bold font-montserrat leading-[32.00px] mt-5 text-left text-white_A700 tracking-[0.10px]"
                              variant="body4"
                            >
                              <>
                                Elements Of <br />
                                Style
                              </>
                            </Text>
                            <Text
                              className="font-futuramaxicgdemi leading-[18.00px] mt-2.5 text-left text-white_A700"
                              variant="body13"
                            >
                              <>
                                Top Ten Products of the <br />
                                Week
                              </>
                            </Text>
                            <Text
                              className="font-futuramaxicgbook mt-[21px] text-left text-yellow_A700 tracking-[-0.27px] underline w-auto"
                              variant="body9"
                            >
                              Explore Items
                            </Text>
                          </div>
                          <Img
                            src="images/img_printedsummerdress.png"
                            className="sm:flex-1 h-[445px] md:h-auto object-cover w-[52%] sm:w-full"
                            alt="printedsummerdr"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-start w-[35%] md:w-full">
                    <div className="overflow-x-auto w-full">
                      <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between overflow-auto w-full">
                        <div className="h-[460px] relative w-full">
                          <div className="bg-white_A700 flex h-full items-center justify-start my-auto w-[92%]">
                            <div className="h-[300px] relative w-full">
                              <Img
                                src="images/img_unsplashqyc13qbgam4.png"
                                className="h-[300px] m-auto object-cover w-full"
                                alt="unsplashqyc13qb"
                              />
                              <div className="absolute bg-gray_900_e2 h-[300px] inset-[0] justify-center m-auto w-full"></div>
                            </div>
                          </div>
                          <div className="absolute h-[460px] inset-[0] justify-center m-auto md:pl-10 sm:pl-5 pl-[49px] w-full">
                            <Text
                              className="font-bold mt-[142px] text-left text-yellow_A700 tracking-[0.20px] w-auto"
                              variant="body12"
                            >
                              Ends Today
                            </Text>
                            <div className="absolute h-[460px] inset-y-[0] my-auto right-[0] w-[92%] sm:w-full">
                              <div className="absolute bottom-[28%] flex items-center justify-start left-[0] w-[33%]">
                                <div className="flex flex-col items-start justify-start w-full">
                                  <Text
                                    className="font-bold font-montserrat leading-[32.00px] text-left text-white_A700 tracking-[0.10px]"
                                    variant="body4"
                                  >
                                    <>
                                      Elements Of <br />
                                      Style
                                    </>
                                  </Text>
                                  <Text
                                    className="font-futuramaxicgdemi leading-[18.00px] mt-2.5 text-left text-white_A700"
                                    variant="body13"
                                  >
                                    <>
                                      Top Ten Products of the <br />
                                      Week
                                    </>
                                  </Text>
                                  <Text
                                    className="font-futuramaxicgbook mt-[21px] text-left text-yellow_A700 tracking-[-0.27px] underline w-auto"
                                    variant="body9"
                                  >
                                    Explore Items
                                  </Text>
                                </div>
                              </div>
                              <Img
                                src="images/img_image1_1.png"
                                className="absolute h-[460px] inset-y-[0] my-auto object-cover right-[0] w-[81%]"
                                alt="printedsummerdr_One"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="bg-white_A700 flex md:flex-1 items-center justify-start md:mt-0 my-20 w-[92%] md:w-full">
                          <div className="h-[300px] relative w-full">
                            <Img
                              src="images/img_unsplashqyc13qbgam4_300x510.png"
                              className="h-[300px] m-auto object-cover w-full"
                              alt="unsplashqyc13qb_One"
                            />
                            <div className="absolute bg-gray_900_e2 h-[300px] inset-[0] justify-center m-auto w-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-start w-[32%] md:w-full">
                    <div className="flex items-center justify-start w-full">
                      <div className="flex items-end justify-start md:pl-10 sm:pl-5 pl-[49px] w-full">
                        <div className="flex sm:flex-col flex-row gap-[43px] items-center justify-end ml-auto w-full">
                          <div className="flex sm:flex-1 flex-col items-start justify-start w-auto sm:w-full">
                            <Text
                              className="font-bold font-montserrat text-left text-yellow_A700 tracking-[0.20px] w-auto"
                              variant="body12"
                            >
                              Ends Today
                            </Text>
                            <Text
                              className="font-bold font-montserrat leading-[32.00px] mt-5 text-left text-white_A700 tracking-[0.10px]"
                              variant="body4"
                            >
                              <>
                                Elements Of <br />
                                Style
                              </>
                            </Text>
                            <Text
                              className="font-futuramaxicgdemi leading-[18.00px] mt-2.5 text-left text-white_A700"
                              variant="body13"
                            >
                              <>
                                Top Ten Products of the <br />
                                Week
                              </>
                            </Text>
                            <Text
                              className="font-futuramaxicgbook mt-[21px] text-left text-yellow_A700 tracking-[-0.27px] underline w-auto"
                              variant="body9"
                            >
                              Explore Items
                            </Text>
                          </div>
                          <Img
                            src="images/img_printedsummerdress_414x248.png"
                            className="sm:flex-1 h-[414px] md:h-auto object-cover w-[55%] sm:w-full"
                            alt="printedsummerdr_Two"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HOMEPAGEPage;
