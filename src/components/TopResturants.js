import ResturantCard from "./ResturantCard";
import { useState, useEffect } from "react";
import { BASE_URL_API } from "./API_URL";
import Shimmer from "./Shimmer";

function TopResturants() {
  const [listOfResturants, setListOfResturants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(BASE_URL_API);
    const json = await data.json();
    const restaurants =
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    setListOfResturants(restaurants);
  };

  const setUpdatedResturants = (searchText) => {
    const filteredResturants = listOfResturants.filter((resturant) =>
      resturant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setListOfResturants(filteredResturants);
  }
  // let searchInputData = "";
  const [searchInputData,setSearchInputData] = useState("");
  // const [searchData, setSearchData] = useState("");
  return listOfResturants.length === 0 ? (
    <>
      <Shimmer />
    </>
  ) : (
    <>
      {/* <div className="search-container">
        <input type="text" value={searchData} className="search-input" placeholder="Search for restaurants..." onChange={(e) => setSearchData(e.target.value)} />
        <button className="search-button" onClick={() => {setUpdatedResturants(searchData)}}>Search</button>
      </div> */}
      <div>
        <input type="text" value={searchInputData} placeholder="Search Restaurants" onChange={(event) => setSearchInputData(event.target.value)}/>
        <button onClick={()=>{setUpdatedResturants(searchInputData)}}>Search</button>
      </div>
      <div className="top-resturants">
        {listOfResturants.map((resturant) =>
          <ResturantCard data={resturant} key={resturant.info.id} />
        )}
      </div>
    </>
  );
}

export default TopResturants;
