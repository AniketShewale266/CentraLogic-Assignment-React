// Action Types
const FAVOURITE_ADD_ITEM = "favourite/addItem";
const FAVOURITE_REMOVE_ITEM = "favourite/removeItem";

// Action Creators
export function addfavoriteResource(resourceData) {
  return {
    type: FAVOURITE_ADD_ITEM,
    payload: resourceData,
  };
}

export function removefavoriteResource(id) {
  return {
    type: FAVOURITE_REMOVE_ITEM,
    payload: { id: id },
  };
}

const initialState = {
  favorites: [],
};

export default function favouriteReducer(state = initialState, action) {
  switch (action.type) {
    case FAVOURITE_ADD_ITEM:
      const existingItem = state.favorites.find(
        (wishlistItem) => wishlistItem.id === action.payload.id
      );
      if (existingItem) {
        return state;
      }
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    case FAVOURITE_REMOVE_ITEM:
      return {
        ...state,
        favorites: state.favorites.filter(
          (favourite) => favourite.id !== action.payload
        ),
      };

    default:
      return state;
  }
}
