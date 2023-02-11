import React from "react";
import logo1 from "./images/logo.svg";
import logo2 from "./images/pizza.svg";
import logo3 from "./images/vector.svg";

const Home = () => {
  return (
    <div className="min-[375px] max-[1440px] h-[804px] w-[1440px] absolute left-0 top-0 bg-[#FFFFFF] ">
      <div className="flex flex-row   h-[804px] w-[1440px] left-[0px] top-[0px] rounded-none ">
        <div className=" ml-[100px] mt-[10px] p-28">
          <div className="top-[33px] mb-[70px] left-[100px] ">
            <img src={logo1} alt="logo" />
          </div>
          <div className=" text-justify">
            <div className="mt-[20px] mb-[20px] font-sans text-[62px] top-[227px] tracking-3 text-[#0E2368] not-italic leading-[69px] font-[700]  ">
              Discover the
              <em className="text-[#E23744] not-italic "> Best</em>
              Food and Drinks
            </div>
            <p className="h-[55px] mt w-[345px] left-[100px] top-[460px] rounded-none">
              Naturally made Healthcare Products for the better care & support
              of your body.
            </p>
            <button className="w-[190px] h-[63px] mt-[30px] top-[556px] font-[700] left-[97px] px-[34px] py-[14px] bg-[#E23744] text-[#FFFFFF] border-solid border-2 rounded-[34px] border-white">
              Explore Now!
            </button>
          </div>
        </div>

        <div className="h-[839px] w-[752px] ml-[15px] left-[688px] top-[0px] rounded-none">
          <div className="flex h-[804px] w-[735px] left-[705px]  top-[5px]">
            <img src={logo2} alt="logo" className="absolute " />
            <img src={logo3} alt="logo" className="absolute  " />
            <div className="flex justify-evenly">
              <button className="z-10 mt-[35px] ml-[600px] pb-[5px] mr-[53px] h-[36px] w-[120px] not-italic text-[16px] leading-[36px] font-[600] right-[100px] m-[10px]font-[Source_Sans_Pro]  top-[0px] bg-[#E23744] text-[#FFFFFF] border-solid border-2 rounded-[40px] border-white  ]">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
