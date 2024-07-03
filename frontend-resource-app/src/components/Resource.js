import { useDispatch, useSelector } from "react-redux";
import img from "../images/img.jpg";
import { addfavoriteResource, removefavoriteResource } from "../redux/favouriteReducer";

export default function Resource({
  id,
  name,
  description,
  link,
  category,
  rating,
}) {
  const dispatch = useDispatch();
 
  return (
    <div className="resource">
      <div className="resource-image">
        <img src={img} alt={name} />
      </div>
      <div className="title-container">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div className="price-rating-container">
        <p className="rating">{+rating} ★ ★ ★ ★</p>
        <p className="category">Category: {category}</p>
      </div>
      <div className="cta-container">
        <button onClick={() => window.open(link, "_blank")}>
          Visit Website
        </button>
        <button onClick={()=>{
                dispatch(addfavoriteResource({id,name,description,link,category,rating}))
            }}>Add to Favorite</button>
      </div>
    </div>
  );
}
