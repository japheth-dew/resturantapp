import React from 'react'
import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png"

const HomeContainer = () => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full h-screen"
      id="home"
    >
      <div className="py-2 flex-1 flex flex-col items-start jusitfy-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Bike Delivery
          </p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Delivery}
              alt="delivery"
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        <p className="text-[2.5rem] lg:text-[3.5rem] font-bold tracking-wide text-headingColor font-bold">
          The Fastest Delivery in{" "}
          <span className="text-orange-600 text-[3rem] lg:text-[4rem] font-bold">
            Your City
          </span>
        </p>
        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
          voluptate doloribus, omnis quam iure voluptates corporis quasi ullam
          consectetur beatae illum magni, rerum eveniet, error voluptatibus
          ipsam? Voluptatibus, pariatur perferendis?
        </p>

        <button
          type="button"
          className="bg-gradient-to-br from-orange-400 to-orange-500 w-full px-4 py-2 rounded-lg hover:shadow-lg transition-al ease-in-out md:w-auto"
        >
          Order Now
        </button>
      </div>
      <div className="py-2 flex-1 flex items-center ">
        <img
          src={HeroBg}
          className="ml-auto h-420 w-full lg:w-auto lg:h-650 "
          alt="herobg"
        />

        <div className="w-full h-ful absolute left-[10rem]   flex items-center  justify-center px-32 py-4 ">
          <div className="w-190 p-2 bg-red-500 bg-cardOverlay backdrop-blur-md"></div>
        </div>
      </div>
    </section>
  );
}

export default HomeContainer