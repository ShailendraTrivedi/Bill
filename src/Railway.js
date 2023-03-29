import React from "react";
import "./Print.css";

const Railway = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <div className="flex flex-col gap-10">
        <hr className="border-black border-2" />
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="w-[90%] grid grid-cols-6 bg-gray-300 border-2 border-black text-lg font-bold">
            <div className="flex justify-center items-center border-2 border-black">
              Train Number
            </div>
            <div className="flex justify-center items-center border-2 border-black">
              PNR Number
            </div>
            <div className="flex justify-center items-center border-2 border-black">
              Date
            </div>
            <div className=" col-span-2 flex-col">
              <div className="flex justify-center border-2 border-black">
                Station
              </div>
              <div className="flex justify-between">
                <div className="w-1/2 border-2 border-black flex justify-center">
                  From
                </div>
                <div className="w-1/2 border-2 border-black flex justify-center">
                  To
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center border-2 border-black">
              TOTAL (in Rupees)
            </div>
          </div>
          <div className="flex flex-col gap-1 justify-center w-[90%]">
            <div className="w-full grid grid-cols-6 border-2 border-black text-lg">
              <div className="flex justify-center items-center border-2 border-black">
                <input
                  type="number"
                  className=" w-full outline-none p-1 text-[#2309b5] font-bold"
                />
              </div>
              <div className="flex justify-center items-center border-2 border-black">
                <input
                  type="number"
                  className="w-full outline-none p-1 text-[#2309b5] font-bold"
                />
              </div>
              <div className="flex justify-center items-center border-2 border-black">
                <input
                  type="date"
                  className="w-full outline-none p-1 text-[#2309b5] font-bold"
                />
              </div>
              <div className="flex col-span-2 justify-between">
                <div className="w-1/2 border-2 border-black flex justify-center">
                  <input
                    type="text"
                    className="w-full outline-none p-1 text-[#2309b5] font-bold"
                  />
                </div>
                <div className="w-1/2 border-2 border-black flex justify-center">
                  <input
                    type="text"
                    className="w-full outline-none p-1 text-[#2309b5] font-bold"
                  />
                </div>
              </div>
              <div className="flex justify-center items-center border-2 border-black">
                <input
                  type="number"
                  className="w-full outline-none p-1 text-[#2309b5] font-bold"
                />
              </div>
            </div>
            <div className="w-full grid grid-cols-6 border-2 border-black text-lg">
              <div className="flex justify-center items-center border-2 border-black">
                <input
                  type="number"
                  className=" w-full outline-none p-1 text-[#2309b5] font-bold"
                />
              </div>
              <div className="flex justify-center items-center border-2 border-black">
                <input
                  type="number"
                  className="w-full outline-none p-1 text-[#2309b5] font-bold"
                />
              </div>
              <div className="flex justify-center items-center border-2 border-black">
                <input
                  type="date"
                  className="w-full outline-none p-1 text-[#2309b5] font-bold"
                />
              </div>
              <div className="flex col-span-2 justify-between">
                <div className="w-1/2 border-2 border-black flex justify-center">
                  <input
                    type="text"
                    className="w-full outline-none p-1 text-[#2309b5] font-bold"
                  />
                </div>
                <div className="w-1/2 border-2 border-black flex justify-center">
                  <input
                    type="text"
                    className="w-full outline-none p-1 text-[#2309b5] font-bold"
                  />
                </div>
              </div>
              <div className="flex justify-center items-center border-2 border-black">
                <input
                  type="number"
                  className="w-full outline-none p-1 text-[#2309b5] font-bold"
                />
              </div>
            </div>
            <div className="w-full grid grid-cols-6 border-2 border-black text-lg">
              <div className="flex justify-center items-center border-2 border-black">
                <input
                  type="number"
                  className=" w-full outline-none p-1 text-[#2309b5] font-bold"
                />
              </div>
              <div className="flex justify-center items-center border-2 border-black">
                <input
                  type="number"
                  className="w-full outline-none p-1 text-[#2309b5] font-bold"
                />
              </div>
              <div className="flex justify-center items-center border-2 border-black">
                <input
                  type="date"
                  className="w-full outline-none p-1 text-[#2309b5] font-bold"
                />
              </div>
              <div className="flex col-span-2 justify-between">
                <div className="w-1/2 border-2 border-black flex justify-center">
                  <input
                    type="text"
                    className="w-full outline-none p-1 text-[#2309b5] font-bold"
                  />
                </div>
                <div className="w-1/2 border-2 border-black flex justify-center">
                  <input
                    type="text"
                    className="w-full outline-none p-1 text-[#2309b5] font-bold"
                  />
                </div>
              </div>
              <div className="flex justify-center items-center border-2 border-black">
                <input
                  type="number"
                  className="w-full outline-none p-1 text-[#2309b5] font-bold"
                />
              </div>
            </div>
            <div className="w-full grid grid-cols-6 border-2 border-black text-lg">
              <div className="flex justify-center items-center border-2 border-black">
                <input
                  type="number"
                  className=" w-full outline-none p-1 text-[#2309b5] font-bold"
                />
              </div>
              <div className="flex justify-center items-center border-2 border-black">
                <input
                  type="number"
                  className="w-full outline-none p-1 text-[#2309b5] font-bold"
                />
              </div>
              <div className="flex justify-center items-center border-2 border-black">
                <input
                  type="date"
                  className="w-full outline-none p-1 text-[#2309b5] font-bold"
                />
              </div>
              <div className="flex col-span-2 justify-between">
                <div className="w-1/2 border-2 border-black flex justify-center">
                  <input
                    type="text"
                    className="w-full outline-none p-1 text-[#2309b5] font-bold"
                  />
                </div>
                <div className="w-1/2 border-2 border-black flex justify-center">
                  <input
                    type="text"
                    className="w-full outline-none p-1 text-[#2309b5] font-bold"
                  />
                </div>
              </div>
              <div className="flex justify-center items-center border-2 border-black">
                <input
                  type="number"
                  className="w-full outline-none p-1 text-[#2309b5] font-bold"
                />
              </div>
            </div>
            <div className="w-full grid grid-cols-6 border-2 border-black text-lg">
              <div className="flex justify-center items-center border-2 border-black">
                <input
                  type="number"
                  className=" w-full outline-none p-1 text-[#2309b5] font-bold"
                />
              </div>
              <div className="flex justify-center items-center border-2 border-black">
                <input
                  type="number"
                  className="w-full outline-none p-1 text-[#2309b5] font-bold"
                />
              </div>
              <div className="flex justify-center items-center border-2 border-black">
                <input
                  type="date"
                  className="w-full outline-none p-1 text-[#2309b5] font-bold"
                />
              </div>
              <div className="flex col-span-2 justify-between">
                <div className="w-1/2 border-2 border-black flex justify-center">
                  <input
                    type="text"
                    className="w-full outline-none p-1 text-[#2309b5] font-bold"
                  />
                </div>
                <div className="w-1/2 border-2 border-black flex justify-center">
                  <input
                    type="text"
                    className="w-full outline-none p-1 text-[#2309b5] font-bold"
                  />
                </div>
              </div>
              <div className="flex justify-center items-center border-2 border-black">
                <input
                  type="number"
                  className="w-full outline-none p-1 text-[#2309b5] font-bold"
                />
              </div>
            </div>
            <div className="w-full grid grid-cols-6 border-2 border-black text-lg">
              <div className="flex justify-center items-center border-2 border-black">
                <input
                  type="number"
                  className=" w-full outline-none p-1 text-[#2309b5] font-bold"
                />
              </div>
              <div className="flex justify-center items-center border-2 border-black">
                <input
                  type="number"
                  className="w-full outline-none p-1 text-[#2309b5] font-bold"
                />
              </div>
              <div className="flex justify-center items-center border-2 border-black">
                <input
                  type="date"
                  className="w-full outline-none p-1 text-[#2309b5] font-bold"
                />
              </div>
              <div className="flex col-span-2 justify-between">
                <div className="w-1/2 border-2 border-black flex justify-center">
                  <input
                    type="text"
                    className="w-full outline-none p-1 text-[#2309b5] font-bold"
                  />
                </div>
                <div className="w-1/2 border-2 border-black flex justify-center">
                  <input
                    type="text"
                    className="w-full outline-none p-1 text-[#2309b5] font-bold"
                  />
                </div>
              </div>
              <div className="flex justify-center items-center border-2 border-black">
                <input
                  type="number"
                  className="w-full outline-none p-1 text-[#2309b5] font-bold"
                />
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-2 text-xl justify-between w-[90%]">
            <div className="flex gap-5">
              <div className="text-2xl">TOTAL AMOUNT (in Rupees) = </div>
              <input
                type="number"
                className="w-[20rem] border-2 border-black outline-none rounded-lg p-2 text-[#2309b5] font-bold"
              />
            </div>
            <div className="flex gap-5">
              <div className="text-2xl">AMOUNT IN WORDS = </div>
              <input
                type="text"
                className="w-[50rem] border-2 border-black outline-none rounded-lg p-2 text-[#2309b5] font-bold"
                placeholder="Amount in Words"
              />
            </div>
          </div>
          <div className=" flex justify-between w-[90%]">
            <div />
            <img src="./Img/sign.png" alt="" className="mr-20" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Railway;
