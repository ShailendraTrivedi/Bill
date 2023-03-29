import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex flex-col gap-2 mb-10 ">
        <div className="flex justify-between p-2">
          <img src="./Img/flight.png" alt="" className="h-48 w-72" />
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="text-5xl font-bold text-green-500">
              RS TOURS & TRAVELS
            </div>
            <div className="text-2xl font-bold text-green-500">
              227 SECTOR-F L.D.A COLONY KANPUR ROAD LUCKNOW
            </div>
            <div className="flex gap-8 text-2xl font-bold ">
              Phone Number :
              <div className="flex gap-2 text-[#2309b5]">
                <div className="">7080503380 </div>
                <div className="">/</div>
                <div className="">9335858090</div>
              </div>
            </div>
            <div className="flex gap-8 text-2xl font-bold">
              Email :
              <div className="text-[#2309b5]">rstoursandtravels@gmail.com</div>
            </div>
          </div>
          <img src="./Img/train.png" alt="" className="h-48 w-72" />
        </div>
        <div className="flex justify-between px-5">
          <div className=" text-2xl flex gap-2 justify-center items-center">
            Passenger Name :
            <input
              type="text"
              className=" w-[25rem] p-2 border-2 border-black rounded-xl text-[#2309b5] font-bold"
              placeholder="Enter Passenger Name"
            />
          </div>
          <div className=" text-2xl flex gap-2 justify-center items-center">
            Date :
            <input
              type="date"
              className="text-2xl border-black border-2 rounded-xl p-1 text-[#2309b5] font-bold "
            />
          </div>
        </div>
        <div className="flex px-5 text-2xl gap-2  items-center">
          Address:
          <input
            type="text"
            className=" w-[150rem] p-2 border-2 border-black rounded-xl text-[#2309b5] font-bold"
            placeholder="Enter Passenger Address"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
