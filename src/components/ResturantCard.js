import { BASE_URL_IMG } from "./API_URL";
const ResturantCard = (props) => {

  console.log(props.data.info);
  
  // const {
  //   cloudinaryImageId,
  //   name,
  //   cuisines,
  //   avgRating,
  //   deliveryTime,
  // } = props.data;
  // const imageUrl = BASE_URL_IMG + cloudinaryImageId;
  // return (
  //   <div className="resturant-card">
  //     <img src={imageUrl} alt={name} />
  //     <h3>{name}</h3>
  //     <p>{avgRating} Star</p>
  //     <p>{deliveryTime} mins</p>
  //   </div>  
  // );
}

export default ResturantCard;