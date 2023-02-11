import React from "react";
import logo1 from "./images/logo.svg";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
const Footer = () => {
  return (
    <div className="min-[375px] max-[1440px] flex flex-row justify-evenly absolute w-[1440px] h-[362px] left-0 top-[2451px] not-italic  bg-[#F8F8F8]   font-[Source_Sans_Pro]  mt-[20px] pt-[10px]  ">
      <div>
        <img src={logo1} alt="logo" className="" />
      </div>
      <div className="">
        <h1 className="text-[#0E2368]  font-semibold  tracking-[0.03em] not-italic  leading-[27px]  text-[18.8433px] h-[27px] w-[285px] ">
          Contact Us
        </h1>
        <address className="text-[#646874] flex flex-col not-italic  leading-[27px]  text-[14.6559px] font-[Source_Sans_Pro] m-[5px]">
          <p>
            Lorem Ipsum Pvt Ltd.5/1, Magalton <br />
            Road, Phartosh Gate
            <br /> near YTM Market, <br />
            XYZ-343434
          </p>
          <a href="mailto:example2020@gmail.com">example2020@gmail.com</a>
          <div className="">
            <input
              type="tel"
              disabled
              name="Mobile"
              value="(904) 443-0343"
              id=""
            />
          </div>
        </address>
      </div>
      <div className="flex flex-col place-content-start left-0 not-italic font-[Source_Sans_Pro]">
        <h2 className="text-[#0E2368]  font-semibold left-0 tracking-[0.03em] not-italic  leading-[27px]  text-[18.8433px] h-[27px] w-[285px] ">
          More
        </h2>
        <div className=" text-[#646874]   not-italic  leading-[27px]  text-[14.6559px] font-[Source_Sans_Pro] m-[5px] ">
          <p>About Us</p>
          <p>Carrer</p>
          <p>Contact Us</p>
        </div>
      </div>
      <div className="flex flex-col not-italic font-[Source_Sans_Pro]">
        <h1 className="text-[#0E2368]  font-semibold  tracking-[0.03em] not-italic  leading-[27px]  text-[18.8433px] h-[27px] w-[285px] ">
          Social Links
        </h1>
        <span className="text-[#646874]  not-italic  leading-[27px]  text-[14.6559px] font-[Source_Sans_Pro] m-[5px]">
          <a href="/">
            {" "}
            <FacebookIcon />
          </a>
          <a href="/">
            <InstagramIcon />
          </a>
          <a href="/">
            <TwitterIcon />
          </a>
        </span>
        <p>&copy; 2022 Food Truck Example</p>
      </div>
    </div>
  );
};

export default Footer;
