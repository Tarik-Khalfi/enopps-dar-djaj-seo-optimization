import React from "react";
import Image from "next/image";
import FormCard from "./Form";

const Contact = () => {
  return (
    <section className="lg:container lg:py-0 pt-20 lg:grid grid-cols-12 font-poppins space-y-8 items-center ">
      <Image
        alt="ll"
        src="/Group 5.png"
        width={400}
        height={400}
        className="w-[300px] h-[100px]  z-10 absolute  right-0 "
      />

      <div className="px-5 col-span-6 z-20 space-y-8">
        <div className=" ">
          <p className="text-primary  text-[44px]  font-bernier uppercase">
            Contacter Nous
          </p>
          <p className="text-4xl font-semibold">contactez-nous directement.</p>
        </div>

        <p className="text-[#D4D4D4] leading-7 lg:w-[452px]">
          Dar D&apos;jaj HayMohammadi, Agadir. Spécialistes de la cuisson du
          poulet depuis 1978, nous mettons notre art au service de vos
          papilles😋
        </p>
        <div className="flex gap-5">
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="25" cy="25" r="25" fill="#FFC700" />
            <path
              d="M33.4868 30.14L29.4218 26.444C29.2296 26.2693 28.9771 26.1762 28.7176 26.1842C28.4581 26.1922 28.2118 26.3008 28.0308 26.487L25.6378 28.948C25.0618 28.838 23.9038 28.477 22.7118 27.288C21.5198 26.095 21.1588 24.934 21.0518 24.362L23.5108 21.968C23.6972 21.7871 23.8059 21.5408 23.814 21.2812C23.822 21.0216 23.7287 20.769 23.5538 20.577L19.8588 16.513C19.6838 16.3204 19.4407 16.2035 19.1809 16.1873C18.9212 16.171 18.6654 16.2567 18.4678 16.426L16.2978 18.287C16.1249 18.4605 16.0217 18.6914 16.0078 18.936C15.9928 19.186 15.7068 25.108 20.2988 29.702C24.3048 33.707 29.3228 34 30.7048 34C30.9068 34 31.0308 33.994 31.0638 33.992C31.3083 33.9783 31.5391 33.8747 31.7118 33.701L33.5718 31.53C33.7418 31.333 33.8281 31.0774 33.8122 30.8177C33.7963 30.558 33.6795 30.3148 33.4868 30.14Z"
              fill="white"
            />
          </svg>
          <p className="lg:text-2xl text-lg">
            +212528230088 <br />{" "}
            <span className="text-[#C4C4C4] text-sm">Telephone</span>
          </p>
        </div>
        <div className="flex gap-5 py-4u">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="51"
            viewBox="0 0 50 51"
            fill="none"
          >
            <circle cx="25" cy="25.9561" r="25" fill="#FFC700" />
            <path
              d="M32.3547 18.5076C30.3906 16.5389 27.775 15.4561 24.9953 15.4561C19.2578 15.4561 14.5891 20.1248 14.5891 25.8623C14.5891 27.6951 15.0672 29.4857 15.9766 31.0654L14.5 36.4561L20.0172 35.0076C21.5359 35.8373 23.2469 36.2732 24.9906 36.2732p4.9953C30.7281 36.2732 35.5 31.6045 35.5 25.867C35.5 23.0873 34.3187 20.4764 32.3547 18.5076ZM24.9953 34.5201C23.4391 34.5201 21.9156 34.1029 20.5891 33.3154L20.275 33.1279L17.0031 33.9857L17.875 30.7936L17.6687 30.4654C16.8016 29.0873 16.3469 27.4982 16.3469 25.8623C16.3469 21.0951 20.2281 17.2139 25 17.2139C27.3109 17.2139 29.4812 18.1139 31.1125 19.7498C32.7437 21.3857 33.7469 23.5561 33.7422 25.867C33.7422 30.6389 29.7625 34.5201 24.9953 34.5201ZM29.7391 28.042C29.4813 27.9107 28.2016 27.2826 27.9625 27.1982C27.7234 27.1092 27.55 27.067 27.3766 27.3295C27.2031 27.592 26.7063 28.1732 26.5516 28.3514C26.4016 28.5248 26.2469 28.5482 25.9891 28.417C24.4609 27.6529 23.4578 27.0529 22.45 25.3232C22.1828 24.8639 22.7172 24.8967 23.2141 23.9029C23.2984 23.7295 23.2562 23.5795 23.1906 23.4482C23.125 23.317 22.6047 22.0373 22.3891 21.517C22.1781 21.0107 21.9625 21.0811 21.8031 21.0717C21.6531 21.0623 21.4797 21.0623 21.3062 21.0623C21.1328 21.0623 20.8516 21.1279 20.6125 21.3857C20.3734 21.6482 19.7031 22.2764 19.7031 23.5561C19.7031 24.8357 20.6359 26.0732 20.7625 26.2467C20.8938 26.4201 22.5953 29.0451 25.2062 30.1748C26.8562 30.8873 27.5031 30.9482 28.3281 30.8264C28.8297 30.7514 29.8656 30.1982 30.0812 29.5889C30.2969 28.9795 30.2969 28.4592 30.2313 28.3514C30.1703 28.2342 29.9969 28.1686 29.7391 28.042Z"
              fill="white"
            />
          </svg>{" "}
          <a href="//wa.me/+212626950023 " target="_blanc">
            <p className="lg:text-2xl text-lg">
              +212626950023 <br />{" "}
              <span className="text-[#C4C4C4] text-sm">Whatssap</span>
            </p>
          </a>
        </div>
        <div className="flex gap-5">
          <Image
            src="/Group 381.png"
            width={4400}
            height={440}
            className="w-[50px] h-[50px]"
            alt="icon"
          />
          <p className="lg:text-2xl text-lg">
            Résidence jardins de Souss 3 imm49 mag 22, Hay Mohamadi Agadir 80080{" "}
            <br /> <span className="text-[#C4C4C4] text-sm">Adresse</span>
          </p>
        </div>
      </div>
      <div className="relative z-20  col-span-6  w-full ">
        <Image
          src="/0a057e698af57a6c452b0d5003044b0c.jpg"
          width={300}
          height={237}
          alt=" plat poulet"
          className=" w-full lg:h-[70dvh]  lg:w-[500px] clipo5"
        />
      </div>
    </section>
  );
};

export default Contact;
