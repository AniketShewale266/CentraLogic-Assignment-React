// categoryReducer.js
export const SET_CATEGORY = 'SET_CATEGORY';
export const LOAD_RESOURCES = 'LOAD_RESOURCES';

// Action Creators
export const setCategory = (category) => ({
  type: SET_CATEGORY,
  payload: category,
});

export const loadResources = (resources) => ({
  type: LOAD_RESOURCES,
  payload: resources,
});

const initialState = {
  selectedCategory: 'All',
  resources: [],
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload,
      };
    case LOAD_RESOURCES:
      return {
        ...state,
        resources: action.payload,
      };
    default:
      return state;
  }
};

export default categoryReducer;
