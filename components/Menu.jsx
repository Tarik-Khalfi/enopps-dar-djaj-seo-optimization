import React from "react";
import Image from "next/image";
const Menu = () => {
  return (
    <section className="bg-[#0D1518]  lg:py-20">
      <div className="lg:container relative flex lg:flex-row flex-col-reverse justify-between lg:items-center">
        <div className="bg-white clipo2 py-10  px-4 lg:px-14 z-50 space-y-10 ">
          <p className="text-primary  text-4xl font-bernier font-semibold">
            Heures d&apos;ouvertures
          </p>
          <div className="text-[#808080] font-poppins   space-y-4">
            <div className="flex justify-between">
              <p className="font-medium    text-xl text-black">Lundi</p>
              <span>9:00 - 23:00</span>
            </div>
            <div className="flex lg:w-[20dvw] justify-between">
              <p className="font-medium  text-xl text-black">Mardi</p>
              <span>9:00 - 23:00</span>
            </div>
            <div className="flex justify-between">
              <p className="font-medium  text-xl text-black">Mercredi</p>
              <span>9:00 - 23:00</span>
            </div>
            <div className="flex justify-between">
              <p className="font-medium  text-xl text-black">Jeudi</p>
              <span>9:00 - 23:00</span>
            </div>
            <div className="flex justify-between">
              <p className="font-medium  text-xl text-black">Vendredi</p>
              <span>9:00 - 23:00</span>
            </div>
            <div className="flex justify-between">
              <p className="font-medium  text-xl text-black">Samedi</p>
              <span>9:00 - 23:00</span>
            </div>
            <div className="flex justify-between">
              <p className="font-medium  text-xl text-black">Dimanche</p>
              <span>9:00 - 23:00</span>
            </div>
          </div>
        </div>
        <div className="hidden lg:block relative lg:right-32  space-y-6">
          <Image
            alt="plat poulet"
            src="/_DSC4817.jpg"
            width={400}
            height={400}
            className="w-[700px] clipo3"
          />
          <Image
            alt="salade"
            src="/_DSC4776.jpg"
            width={400}
            height={400}
            className="w-[700px] clipo4"
          />
        </div>
        <div className="relative lg:right-[102px] mt-20  z-10">
          <Image
            alt="shape"
            src="/Group 5.png"
            width={400}
            height={400}
            className="w-[300px] h-[100px] z-20 absolute -rotate-[45deg] -left-[140px] "
          />
          <Image
            alt="shape"
            src="/_DSC4819.jpg"
            width={400}
            height={400}
            className="lg:w-[500px] mt-5 m-auto clipo "
          />
          <Image
            src="/Group 284.png"
            width={250}
            height={300}
            className=" absolute lg:-right-20 sm:-z-10 -bottom-10 rotate-[270deg]   "
            alt="shape"
          />
        </div>
      </div>
    </section>
  );
};

export default Menu;
