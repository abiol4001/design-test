
// Icons import
import { AiOutlineClose } from "react-icons/ai"

// Components Import
import DataDisplay from './components/DataDisplay';
import FormData from './components/FormData';

import './App.css'


function App() {

  return (
    <div className="max-w-[1440px] min-h-screen bg-gray-400 flex justify-center items-center mx-auto">
      <div className="max-w-[1000px] min-h-[75%] bg-white pb-7">
        <div className="flex justify-end w-full mb-8 ">
          <div className="bg-slate-100 h-7 w-9 flex justify-center items-center cursor-pointer">
            <AiOutlineClose className="hover:scale-[1.2] hover:text-red-700" />
          </div>
        </div>
        <div className="lg:flex-row flex-col-reverse flex">
          <div className="lg:w-2/3 px-10 mt-[50px] lg:mt-0">
            <FormData />
          </div>
          <div className="lg:w-1/3 px-10 flex items-end mt-[50px] lg:mt-0">
            <DataDisplay />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
