import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from "../redux/categoryReducer";

const categories = ['All', 'Images','Illustrations', 'Icons', 'Fonts', 'CSS', 'CSS Framework', 'Design','3D Icons','Backgrounds' ,'UI Framework','Code Playground'];

function Button() {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.selectedCategory);
  return (
    <>
      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? "active" : ""}
            onClick={() => dispatch(setCategory(category))}
          >
            {category}
          </button>
        ))}
      </div>
    </>
  );
}

export default Button;
