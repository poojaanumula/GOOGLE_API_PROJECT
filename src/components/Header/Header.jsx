import React, { createContext, useState } from "react";
export const SearchTerm = createContext();
import google from "./google.png";
import Classes from "./Header.module.scss";

const Header = ({ children }) => {
  const [inputVal, setInputVal] = useState("");
  const [updatedInput, setUpdatedInput] = useState("");
  const submitForm = (e) => {
    e.preventDefault();
    setUpdatedInput(inputVal);
  };
  return (
    <div className={Classes.display}>
      {/* <h2 style={{color:'red'}}>Google Books</h2> */}
      <img src={google} className={Classes.google_image} />
      <form onSubmit={submitForm} className={Classes.form}>
        <input
          type="text"
          placeholder="Find books..."
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          className={Classes.input_style}
        />
        <button type="submit" className={Classes.input_button}>
          Search
        </button>
      </form>
      <SearchTerm.Provider value={{ updatedInput }}>
        {children}
      </SearchTerm.Provider>
    </div>
  );
};

export default Header;
