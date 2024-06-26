import { createStore } from "redux";
import { productList } from "./productsList";

console.dir(createStore);

// const initialState = {
//   products: productList,
//   cartItems: [],
//   wishList: [],
// };

const initialState = {
  inputText: "Hello aniket     shewale aniketshewale@gmail.com hiii",
  outputText: "",
  wordCounter: 0,
  charCounter: 0,
};

const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
const UPPERCASE = "text/uppercase";
const LOWERCASE = "text/lowercase";
const WORD_COUNT = "text/wordCount";
const CHAR_COUNT = "text/charCount";
const EXTRACT_EMAIL = "text/extractEmail";
const CAPITALIZED = "text/capitalized";
const REMOVE_EXTRA_SPACES = "text/removeExtraSpaces";

function reducer(state = initialState, action) {
  switch (action.type) {
    case UPPERCASE:
      return {
        ...state,
        outputText: state.inputText.toUpperCase(),
      };
    case LOWERCASE:
      return {
        ...state,
        outputText: state.inputText.toLowerCase(),
      };
    case WORD_COUNT:
      return {
        ...state,
        wordCounter: state.inputText.trim().split(/\s+/).length,
      };
    case CHAR_COUNT:
      return {
        ...state,
        charCounter: state.inputText.length,
      };
    case EXTRACT_EMAIL:
      return {
        ...state,
        outputText: state.inputText.match(emailPattern),
      };
    case CAPITALIZED:
      return {
        ...state,
        outputText: state.inputText
          .split(" ") 
          .map(
            (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() 
          )
          .join(" "), 
      };
    case REMOVE_EXTRA_SPACES:
      return {
        ...state,
        outputText: state.inputText.trim().replace(/\s+/g, " "),
      };
    default:
      return state;
  }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());
store.dispatch({ type: UPPERCASE });
store.dispatch({ type: LOWERCASE });
store.dispatch({ type: WORD_COUNT });
store.dispatch({ type: CHAR_COUNT });
store.dispatch({ type: EXTRACT_EMAIL });
store.dispatch({ type: CAPITALIZED });
store.dispatch({ type: REMOVE_EXTRA_SPACES });
