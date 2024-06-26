export const SET_INPUT_TEXT = 'SET_INPUT_TEXT';
export const CONVERT_TO_UPPERCASE = 'CONVERT_TO_UPPERCASE';
export const CONVERT_TO_LOWERCASE = 'CONVERT_TO_LOWERCASE';
export const CLEAR_TEXT = 'CLEAR_TEXT';
export const CAPITALIZE_TEXT = 'CAPITALIZE_TEXT';
export const EXTRACT_EMAIL = 'EXTRACT_EMAIL';
export const REMOVE_EXTRA_SPACES = 'REMOVE_EXTRA_SPACES';

export const setInputText = (text) => ({
  type: SET_INPUT_TEXT,
  payload: text,
});

export const convertToUppercase = () => ({
  type: CONVERT_TO_UPPERCASE,
});

export const convertToLowercase = () => ({
  type: CONVERT_TO_LOWERCASE,
});

export const clearText = () => ({
  type: CLEAR_TEXT,
});

export const capitalizeText = () => ({
  type: CAPITALIZE_TEXT,
});

export const extractEmail = () => ({
  type: EXTRACT_EMAIL,
});

export const removeExtraSpaces = () => ({
  type: REMOVE_EXTRA_SPACES,
});
