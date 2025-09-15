import ResturantCard from "./ResturantCard";

function TopResturants(){
  return (
    <>
    <h1 style={{ textAlign: "center" }}>Top Resturants</h1>
    <div className='top-resturants'>
      <ResturantCard name='Resturant Name1' rating={4.5} eta={30} />
      <ResturantCard name='Resturant Name2' rating={4.0} eta={25} />
    </div>
    </>
  );
}

export default TopResturants;