import React from "react";
import { frontendResources } from "../redux/ResourceList";
import Resource from "../components/Resource";
import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import Button from "../components/Button";

function Home() {
  const { selectedCategory, resources } = useSelector(
    (state) => state.category
  );

  const filteredResources =
    selectedCategory === "All"
      ? resources
      : resources.filter((resource) => resource.category === selectedCategory);

  return (
    <>
    <Button/>
      <div className="resource-container">
        {filteredResources.map(
          ({ id, name, description, link, category, rating }) => (
            <Resource
              key={id}
              id = {id}
              name={name}
              description={description}
              link={link}
              category={category}
              rating={rating}
            />
          )
        )}
      </div>
    </>
  );
}

export default Home;
