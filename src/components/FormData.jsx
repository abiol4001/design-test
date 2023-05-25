import { useContext, useState } from 'react';
import { HiPencil } from 'react-icons/hi'
import logo from "../assets/logo.png";

// Context import
import FormContext from '../context/FormContext';


const FormData = () => {

    const {cardNum, handleNumberChange, month, handleMonthChange, year, handleYearChange} = useContext(FormContext)
    const [cvv, setCvv] = useState("")

    const handleCvvChange = (event) => {
      let input = event.target.value;
      input = input.replace(/\D/g, "");
      setCvv(input);
    };

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <img src={logo} alt="" className="h-[50px] w-[50px] object-contain" />
          <p className="font-light">
            <span className="font-bold">AceCoin</span>Pay
          </p>
        </div>
        <div className="flex gap-1 items-center">
          <div className="flex gap-[2px]">
            <div className="h-6 w-4 bg-black text-white flex justify-center items-center rounded-sm text-sm">
              0
            </div>
            <div className="h-6 w-4 bg-black text-white flex justify-center items-center rounded-sm text-sm">
              1
            </div>
          </div>
          <p>:</p>
          <div className="flex gap-[2px]">
            <div className="h-6 w-4 bg-black text-white flex justify-center items-center rounded-sm text-sm">
              1
            </div>
            <div className="h-6 w-4 bg-black text-white flex justify-center items-center rounded-sm text-sm">
              9
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-10">
        <div>
          <p className="font-medium">Card Number</p>
          <p className="text-[12px] lg:text-[13px] text-gray-400">
            Enter the 16-digit card number on the card
          </p>
        </div>
        <button className="flex items-center text-blue-600 gap-1">
          <HiPencil size={20} />
          <p className="md:text-[14px]">Edit</p>
        </button>
      </div>

      <form className="flex flex-col gap-5 mt-5">
        <div className="w-full relative">
          <input
            type="text"
            className="border border-slate-300 h-[50px] pl-14 rounded-[10px] outline-none focus-within:border-blue-600 focus-within:text-blue-600 w-full placeholder:text-[15px]"
            value={cardNum}
            onChange={handleNumberChange}
            maxLength={25}
            placeholder="1234 - 5678 - 9012 - 3456"
          />
          <img
            src="mastercard.svg"
            alt=""
            className="h-6 w-6 absolute left-4 top-0 bottom-0 my-auto"
          />
        </div>

        <div className="lg:flex w-full justify-between">
          <div className="mb-2 lg:mb-0">
            <p className="font-medium">CVV Number</p>
            <p className="text-[12px] lg:text-[13px] text-gray-400">
              Enter the 3 or 4 digit number on the card
            </p>
          </div>
          <input
            type="text"
            className="border border-slate-300 h-[50px] px-2 rounded-[10px] w-full lg:w-1/2 text-center outline-none focus-within:border-blue-600 focus-within:text-blue-600 placeholder:text-[15px]"
            maxLength={4}
            value={cvv}
            onChange={handleCvvChange}
            placeholder="123"
          />
        </div>
        <div className="lg:flex w-full justify-between">
          <div className="mb-2 lg:mb-0">
            <p className="font-medium">Expiry Date</p>
            <p className="text-[12px] lg:text-[13px] text-gray-400">
              Enter the expiration date on the card
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex items-center gap-2">
            <input
              type="text"
              className="border border-slate-300 h-[50px] px-2 rounded-[10px] w-1/2 text-center outline-none focus-within:border-blue-600 focus-within:text-blue-600 placeholder:text-[15px]"
              maxLength={2}
              value={month}
              onChange={handleMonthChange}
              placeholder="MM"
            />
            <p>/</p>
            <input
              type="text"
              className="border border-slate-300 h-[50px] px-2 rounded-[10px] w-1/2 text-center outline-none focus-within:border-blue-600 focus-within:text-blue-600 placeholder:text-[15px]"
              maxLength={2}
              value={year}
              onChange={handleYearChange}
              placeholder="YY"
            />
          </div>
        </div>
        <div className="lg:flex w-full justify-between">
          <div className="mb-2 lg:mb-0">
            <p className="font-medium">Password</p>
            <p className="text-[12px] lg:text-[13px] text-gray-400">
              Enter your Dynamic password
            </p>
          </div>
          <input
            type="password"
            className="border border-slate-300 h-[50px] px-2 rounded-[10px] w-full lg:w-1/2 outline-none focus-within:border-blue-600 focus-within:text-blue-600"
          />
        </div>
        <button className="bg-blue-600 h-[60px] text-white rounded-[10px] hover:opacity-80">
          Pay Now
        </button>
      </form>
    </div>
  );
}
export default FormData

