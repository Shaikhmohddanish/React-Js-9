
import AllResturants from './AllResturants';
import TopResturants from './TopResturants';

function Body(){
  return (
    <div className='body-container'>
      <h1 style={{ textAlign: "center", margin: "20px 0" }}>Top Resturants</h1>
      <div className='body'>
        <TopResturants />
        {/* <AllResturants/> */}
      </div>
    </div>
  );
}

export default Body;