/* eslint-disable react/prop-types */

import {createContext, useState} from "react";

const FormContext = createContext();

export const FormContextProvider = ({ children }) => {

  const [cardNum, setCardNum] = useState("");
  const [month, setMonth] = useState("")
  const [year, setYear] = useState("")

    const handleNumberChange = (event) => {
      let input = event.target.value;
      input = input.replace(/\D/g, "");
      const formattedText = separateCreditCard(input);
      setCardNum(formattedText);
    };

    const separateCreditCard = (inputText) => {

      const cleanedText = inputText.replace(/-/g, "");
      const grouping = 4;
      const groups = Math.ceil(cleanedText.length / grouping);
      const positions = Array.from(
        { length: groups - 1 },
        (_, index) => (index + 1) * grouping
      );

      // Insert " - " characters at the calculated positions
      let formattedText = cleanedText;
      positions.reverse().forEach((pos) => {
        formattedText =
          formattedText.slice(0, pos) + " - " + formattedText.slice(pos);
      });

      return formattedText;
    };

    const handleMonthChange = (event) => {
      let input = event.target.value;
      input = input.replace(/\D/g, "");
      setMonth(input);
    };
    const handleYearChange = (event) => {
      let input = event.target.value;
      input = input.replace(/\D/g, "");
      setYear(input);
    };
    const value = {cardNum, handleNumberChange, month, handleMonthChange, year, handleYearChange}

  return (
    <FormContext.Provider value={value}>
      {children}
    </FormContext.Provider>
  );
};


export default FormContext;
