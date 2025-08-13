import React, { createContext, useState } from "react";
export const SearchTerm = createContext();
import google from "./google.png";
import Classes from "./Header.module.scss";

const Header = ({ children }) => {
  const [inputVal, setInputVal] = useState("");
  const [updatedInput, setUpdatedInput] = useState("");
  const [error, setError] = useState("");
  const submitForm = (e) => {
    e.preventDefault();
    if (inputVal.trim() === "") {
      setError("Please enter book name");
      return;
    }
    setError("");
    setUpdatedInput(inputVal);
    setInputVal("");
 
  };
  return (
    <div className={Classes.display}>
      <img src={google} className={Classes.google_image} />
      <form onSubmit={submitForm} className={Classes.form}>
        <input
          type="text"
          placeholder="Type a book name..."
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onFocus={() => {
           setError("");
           setUpdatedInput("");
          }
          }
          className={Classes.input_style}
        />
        <button type="submit" className={Classes.input_button}>
          Search
        </button>
        <br></br>
      </form>
        <div>
        {error && <p className={Classes.error_message}>{error}</p>}
        </div>
      <SearchTerm.Provider value={{ updatedInput }}>
        {children}
      </SearchTerm.Provider>
    </div>
  );
};

export default Header;
