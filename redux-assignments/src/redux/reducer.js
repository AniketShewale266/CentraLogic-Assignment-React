import {
  SET_INPUT_TEXT,
  CONVERT_TO_UPPERCASE,
  CONVERT_TO_LOWERCASE,
  CLEAR_TEXT,
  CAPITALIZE_TEXT,
  EXTRACT_EMAIL,
  REMOVE_EXTRA_SPACES,
} from "./actions";

const initialState = {
  inputText: "",
  wordCount: 0,
  charCount: 0,
};

const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INPUT_TEXT:
      return {
        ...state,
        inputText: action.payload,
        wordCount: action.payload.trim().split(/\s+/).length,
        charCount: action.payload.length,
      };
    case CONVERT_TO_UPPERCASE:
      return {
        ...state,
        inputText: state.inputText.toUpperCase(),
      };
    case CONVERT_TO_LOWERCASE:
      return {
        ...state,
        inputText: state.inputText.toLowerCase(),
      };
    case CLEAR_TEXT:
      return {
        ...state,
        inputText: "",
        wordCount: 0,
        charCount: 0,
      };
    case CAPITALIZE_TEXT:
      return {
        ...state,
        inputText: state.inputText
          .split(" ")
          .map(
            (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          )
          .join(" "),
      };
    case EXTRACT_EMAIL:
      return {
        ...state,
        inputText: state.inputText.match(emailPattern),
      };
    case REMOVE_EXTRA_SPACES:
      return {
        ...state,
        inputText: state.inputText.trim().replace(/\s+/g, " "),
      };
    default:
      return state;
  }
};

export default reducer;
