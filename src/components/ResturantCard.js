import { BASE_URL_IMG } from "./API_URL";
const ResturantCard = (props) => {
  // Handle older format (direct props) as well as API data format
  if (!props.data && props.name) {
    // Handle the manually created card with direct props
    const { name, rating, eta } = props;
    const ratingClass = rating >= 4.0 ? "rating-good" : rating >= 3.5 ? "rating-average" : "rating-poor";
    
    return (
      <div className="resturant-card">
        <div className="resturant-card-img">
          <img src="https://via.placeholder.com/150" alt={name} />
        </div>
        <div className="resturant-card-content">
          <h3 className="resturant-name">{name}</h3>
          <div className="resturant-cuisines">Various cuisines</div>
          <div className="resturant-details">
            <div className={`resturant-rating ${ratingClass}`}>
              <span className="star-icon">★</span> {rating}
            </div>
            <div className="resturant-delivery-time">
              {eta} mins
            </div>
            <div className="resturant-cost">
              ₹200 for two
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!props.data || !props.data.info) {
    return null; // Don't render anything if no data available
  }

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    sla,
    costForTwo
  } = props.data.info;
  
  // Make sure we have a valid cloudinaryImageId before creating the URL
  const imageUrl = cloudinaryImageId ? BASE_URL_IMG + cloudinaryImageId : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/irffa6yrsggpax50yj44";
  
  // Calculate rating class based on rating value
  const ratingClass = avgRating >= 4.0 ? "rating-good" : avgRating >= 3.5 ? "rating-average" : "rating-poor";
  
  return (
    <div className="resturant-card">
      <div className="resturant-card-img">
        <img 
          src={imageUrl} 
          alt={name} 
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/irffa6yrsggpax50yj44";
          }}
        />
      </div>
      <div className="resturant-card-content">
        <h3 className="resturant-name">{name}</h3>
        <div className="resturant-cuisines">{cuisines.join(", ")}</div>
        <div className="resturant-details">
          <div className={`resturant-rating ${ratingClass}`}>
            <span className="star-icon">★</span> {avgRating}
          </div>
          <div className="resturant-delivery-time">
            {sla.slaString}
          </div>
          <div className="resturant-cost">
            {costForTwo ? costForTwo : "₹200 for two"}
          </div>
        </div>
      </div>
    </div>  
  );
}

export default ResturantCard;