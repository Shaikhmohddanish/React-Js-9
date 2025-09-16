import ResturantCard from "./ResturantCard";
import { useState, useEffect } from "react";
import { BASE_URL_API } from "./API_URL";
import Shimmer from "./Shimmer";

function TopResturants(){
  const [listOfResturants, setListOfResturants] = useState([]);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () =>{
    const data = await fetch(BASE_URL_API);
    const json = await data.json();
    const restaurants = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    setListOfResturants(restaurants);
  }
  return listOfResturants.length === 0 ? (
    <>
      <Shimmer />
    </>
  ) : (
    <>
    <div className='top-resturants'>
      {listOfResturants.map((resturant) => (
        <ResturantCard key={resturant.info.id} data={resturant} />
      ))}
      {/* Static fallback card - only shown when connected to API but empty */}
      {listOfResturants.length === 0 && <ResturantCard name='Resturant Name2' rating={4.0} eta={25} />}
    </div>
    </>
  );
}

export default TopResturants;