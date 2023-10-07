import Image from "next/image";
import React from "react";

export default function Main() {
  return (
    <div className="h-[793px] bg-[#0B0E11] relative ">
      <Image
        src="/Group 51.svg"
        width={212}
        height={111}
        alt="shape"
        className="absolute right-0 top-[10%] lg:w-[212] w-[150px]"
      />
      <div className="md:container w-full mx-auto lg:px-10 mt-[100px] lg:mt-[90px] ">
        <div className="flex flex-col justify-center items-center gap-5 mb-[75px]  mt-[40px] text-center">
          <p className=" text-primary font-normal leading-normal text-[44px] mt-[96px] font-bernier">
            Decouvrez
          </p>
          <p className="text-[#FFF] text-[36px]  font-[600] leading-normal font-poppins px-4">
            Notre cuisine spéciale
          </p>
        </div>

        <div className="grid lg:grid-cols-2  lg:grid-rows-2  gap-y-10 lg:gap-x-5 md:justify-items-center  grid-cols-1">
          <div className="lg:h-[200px] h-fit md:w-full w-[100%]  bg-[#0D1518]  text-primary flex items-center md:gap-5  frstCont  ">
            <div className="md:flex md:flex-row md:gap-5 flex-col   justify-center md:py-0 md:px-0  py-10 px-4">
              <div className="md:ml-20 mx-auto  md:justify-center md:flex ">
                <Image
                  src="/Layer 2(1).svg"
                  // Layer 2.svg
                  width={60}
                  alt="food icon"
                  height={60}
                  className="w-[60px] mb-[20px] h-[60px] "
                />
              </div>
              <div className="md:flex md:flex-col md:col md:w-[70%] md:pr-[100px] mt-2 space-y-4 w-[100%] mx-auto px-1 ">
                <p className=" text-primary font-poppins text-[22px] font-600 leading-600 text-left md:text-left">
                  Poulet
                </p>
                <p className="text-[14px] font-400 leading-[26px] font-poppins text-[#808080]">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium
                </p>
              </div>
            </div>
          </div>
          <div className="lg:h-[200px] h-fit md:w-full w-[100%] bg-[#0D1518]  text-primary flex items-center md:gap-5   scdCont">
            <div className="md:flex md:flex-row md:gap-5 flex-col  justify-center md:py-0 md:px-0  py-10 px-4 ">
              <div className="md:ml-20 md:justify-center md:flex">
                <Image
                  src="/Vector.svg"
                  width={60}
                  alt="food icon"
                  height={60}
                  className="w-[60px] h-[60px]"
                />
              </div>
              <div className="md:flex md:flex-col md:col md:w-[70%] md:pr-[100px] mt-2 space-y-4 w-[100%] mx-auto px-1 ">
                <p className=" text-primary font-poppins text-[22px] font-600 leading-600 text-left md:text-left">
                  Sandwich
                </p>
                <p className="text-[14px] font-400 leading-[26px] font-poppins text-[#808080]">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium
                </p>
              </div>
            </div>
          </div>
          <div className="lg:h-[200px] h-fit md:w-full w-[100%] bg-[#0D1518]  text-primary flex items-center md:gap-5   scdCont">
            <div className="md:flex md:flex-row md:gap-5 flex-col  justify-center md:py-0 md:px-0  py-10 px-4">
              <div className="md:ml-20 md:justify-center md:flex">
                <Image
                  src="/Group.svg"
                  //
                  // Group.svg
                  width={60}
                  alt="food icon"
                  height={60}
                  className="w-[60px] h-[60px]"
                />
              </div>
              <div className="md:flex md:flex-col md:col md:w-[70%] md:pr-[100px] mt-2 space-y-4 w-[100%] mx-auto px-1 ">
                <p className=" text-primary font-poppins text-[22px] font-600 leading-600 text-left md:text-left">
                  Salade
                </p>
                <p className="text-[14px] font-400 leading-[26px] font-poppins text-[#808080]">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium
                </p>
              </div>
            </div>
          </div>
          <div className="lg:h-[200px] h-fit md:w-full w-[100%] bg-[#0D1518]  text-primary flex items-center md:gap-5  frstCont ">
            <div className="md:flex md:flex-row md:gap-5 flex-col  justify-center md:py-0 md:px-0  py-4 px-4 ">
              <div className="md:ml-20 md:justify-center md:flex">
                <Image
                  src="/Layer 2.svg"
                  width={60}
                  alt="food icon"
                  height={60}
                  className="w-[60px] h-[60px]"
                />
              </div>
              <div className="md:flex md:flex-col md:col md:w-[70%] md:pr-[100px] mt-2 space-y-4 w-[100%] mx-auto px-1 ">
                <p className=" text-primary font-poppins text-[22px] font-600 leading-600 text-left md:text-left">
                  Assiettes
                </p>
                <p className="text-[14px] font-400 leading-[26px] font-poppins text-[#808080]">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
