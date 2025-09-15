import ResturantCard from "./ResturantCard";

function AllResturants(){
  return (
    <>
    <h1 style={{ textAlign: "center" }}>All Resturants Nearby</h1>
    <div className='all-resturants'>
      <ResturantCard name='Resturant Name3' rating={4.2} eta={28} />
      <ResturantCard name='Resturant Name4' rating={4.1} eta={22} />
      <ResturantCard name='Resturant Name5' rating={4.3} eta={35} />
      <ResturantCard name='Resturant Name6' rating={4.0} eta={40} />
    </div>
    </>
  );
}

export default AllResturants;