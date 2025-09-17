import ResturantCard from "./ResturantCard";

function AllResturants(){
  return (
    <>
    <h1 style={{ textAlign: "center" }}>All Resturants Nearby</h1>
    <div className='all-resturants'>
      <ResturantCard name='Resturant Name3' rating={4.2} eta={28} />
    </div>
    </>
  );
}

export default AllResturants;