import React, { Component } from "react";
import logo5 from "./images/tomato.svg";
import logo6 from "./images/meal.svg";
import logo7 from "./images/grilled-tomatoes.svg";
// import Pagination from "./Pagination";
// import ReactPaginate from "react-paginate";
// import Pagination from "react-js-pagination";
// import ReactDOM from "react-dom";

// const LatestArticles = () => {
class LatestArticles extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     activePage: 2,
  //   };
  // }

  // handlePageChange(pageNumber) {
  //   console.log(`active page is ${pageNumber}`);
  //   this.setState({ activePage: pageNumber });
  // }
  render() {
    return (
      <>
        <div className="min-[375px]:flex-wrapS max-[1440px] w-[1440px]   absolute top-[1700px] bg-[#FFFFFF]  left-0 ">
          <h1 className="text-[#0E2368] text-[56px] mb-[40px] flex ml-[165px] content-start  tracking-[0.04em] leading-[42px]  font-[Source_Sans_Pro] ">
            Latest Articles
          </h1>
          <div className="flex flex-row justify-items-center justify-center w-full  ">
            <div className="border-[1.37039px] border-solid border-[#93a2d361] rounded-[20.937px] m-[10px] p-[10px] h-[554px] w-[381px] left-[108PX] top-[1739px] box-border bg-[#FFFFFF] ">
              <img src={logo5} alt="logo" className="" />
              <div className=" text-justify p-[5px] m-[5px] gap-x-8 gap-y-4 left-0 top-[41px] border-none flex-none flex-grow-0 ">
                <h1 className="text-[#0E2368] font-bold not-italic order-0 leading-[27px] order-1 text-[21px] h-[27px] w-[285px] font-Poppins  ">
                  Grilled Tomatoes at Home
                </h1>
                <p className="mr-[40px] w-[295px] h-[81px] order-1 tracking-[-0.02em] not-italic flex-none flex-grow-0  text-[15px] leading-[27px] font-['Open_Sans']  text-[#444957] font-[400] ">
                  PLorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard...
                </p>
                <button className="leading-[36px] flex flex-row justify-center text-center text-[16px]  py-[0px] px-[26px] gap-[10px] w-[132px] h-[42px]  rounded-[21px] border-[1.37039px] not-italic font-['Source_Sans_Pro']  border-solid border-[#93a2d361] text-[#424961] font-semibold  m-[5px]  bg-[#FFFFFF]  border-[#424961] ">
                  Read More
                </button>
              </div>
            </div>

            <div className="border-[1.37039px] border-solid border-[#93a2d361] rounded-[21px] m-[10px] p-[10px] h-[554px] w-[381px] left-[108PX] top-[1739px] box-border bg-[#FFFFFF] ">
              <img src={logo6} alt="logo" className="" />
              <div className=" text-justify p-[5px] m-[5px] gap-x-8 gap-y-4 left-0 top-[41px] border-none flex-none flex-grow-0 ">
                <h1 className="text-[#0E2368] font-bold not-italic order-0 leading-[27px] order-1 text-[21px] h-[27px] w-[285px] font-Poppins">
                  Snacks for Travel
                </h1>
                <p className="mr-[40px] w-[295px] h-[81px] order-1 tracking-[-0.02em] not-italic flex-none flex-grow-0  text-[15px] leading-[27px] font-['Open_Sans']  text-[#444957] font-[400]">
                  PLorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard...
                </p>
                <button className="leading-[36px] flex flex-row justify-center text-center text-[16px]  py-[0px] px-[26px] gap-[10px] w-[132px] h-[42px]  rounded-[21px] border-[1.37039px] not-italic font-['Source_Sans_Pro']  border-solid border-[#93a2d361] text-[#424961] font-semibold  m-[5px]  bg-[#FFFFFF]  border-[#424961]">
                  Read More
                </button>
              </div>
            </div>
            <div className="border-[1.37039px] border-solid border-[#93a2d361] rounded-[21px] m-[10px] p-[10px] h-[554px] w-[381px] left-[108PX] top-[1739px] box-border bg-[#FFFFFF]">
              <img src={logo7} alt="logo" className="" />
              <div className=" text-justify p-[5px] m-[5px] gap-x-8 gap-y-4 left-0 top-[41px] border-none flex-none flex-grow-0 ">
                <h1 className="text-[#0E2368] font-bold not-italic order-0 leading-[27px] order-1 text-[21px] h-[27px] w-[285px] font-Poppins">
                  Post-workout Recipes
                </h1>
                <p className="mr-[40px] w-[295px] h-[81px] order-1 tracking-[-0.02em] not-italic flex-none flex-grow-0  text-[15px] leading-[27px] font-['Open_Sans']  text-[#444957] font-[400]">
                  PLorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard...
                </p>
                <button className="leading-[36px] flex flex-row justify-center text-center text-[16px]  py-[0px] px-[26px] gap-[10px] w-[132px] h-[42px]  rounded-[21px] border-[1.37039px] not-italic font-['Source_Sans_Pro']  border-solid border-[#93a2d361] text-[#424961] font-semibold  m-[5px]  bg-[#FFFFFF]  border-[#424961]">
                  Read More
                </button>
              </div>
            </div>
            <div>
              {/* <Pagination
                activePage={this.state.activePage}
                itemsCountPerPage={3}
                totalItemsCount={6}
                pageRangeDisplayed={3}
                onChange={this.handlePageChange.bind(this)}
              /> */}
            </div>
          </div>
        </div>
      </>
    );
  }
}
// ReactDOM.render(<LatestArticles />, document.getElementById("root"));
export default LatestArticles;
