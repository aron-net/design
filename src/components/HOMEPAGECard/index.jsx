import React from "react";

import { Img, Text, Button } from "components";

const HOMEPAGECard = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-[300px] md:h-[NaNpx] mt-[-NaNpx] mx-auto w-full z-[1]">
          <Img
            src="images/img_image1_1.png"
            className="absolute h-[300px] inset-[0] justify-center m-auto object-cover w-full"
            alt="productcoverFive"
          />
          <Text
            className="absolute bg-red_600 font-bold font-montserrat justify-center left-[7%] px-2.5 rounded-[3px] self-stretch text-center text-shadow-ts text-white_A700 top-[0] tracking-[0.20px] w-auto"
            variant="body12"
          >
            {props?.tag}
          </Text>
          <div className="absolute bottom-[29%] flex flex-row gap-[11px] items-center justify-center right-[34%] w-[21%]">
            <Button className="bg-white_A700 flex h-[30px] items-center justify-center p-1.5 rounded-[50%] w-[30px]">
              <Img src="images/img_map.svg" className="h-[18px]" alt="map" />
            </Button>
            <Img
              src="images/img_eye.svg"
              className="h-[30px] rounded-[50%] w-[30px]"
              alt="eye"
            />
          </div>
        </div>
        <div className="flex items-center justify-start mt-[-49px] mx-auto pb-[35px] pt-[25px] sm:px-5 px-[25px] w-[348px] md:w-full z-[1]">
          <div className="flex flex-col items-start justify-start w-full">
            <div className="flex flex-row gap-2.5 items-center justify-between w-full">
              <div className="flex items-center justify-start self-stretch w-auto">
                <Text
                  className="font-futuramaxicgdemi text-gray_601 text-left w-auto"
                  variant="body13"
                >
                  {props?.linkproductcate}
                </Text>
              </div>
              <Button
                className="bg-purple_900 cursor-pointer flex items-center justify-center min-w-[50px] p-[5px] rounded-[13px] w-auto"
                leftIcon={
                  <Img
                    src="images/img_star.svg"
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
              className="font-futuramaxicgdemi leading-[18.00px] mt-2.5 text-gray_900 text-left w-[94%] sm:w-full"
              variant="body13"
            >
              {props?.paragraphproduc}
            </Text>
            <div className="md:h-10 h-[30px] mt-[19px] relative w-[52%]">
              <div className="absolute flex items-center justify-start left-[0] top-[0] w-[84%]">
                <div className="flex flex-row items-center justify-evenly w-full">
                  <div className="flex items-center justify-start w-auto">
                    <Text
                      className="font-futuramaxicgbold text-left text-purple_900 w-auto"
                      variant="body6"
                    >
                      {props?.price}
                    </Text>
                  </div>
                  <div className="flex items-center justify-start w-[21px]">
                    <Img
                      src="images/img_arrowdown.svg"
                      className="h-5 rounded-[50%] w-[21px]"
                      alt="arrowdown"
                    />
                  </div>
                </div>
              </div>
              <Text
                className="absolute font-futuramaxicgdemi right-[0] text-gray_600_a0 text-left top-[10%] w-auto"
                variant="body14"
              >
                {props?.priceOne}
              </Text>
              <Text
                className="absolute bottom-[0] font-futuramaxicgdemi left-[0] text-gray_600_a0 text-left w-auto"
                as="h3"
                variant="h3"
              >
                {props?.paywith2000}
              </Text>
            </div>
            <div className="flex flex-row items-center justify-between mt-8 w-full">
              <Button
                className="border border-gray_900 border-solid cursor-pointer flex items-center justify-center min-w-[143px] px-5 py-2.5 rounded-[21px] w-auto"
                leftIcon={
                  <Img
                    src="images/img_cart.svg"
                    className="mb-0.5 mr-1"
                    alt="cart"
                  />
                }
              >
                <div className="font-bold font-montserrat text-gray_900 text-left text-sm tracking-[0.20px]">
                  {props?.addToCart}
                </div>
              </Button>
              <Button className="bg-yellow_A700 cursor-pointer font-bold font-montserrat min-w-[108px] px-5 py-2.5 rounded-[21px] text-center text-gray_901 text-sm tracking-[0.20px] w-auto">
                {props?.buyNow}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

HOMEPAGECard.defaultProps = {
  tag: "Sale",
  linkproductcate: "Digital Cameras",
  p49: "4.9",
  paragraphproduc:
    "Nikon D7200 24.2 MP DX-Format Digital SLR Body with Wi-Fi and NFC (Black)(Renewed)",
  price: "$ 1,039.95",
  priceOne: "USDT",
  paywith2000: "Pay with +2000 cryptocurrencies",
  addToCart: "Add to cart",
  buyNow: "Buy Now",
};

export default HOMEPAGECard;
