import React from "react";

import { Text, Img } from "components";

const HOMEPAGEColumnSixteen = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[38px] items-center justify-start mt-6 w-[99%] md:w-full">
          <Text
            className="font-bold font-montserrat text-bluegray_900 text-center tracking-[0.20px] w-auto"
            as="h6"
            variant="h6"
          >
            {props?.h2sectiontitleFive}
          </Text>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
            <Img
              src="images/img_image2_110x499.png"
              className="md:flex-1 h-[110px] sm:h-auto object-cover w-[34%] md:w-full"
              alt="imageTwo"
            />
            <Img
              src="images/img_image3.png"
              className="md:flex-1 h-[69px] sm:h-auto ml-7 md:ml-[0] md:mt-0 mt-[25px] object-cover w-1/4 md:w-full"
              alt="imageThree"
            />
            <div className="md:h-[120px] h-[123px] relative w-[18%] md:w-full">
              <Img
                src="images/img_image1_120x124.png"
                className="absolute h-[120px] inset-y-[0] left-[0] my-auto object-cover w-[47%]"
                alt="imageOne"
              />
              <Img
                src="images/img_image4.png"
                className="absolute h-[120px] inset-y-[0] my-auto object-cover right-[0] w-[54%]"
                alt="imageFour"
              />
            </div>
            <div className="h-[65px] md:ml-[0] ml-[58px] md:mt-0 mt-[27px] relative w-[18%] md:w-full">
              <Img
                src="images/img_bcombinator1.png"
                className="h-[65px] m-auto object-cover w-full"
                alt="bcombinatorOne"
              />
              <Text
                className="absolute font-futuramaxicgdemi left-[31%] text-gray_601 text-left top-[17%] w-auto"
                as="h2"
                variant="h2"
              >
                {props?.poweredby}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

HOMEPAGEColumnSixteen.defaultProps = {
  h2sectiontitleFive: "Meet our partners",
  poweredby: "powered by",
};

export default HOMEPAGEColumnSixteen;
