import React from "react";
import Image from "next/image";

const Menu3 = () => {
  const list = [
    {
      name: "POULET ENTIER",
      price: "140 dh",
      description:
        "Poulet rôti (accompagné de riz , frites sauce tomate cerise et sauce poulet)",
    },
    {
      name: "POULET 1/2",
      price: "70 dh",
      description:
        "Poulet rôti (accompagné de riz, frites sauce tomate cerise et sauce poulet)",
    },
    {
      name: "POULET 1/4",
      price: "35 dh",
      description:
        "Poulet rôti (accompagné de riz, frites sauce tomate cerise et sauce poulet)",
    },
    {
      name: "ESCALOPE DE POULET",
      price: "49 dh",
      description:
        "Accompagné paella, salade marocaine sauce tomate et sauce poulet, frites",
    },
    {
      name: "EMINCÉ DE POULET",
      price: "55 dh",
      description:
        "Accompagné paella, salade marocaine sauce tomate et sauce poulet, frites",
    },
    {
      name: "BROCHETTES DE POULET",
      price: "35 dh",
      description: "accompagné salade marocaine sauce tomate et frites",
    },
  ];
  return (
    <section className=" relative py-20">
      <div className="lg:container relative  lg:flex-row flex-col  flex justify-between ">
        <div className="hidden lg:block mb-10 space-y-2">
          <div className="  relative  gap-9  left-[280px] items-end flex   ">
            <Image
              alt="poulet braisé"
              src="/_DSC4795.jpg "
              width={400}
              height={400}
              className="w-[423px] h-[300px]  clipo6"
            />
            <Image
              alt="menu poulet"
              src="/menu_poulet.jpg"
              width={400}
              height={400}
              className="w-[700px]  clipo3"
            />
          </div>

          <div className=" relative z-20 h-auto ml-20  ">
            <Image
              alt="shape"
              src="/Group 5.png"
              width={400}
              height={400}
              className="w-[300px] h-[100px] z-50 absolute -rotate-[39deg] -top-[49px] left-[48%] "
            />
            <div className=" h-[550px]  clipo7 ">
              <Image
                alt="Plat familliale"
                src="/_DSC4805.jpg"
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
              className=" absolute -left-[63px]  -bottom-[79px]  "
              alt="shape"
            />
          </div>
        </div>
        <div className="lg:hidden ">
          <Image
            alt="plat familliaie"
            src="/_DSC4805.jpg"
            width={500}
            height={500}
            className="  overflow-hidden w-full "
            objectFit="contain"
            objectPosition="center"
          />
        </div>
        <div className="bg-white  py-8 h-fit lg:mt-[290px] px-4 lg:px-[30px] z-50 space-y-6   ">
          <p className="text-primary opacity-90 text-[44px] font-bernier">
            ASSIETTES
          </p>
          <div className="space-y-3 ">
            {list.map((item, index) => {
              return (
                <div className="text-[#808080]" key={index}>
                  <div className="flex relative items-center gap-1">
                    <p className="lg:text-3xl text-[26px] font-bernier text-[#0F1622] flex-shrink-0">
                      {item.name}
                    </p>
                    <div className="relative w-full text-center h-[5px]">
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
        </div>
      </div>
    </section>
  );
};

export default Menu3;
