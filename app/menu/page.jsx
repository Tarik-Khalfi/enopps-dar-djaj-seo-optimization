import { HeaderProp, Nav } from "@/components";
import { Menu1, Menu2, Menu3 } from "@/components/AllMenu";
import Menu6 from "@/components/Menu6";
import Image from "next/image";

const page = () => {
  const list = [
    {
      name: "Sandwich poulet",
      price: "35 dh",
    },
    {
      name: "Tacos dar d’jaj",
      price: "30 dh",
    },
    {
      name: "SANDWICH TANDORI",
      price: "30 dh",
    },
    {
      name: "SANDWICH CURRY",
      price: "30 dh",
    },
    {
      name: "SANDWICH PARIKA",
      price: "30 dh",
    },
    {
      name: "SANDWICH VIANDE HACHÉE",
      price: "37 dh",
    },
    {
      name: "SANDWICH MERGUEZ POULET",
      price: "35 dh",
    },
    {
      name: "SANDWICH MERGUEZ VIANDE",
      price: "36 dh",
    },
    {
      name: "SANDWICH DAR D’JAJ",
      price: "55 dh",
    },
  ];

  const list2 = [
    {
      name: "DAR D’JAJ",
      price: "30 dh",
      description: "1 Cuisse",
    },
    {
      name: "BUCKET MIX",
      price: "47 dh",
      description: "1 Cuisse, 6 Wings",
    },
    {
      name: "BUCKET XL",
      price: "95 dh",
      description: "1 Cuisse, 6 Wings, 4 Tenders",
    },
    {
      name: "BUCKET XXL",
      price: "110 dh",
      description: "1 Cuisse, 12 Wings (6 spicy +6 classic) , 4 Tenders",
    },
    {
      name: "BUCKET XXXL",
      price: "199 dh",
      description:
        "1 Cuisse, 18 Wings (6 spicy +6 classic ), 6 Tenders, 4 nuggets",
    },
  ];
  const list3 = [
    {
      name: "WINGS CLASSIC",
      price: "25 DH",
      description: "base chaplure",
    },
    {
      name: "WINGS 6 PC BUFFALO",
      price: "30 DH",
      description: "ACCOMPAGNÉ SAUCE AMÉRICAINE",
    },
    {
      name: "WINGS MENU",
      price: "30 dh",
      description: "ACCOMPAGNÉ SAUCE BBQ OU SPICY",
    },
    {
      name: "WINGS BUFFALO MENU",
      price: "35 DH",
      description: "ACCOMPAGNÉ SAUCE BBQ OU SPICY",
    },
  ];
  const list4 = [
    {
      name: "TENDERS SPICY",
      price: "25 dh",
      description: "base chaplure",
    },
    {
      name: "TENDERS BARBECUE",
      price: "25 dh",
      description:
        "ACCOMPAGNÉ PAELLA, SALADE MAROCAINE SAUCE TOMATE, SAUCE POULET, FRITES",
    },
    {
      name: "TENDERS MIEL",
      price: "25 dh",
      description:
        "ACCOMPAGNÉ PAELLA, SALADE MAROCAINE SAUCE TOMATE, SAUCE POULET, FRITES",
    },
  ];
  const list5 = [
    {
      name: "ORANGE",
      price: "13 dh",
    },
    {
      name: "FRAISE",
      price: "15 dh",
    },
    {
      name: "POMME",
      price: "15 dh",
    },
    {
      name: "BANANE",
      price: "20 dh",
    },
    {
      name: "ANANAS",
      price: "20 dh",
    },
    {
      name: "FRAMBOISE",
      price: "20 dh",
    },
    {
      name: "KAKI",
      price: "20 dh",
    },
    {
      name: "AVOCAT",
      price: "20 dh",
    },
    {
      name: "MANGUE",
      price: "20 dh",
    },
    {
      name: "PAPAYE",
      price: "20 dh",
    },
    {
      name: "PECHE",
      price: "20 dh",
    },
    {
      name: "PANACHE",
      price: "20 dh",
    },
    {
      name: "KIWI",
      price: "20 dh",
    },
    {
      name: "CITRON",
      price: "20 dh",
    },
    {
      name: "ZE3ZA3",
      price: "25 dh",
    },
    {
      name: "FRUITS SECS",
      price: "20 dh",
    },
    {
      name: "SALADE DE FRUIT",
      price: "15 dh",
    },
  ];
  return (
    <main className="text-black">
      <section className='bg-[url("/DSC4824.jpg")] space-y-[60px] bg-cover bg-no-repeat'>
        <Nav />
        <HeaderProp
          fontt="font-bold text-7xl"
          font="font-bernier"
          text="Notre Menu"
        />
      </section>
      <Menu1 />
      <Menu3 />
      <div className="bg-[#0D1518] ">
        <Menu2 />
        {/* menu 4 */}
        <div className=" lg:h-[908px] bg-[#0D1518] mb-[91px]  mt-[91px]">
          <div className="flex lg:flex-row  flex-col lg:container mx-auto lg:px-5  ">
            <div className="lg:hidden">
              <Image
                src="/_DSC4739.jpg"
                width={415}
                height={337}
                alt="sandwich poulet"
                className="w-full"
              />
            </div>
            <div className="bg-white lg:w-[35%]  py-8 h-fit lg:mt-[290px] px-4 lg:px-[30px] z-50 space-y-6   ">
              <p className="text-primary opacity-90 text-[44px] font-bernier">
                SANDWICH
              </p>
              <div className="space-y-3 ">
                {list.map((item, index) => {
                  return (
                    <div className="text-[#808080]" key={index}>
                      <div className="flex relative items-center gap-1">
                        <p className="lg:text-3xl text-[26px] shrink-0 font-bernier text-[#0F1622] ">
                          {item.name}
                        </p>
                        <div className="relative  w-full  h-[5px]">
                          <Image
                            src="/Vector 24.svg"
                            fill
                            className="object-contain"
                            alt=""
                          />
                        </div>
                        <p className=" text-primary   font-bernier text-[26px] flex-shrink-0">
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
            <div className="lg:flex hidden flex-col  relative right-32 space-y-10 mt-10">
              <div className="z-10 w-[415px] h-[337px] relative ">
                <Image
                  src="/_DSC4739.jpg"
                  fill
                  alt="sandwich poulet"
                  className="w-[915px] absolute object-cover object-left h-[337px] shapeMenu"
                />
              </div>
              <div className="z-10">
                <Image
                  src="/_DSC4744.jpg"
                  width={415}
                  height={337}
                  alt="Tacos Dar djaj"
                  className="w-[415px] h-[337px] shapeMenu2 "
                />
              </div>
            </div>
            <div className="flex flex-col relative">
              <Image
                src="/Group 5 vertical.svg"
                width={120}
                height={20}
                alt=""
                className="absolute hidden lg:block right-0 bottom-[375px] z-20"
              />
              <Image
                src="/Group 5.svg"
                width={220}
                height={400}
                alt="shape"
                className="absolute hidden lg:block right-0 bottom-64 z-20"
              />
              <div className="lg:hidden">
                <Image
                  alt="Plats poulet"
                  src="/_DSC4780.jpg"
                  width={400}
                  height={400}
                  className="w-full  clipo4"
                />
              </div>
              <div className="bg-white  py-8   lg:px-[30px] px-4  space-y-6 h-fit z-50 ">
                <p className="font-bernier font-400 text-[44px] leading-[51px] text-primary">
                  BUCKETS
                </p>
                <div className="space-y-3 ">
                  {list2.map((item, index) => {
                    return (
                      <div className="text-[#808080]" key={index}>
                        <div className="flex relative items-center gap-1">
                          <p className="text-[26px] lg:text-3xl font-bernier text-[#0F1622] flex-shrink-0">
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
                          <p className=" text-primary font-bernier text-[26px] flex-shrink-0">
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
              <div className="relative hidden lg:block z-10 bottom-[30%] right-[10%]">
                <Image
                  src="/_DSC4783.jpg"
                  width={563}
                  height={533}
                  className="h-[563px] w-[564px] shapeMenu3"
                  alt="plat poulet"
                />
                <Image
                  src="/Group 41.svg"
                  width={300}
                  height={300}
                  alt="shape"
                  className="absolute z-50 top-1 opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
        {/* menu 5 */}
        <div>
          <div className=" lg:h-[908px] bg-[#0D1518] lg:mb-[91px] ">
            <div className="flex lg:flex-row flex-col lg:container mx-auto lg:px-5 relative ">
              <Image
                src="/Group 5 vertical.svg"
                width={120}
                height={20}
                alt="shape"
                className="absolute hidden lg:block right-40 bottom-[375px] z-20"
              />
              <Image
                src="/Group 5.svg"
                width={220}
                height={400}
                alt="shape"
                className="absolute hidden lg:block right-40 bottom-64 z-20"
              />
              {/* menu img */}
              <div className="lg:hidden">
                <Image
                  src="/_DSC4817.jpg"
                  width={509}
                  height={700}
                  alt="plat poulet"
                  className="w-full "
                />
              </div>
              <div className="bg-white h-fit lg:w-[40%]  py-8 px-4 lg:px-[30px] z-50 space-y-8 relative lg:bottom-[-320px] lg:mt-16">
                <p className="text-primary opacity-90 text-[44px] font-bernier">
                  WINGS
                </p>
                <div className="space-y-3">
                  {list3.map((item, index) => {
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
                  composez votre salade 45 dh
                </p>
              </div>
              <div className="lg:flex flex-col hidden  relative right-[280px] space-y-10 mt-10">
                <div className="z-10">
                  <Image
                    src="/0a057e698af57a6c452b0d5003044b0c.jpg"
                    width={509}
                    height={700}
                    alt="Plat poulet"
                    className="w-[509px] h-[700px] shapeMenu4 "
                  />
                </div>
              </div>
              <div className="flex lg:flex-col flex-col-reverse">
                <div className="bg-white h-fit  py-8 lg:px-[30px] px-4 z-50 space-y-8 ">
                  <p className="text-primary opacity-90 text-[44px] font-bernier">
                    TENDERS
                  </p>
                  <div className="space-y-3">
                    {list4.map((item, index) => {
                      return (
                        <div className="text-[#808080]" key={index}>
                          <div className="flex relative items-center gap-1">
                            <p className="text-[26px] lg:text-3xl font-bernier text-[#0F1622] flex-shrink-0">
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
                            <p className=" text-primary font-bernier text-[26px] flex-shrink-0">
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
                    FRiTES CLASSIC 12 DH
                  </p>
                </div>
                <div className="lg:relative  lg:z-10 bottom-[30%] right-[40%]">
                  <Image
                    src="/_DSC4783.jpg"
                    width={563}
                    height={533}
                    className="lg:h-[563px] hidden lg:block w-full lg:w-[564px] lg:shapeMenu5"
                    alt="plat poulet"
                  />
                  <Image
                    src="/_DSC4780.jpg"
                    width={563}
                    height={533}
                    className=" w-full lg:hidden"
                    alt="plat poulet"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* menu 6 */}
        <Menu6 />
      </div>
    </main>
  );
};

export default page;
