import ResturantCard from "./ResturantCard";
import { useState, useEffect } from "react";
import { BASE_URL_API } from "./API_URL";
import Shimmer from "./Shimmer";
function TopResturants(){
  const [listOfResturants, setListOfResturants] = useState([]);

  useEffect(() => {
    console.log("UseEffect Called");
    
    fetchData();
  }, []);

  const fetchData = async () =>{
    const data = await fetch(BASE_URL_API);
    const json = await data.json();
    console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);

    setListOfResturants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  }
  return listOfResturants.length === 0 ? (
    <>
    {console.log("Loading...")}
      <Shimmer />
    </>
  ) : (
    <>
    {console.log("Loading...")}
    <h1 style={{ textAlign: "center" }}>Top Resturants</h1>
    <div className='top-resturants'>
      {listOfResturants.map((resturant) => (
        <ResturantCard key={resturant.id} data={resturant} />
      ))}
      <ResturantCard name='Resturant Name2' rating={4.0} eta={25} />
    </div>
    </>
  );
}

export default TopResturants;