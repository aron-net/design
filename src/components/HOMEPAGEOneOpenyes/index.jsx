import React from "react";

import { Text, Line } from "components";

const HOMEPAGEOneOpenyes = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex items-start justify-start self-stretch w-auto">
          <div className="flex flex-col gap-4 items-start justify-start w-[186px]">
            <Text
              className="font-medium font-poppins text-center text-yellow_A701 w-auto"
              variant="body11"
            >
              {props?.label}
            </Text>
            <Line className="bg-yellow_A701 h-0.5 w-full" />
          </div>
        </div>
        <div className="flex items-start justify-start rounded-bl-lg rounded-br-lg rounded-tl-none rounded-tr-none shadow-bs3 w-[187px]">
          <div className="bg-gray_900 flex flex-col gap-4 items-end justify-start pb-6 md:pl-10 pl-12 pr-6 pt-10 sm:px-5 rounded-bl-lg rounded-br-lg rounded-tl-none rounded-tr-none self-stretch w-auto">
            <div className="flex items-center justify-start self-stretch w-auto">
              <Text
                className="font-normal font-poppins not-italic text-left text-yellow_A701 w-auto"
                variant="body11"
              >
                {props?.labelOne}
              </Text>
            </div>
            <div className="flex items-center justify-start self-stretch w-auto">
              <Text
                className="font-normal font-poppins not-italic text-left text-white_A700 w-auto"
                variant="body11"
              >
                {props?.labelFour}
              </Text>
            </div>
            <div className="flex items-center justify-start self-stretch w-auto">
              <Text
                className="font-normal font-poppins not-italic text-left text-white_A700 w-auto"
                variant="body11"
              >
                {props?.labelFour}
              </Text>
            </div>
            <div className="flex items-center justify-start self-stretch w-auto">
              <Text
                className="font-normal font-poppins not-italic text-left text-white_A700 w-auto"
                variant="body11"
              >
                {props?.labelFour}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

HOMEPAGEOneOpenyes.defaultProps = {
  label: "¡Hi Jeniffer Hurtado!",
  labelOne: "Account Details",
  labelTwo: "Logout",
  labelThree: "Logout",
  labelFour: "Logout",
};

export default HOMEPAGEOneOpenyes;
