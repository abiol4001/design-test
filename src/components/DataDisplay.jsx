// icons import
import { AiFillApple } from "react-icons/ai";
import { TbFileInvoice } from "react-icons/tb";
// images import
import CardChip from "../assets/cardchip.png";
import CardNFC from "../assets/cardNFC.png";
import { useContext } from "react";
// Context import
import FormContext from "../context/FormContext";


const DataDisplay = () => {
  const { cardNum, month, year } = useContext(FormContext);
    let lastFourNum = ""
    if(cardNum.length == 25) {
        lastFourNum = cardNum.slice(-4)
    }

  const orderDetails = [
    {
      name: "Company",
      value: "Apple",
      icon: <AiFillApple size={12} className="text-white" />,
    },
    {
      name: "Order Number",
      value: "1266201",
    },
    {
      name: "Product",
      value: "MacBook Air",
    },
    {
      name: "VAT (20%)",
      value: "$100.00",
    },
  ];
  return (
    <div className="bg-slate-200 mx-auto w-full lg:w-[250px] h-[420px] rounded-lg py-5 flex flex-col justify-end relative">
      <div className="h-[240px] w-[174px] bg-white rounded-xl absolute -top-[75px] left-0 right-0 mx-auto shadow-lg px-5 py-7 border border-t-2 text-[13px] flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <img
            src={CardChip}
            alt="CardChip"
            className="h-[35px] w-[35px] object-contain"
          />
          <img
            src={CardNFC}
            alt="CardNFC"
            className="h-[30px] w-[30px] object-contain"
          />
        </div>
        <div className="">
          <p>Jonathan Michael</p>
          <div className="font-bold">
            {lastFourNum && (
              <div className="flex gap-3 items-center">
                <div className="flex gap-1">
                  {[...Array(4)].map((_, index) => (
                    <div
                      key={index}
                      className="h-1 w-1 rounded-full bg-black"
                    ></div>
                  ))}
                </div>
                <p>{lastFourNum}</p>
              </div>
            )}
            <div className="flex justify-between items-center">
              <div className="flex">
                <p>{month}</p>
                {month && <p>/</p>}
                <p>{year}</p>
              </div>
              <div>
                <img src="mastercard.svg" alt="" className="h-9 w-full" />
                <p className="text-[6px]">mastercard</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 flex flex-col gap-2">
        {orderDetails.map((item, index) => (
          <div key={index} className="flex justify-between">
            <p className="text-gray-400 text-[14px]">{item.name}</p>
            <div className="flex items-center gap-1">
              {item.icon && (
                <div className="bg-black h-4 w-4 rounded-full flex justify-center items-center ">
                  {item.icon}
                </div>
              )}
              <p className="font-medium text-[14px]">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="border-dashed border-t-2 bg-slate-300 my-5 relative ">
        <div className="rounded-full h-7 w-7 bg-white absolute -left-3 -top-[15px]"></div>
        <div className="rounded-full h-7 w-7 bg-white absolute -right-3 -top-[15px]"></div>
      </div>
      <div className="flex justify-between items-center px-7">
        <div>
          <p className="text-[14px] text-gray-400">You have to Pay</p>
          <p className="text-sm">
            <span className="text-lg font-bold">549</span>.99{" "}
            <span className="text-gray-400 font-light">USD</span>
          </p>
        </div>
        <div>
          <TbFileInvoice size={23} />
        </div>
      </div>
    </div>
  );
};

export default DataDisplay;
