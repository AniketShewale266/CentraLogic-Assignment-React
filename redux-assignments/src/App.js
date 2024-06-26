import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import Button from "./components/Button";
import {
  setInputText,
  convertToUppercase,
  convertToLowercase,
  clearText,
  capitalizeText,
  extractEmail,
  removeExtraSpaces,
} from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  const { inputText, wordCount, charCount } = useSelector((state) => state);

  const handleInputChange = (e) => {
    dispatch(setInputText(e.target.value));
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(inputText)
      .then(() => {
        alert("Text copied to clipboard");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <>
      <main>
        <div className="input-area">
          <h2>
            Try TextUtils - Word Counter, Character Counter, Extract Emails
          </h2>
          <textarea
            value={inputText}
            onChange={handleInputChange}
            cols="83"
            rows="15"
          ></textarea>
          <div className="btns">
            <Button name="Convert to Uppercase" onClick={() => dispatch(convertToUppercase())} />
            <Button name="Convert to Lowercase" onClick={() => dispatch(convertToLowercase())} />
            <Button name="Capitalized Text" onClick={() => dispatch(capitalizeText())} />
            <Button name="Clear Text" onClick={() => dispatch(clearText())} />
            <Button name="Extract Email" onClick={() => dispatch(extractEmail())} />
            <Button name="Remove Extra Spaces" onClick={() => dispatch(removeExtraSpaces())} />
            <Button name="Copy Text" onClick={handleCopyText} />
          </div>
        </div>

        <div className="text-output">
          <div className="text-summary">
            <h2>Your text Summary</h2>
            <h4>{wordCount} words and {charCount} characters</h4>
          </div>

          <div className="preview">
            <h2>Preview</h2>
            <div className="preview-box">
              <p>{inputText || "Nothing to preview"}</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
