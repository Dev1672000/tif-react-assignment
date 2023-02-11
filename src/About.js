import React from "react";
import logo4 from "./images/about.svg";

const About = () => {
  return (
    <div className="absolute min-[375px]:flex-wrap max-[1440px] w-[1440px] flrex flex-row  top-[989px] left-0 rounded-none border-[2px]  ">
      <div className="h-[466px] min-[375px] max-[1440px] w-[384px]  left-[205px] top-[989px] rounded-none ">
        <img src={logo4} alt="" />
      </div>
      <div className="  ">
        <h2 className="h-[26px] w-[422px] leading-[27px] font-[600] text-[45px] text-[#0E2368] top-[989px]">
          About Us
        </h2>
        <p className="h-[138px] w-[447px] leading-[27px] font-['Open_Sans'] font-[400] text-[15px] text-[#444957] ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. t has survived not only
          five centuries.
        </p>
        <button className="leading-[36px] flex flex-row justify-center text-center text-[16px] text-[#FFFFFF] py-[0px] px-[26px] gap-[10px] w-[132px] h-[42px] bg-[#E23744] rounded-[21px]">
          Read More
        </button>
      </div>
    </div>
  );
};

export default About;
