import { useState } from "react";
import { BASE_URL_API, BASE_URL_IMG } from "./API_URL";

function Category(){
  const BASE_URL = BASE_URL_IMG;
  const [imageIds, setImageIds] = useState([]);
  function fetchImageIds(){
    fetch(BASE_URL_API)
    .then((res) => res.json())
    .then((result) => {
      let categories = result.data.cards[0].card.card.imageGridCards.info;
      let ids = categories.map((category) => category.imageId);
      setImageIds(ids);
    });
  }

  return (
    <>
    {console.log("Loading now...")}
    <div className="category">
      <h2 style={{ textAlign: "center" }}>Categories</h2>
      <button onClick={fetchImageIds}>Load Categories</button>
      <div className="category-images">
        {imageIds.map((id, index) => (
          <img key={index} src={BASE_URL + id} alt={`Category ${index + 1}`} />
        ))}
      </div>
    </div>
</>
  );
}
export default Category;