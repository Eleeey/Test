import Image from "next/image";
import React from "react";

type Props = {};

const SignUpHero = (props: Props) => {
  return (
    <div className="gradient hidden lg:flex flex-col w-[50%] -mt-[15%] items-center justify-center  lg:">
      <div className="">
        <Image
          src={"/hero.png"}
          className="w-full"
          alt={"image"}
          height={48}
          width={450}
        />
      </div>

      <div className="flex flex-col">
        <h2 className=" mt-[1rem] text-[40px] text-center">
          Royalty collections <br /> simplified. It's next level!
        </h2>
        <p className="text-[22px] text-center ">
          Revenue based invoice collection to <br /> make royalty collection as
          easy as...
        </p>
      </div>
    </div>
  );
};

export default SignUpHero;
