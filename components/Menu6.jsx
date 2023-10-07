import React from "react";
import Image from "next/image";

const Menu6 = () => {
  const list1 = [
    {
      name: "ORANGE",
      price: "35 DH",
    },
    {
      name: "FRAISE",
      price: "30 DH",
    },
    {
      name: "POMME",
      price: "30 DH",
    },
    {
      name: "BANANE",
      price: "30 DH",
    },
    {
      name: "FRAMBOISE",
      price: "30 DH",
    },
    {
      name: "KAKI",
      price: "30 DH",
    },
    {
      name: "ORANGE",
      price: "30 DH",
    },
    {
      name: "AVOCAT",
      price: "30 DH",
    },
    {
      name: "MANGUE",
      price: "30 DH",
    },
    {
      name: "PAPAYE",
      price: "30 DH",
    },
    {
      name: "PECHE",
      price: "30 DH",
    },
    {
      name: "KIWI",
      price: "30 DH",
    },
    {
      name: "CITRON",
      price: "30 DH",
    },
    {
      name: "ZE3ZE3",
      price: "30 DH",
    },
    {
      name: "FRUITS SECS",
      price: "30 DH",
    },
    {
      name: "SALADE DE FRUITS",
      price: "30 DH",
    },
  ];

  const jus = [
    {
      name: "CONCOMBRE",
      price: "30DH",
    },
    {
      name: "CITROUILLE",
      price: "30DH",
    },
    {
      name: "DETOX",
      price: "30DH",
    },
    {
      name: "CAROTTE",
      price: "30DH",
    },
    {
      name: "COURGETTE",
      price: "30DH",
    },
    {
      name: "BETTERAVE",
      price: "30DH",
    },
  ];
  const milk = [
    {
      name: "FRAISE",
      price: "30DH",
    },
    {
      name: "CAFE",
      price: "30DH",
    },
    {
      name: "VANILLE",
      price: "30DH",
    },
    {
      name: "CARAMEL",
      price: "30DH",
    },
    {
      name: "CHOCOLAT",
      price: "30DH",
    },
    {
      name: "PISTACHE",
      price: "30DH",
    },
    {
      name: "NOUGAT",
      price: "30DH",
    },
    {
      name: "OREO",
      price: "30DH",
    },
  ];

  return (
    <div className="  bg-[#0D1518] lg:mt-[150px] ">
      <div className="lg:container mx-auto lg:px-5 lg:grid grid-cols-12 gap-4  relative">
        <Image
          src="/Group 5 vertical.svg"
          width={100}
          height={100}
          alt="shape"
          className="top-[52%] hidden lg:block right-14 z-10 absolute"
        />
        <Image
          src="/Group 41.svg"
          width={300}
          height={300}
          alt="shape"
          className=" z-20 absolute hidden lg:block  left-[50%] top-[390px]"
        />

        <div className="lg:hidden mt-20 ">
          <Image
            alt="glace"
            src="/_DSC4663.jpg"
            width={500}
            height={500}
            className=" overflow-hidden w-full "
            objectFit="contain"
            objectPosition="center"
          />
        </div>

        <div className="col-span-4 py-8 h-max  bg-[#ffff] px-4 lg:p-[30px]  space-y-5 z-20 lg:mt-[200px]">
          <p className="font-bernier font-[400] text-[44px]   text-primary  ">
            JUS DE FRUITS
          </p>
          <div className="space-y-3">
            {list1.map((item, index) => {
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
        </div>

        {/* img  */}
        <div className="col-span-3 hidden lg:block  w-fit overflow-hidden">
          <div className="z-10  absolute h-[323px] w-[689px] left-[15%] ">
            <Image
              src="/_DSC4663.jpg"
              fill
              objectFit="cover"
              objectPosition="center"
              className=" w-[2900px] h-[323px]  shapeMenu2 overflow-hidden"
              alt=" glace"
            />
          </div>
          <div className="z-10 absolute h-[452px] w-[543px] mt-[-40px] top-[20%] right-[45%] overflow-hidden">
            <Image
              src="/_DSC4773.jpg"
              fill
              objectFit="cover"
              objectPosition="right"
              className=" mt-[50px] w-[550px]  shapeMenu22 overflow-hidden"
              alt="plat poulet"
            />
          </div>
        </div>

        <div className="flex flex-col relative sm:mt-20">
          <div className="lg:hidden">
            <Image
              src="/_DSC4744.jpg"
              width={300}
              height={300}
              className=" w-full"
              alt=" limonade"
            />
          </div>
          <div className="col-span-5 h-fit lg:w-[500px]  lg:p-[30px] bg-[#ffff] z-20 px-4 lg:px-[30px] space-y-2 relative top-[-10%]">
            <p className="font-bernier font-[400] text-3xl leading-[51px]  text-primary">
              JUS DE LEGUMES
            </p>
            <div className="space-y-3">
              {jus.map((item, index) => {
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
            <p className="font-bernier font-[400] text-3xl leading-[51px]  text-primary pt-[25px]">
              MILKSHAKE
            </p>
            <div className="space-y-3">
              {milk.map((item, index) => {
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
            <p className="font-bernier font-[400] text-3xl leading-[51px]  text-primary pt-[25px]">
              MILKSHAKE AU CHOIX
            </p>
            <div className="space-y-3">
              <div className="text-[#808080]">
                <div className="flex relative items-center gap-1">
                  <p className="lg:text-3xl text-[26px] font-bernier text-[#0F1622] flex-shrink-0">
                    2 AROMES MAX
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
                    25DH
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-4 h-[300px] w-[500px]   lg:block hidden  overflow-hidden  relative z-10 top-[-9%] right-[40%] ">
            <div className=" absolute h-[500px] w-[500px] ">
              <Image
                src="/_DSC4661.jpg"
                fill
                alt="glace"
                objectFit="cover"
                objectPosition="bottom"
                className="overflow-hidden lastImg"
              />
            </div>
          </div>
          {/* meun img */}

          <div className="mt-20 lg:mt-0">
            <Image
              src="/_DSC4680.jpg"
              width={400}
              height={400}
              alt="glace"
              className="w-full"
            />
          </div>
          <div className=" lg:mb-0 mb-20 h-fit lg:w-[500px] lg:p-[30px] bg-[#ffff] z-20  relative top-[-20%] p-4 lg:px-[30px] space-y-2 lg:space-y-[30px]">
            <p className="font-bernier font-400 text-[44px]   text-primary ">
              THÉ
            </p>
            <div className="space-y-3">
              <div className="text-[#808080]">
                <div className="flex relative items-center gap-1">
                  <p className="lg:text-3xl text-[26px] font-bernier text-[#0F1622] flex-shrink-0">
                    THÉ
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
                    10DH
                  </p>
                </div>
              </div>
            </div>
            <p className="font-bernier font-[400] text-3xl   text-primary">
              GLACES
            </p>

            <div className="space-y-4">
              <div className="text-[#808080]">
                <div className="flex relative items-center gap-1">
                  <p className="lg:text-3xl text-[26px] font-bernier text-[#0F1622] flex-shrink-0">
                    BOUlE DE GLACE AU CHOIX
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
                    30DH
                  </p>
                </div>
                <p className="font-poppins text-sm lg:text-base">
                  {" "}
                  Fraise, Chocolat, Pistache, Vanille, Café, Caramel, Oreo
                </p>
              </div>
            </div>
            <p className="font-bernier font-[400] text-3xl   text-primary">
              SUNDAE
            </p>

            <div className="space-y-3">
              <div className="text-[#808080]">
                <div className="flex relative items-center gap-1">
                  <p className="lg:text-3xl text-[26px] font-bernier text-[#0F1622] flex-shrink-0">
                    Chocolat, fraise, caramel
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
                    30DH
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu6;
