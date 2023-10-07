import React from "react";
import Image from "next/image";

const Menu1 = () => {
  const list = [
    {
      name: "Salade dar d’jaj",
      price: "35 dh",
      description: "Poulet rôti, riz, maïs",
    },
    {
      name: "Salade niçoise",
      price: "35 dh",
      description:
        "Pomme de terre, betterave, carotte, riz, thon, oeuf , concombre, olive",
    },
    {
      name: "Salade de thon",
      price: "22 dh",
      description: "Poulet rôti, riz, maïs",
    },
    {
      name: "Salade Marocaine",
      price: "35 dh",
    },
  ];
  return (
    <section className="bg-[#0D1518] pt-20  lg:py-[140px]">
      <div className="lg:container lg:flex justify-between items-center">
        <div className="lg:hidden">
          <Image
            alt="saladde nicoise"
            src="/_DSC4694.jpg"
            width={400}
            height={400}
            className="w-[700px] clipo4"
          />
        </div>
        <div className="bg-white  py-8 px-4 lg:px-[30px] z-50 space-y-8 ">
          <p className="text-primary opacity-90 text-[44px] font-bernier">
            Salade
          </p>
          <div className="space-y-3">
            {list.map((item, index) => {
              return (
                <div className="text-[#808080]" key={index}>
                  <div className="flex relative items-center gap-1">
                    <p className="lg:text-3xl text-[26px] font-bernier text-[#0F1622] flex-shrink-0">
                      {item.name}
                    </p>
                    <div className="relative w-full h-[5px]">
                      <Image
                        src="/Vector 24.svg"
                        fill
                        className="object-contain"
                        alt="shape"
                      />
                    </div>
                    <p className=" text-primary  font-bernier text-[26px] flex-shrink-0">
                      {item.price}
                    </p>
                  </div>
                  <p className="font-poppins text-sm lg:text-base">
                    {item?.description}
                  </p>
                </div>
              );
            })}
          </div>
          <p className=" text-primary text-2xl font-bernier ">
            composez votre salade à 45 dh
          </p>
        </div>
        <div className="hidden lg:block relative right-32  space-y-6">
          <Image
            alt="salade"
            src="/_DSC4668.jpg"
            width={400}
            height={400}
            className="w-[700px] clipo3 "
          />
          <Image
            alt="salade"
            src="/_DSC4694.jpg"
            width={400}
            height={400}
            className="w-[700px] clipo4"
          />
        </div>
        <div className="hidden lg:block relative right-[102px] py-10  z-10">
          <Image
            alt="shape"
            src="/Group 5.png"
            width={400}
            height={400}
            className="w-[300px] h-[100px] z-20 absolute rotate-[35deg] top-[45%] -left-[140px] "
          />
          <div className="h-[600px] w-[450px] mt-5 clipo ">
            <Image
              alt="salade"
              src="/_DSC4688.jpg"
              fill
              className=" overflow-hidden"
              objectFit="contain"
              objectPosition="center"
            />
          </div>
          <Image
            src="/Group 284.png"
            width={250}
            height={300}
            className=" absolute -right-20 -bottom-10 rotate-[270deg]   "
            alt="shape"
          />
        </div>
      </div>
    </section>
  );
};

export default Menu1;
