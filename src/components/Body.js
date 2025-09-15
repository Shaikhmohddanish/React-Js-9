
import TopResturants from './TopResturants';
import Category from './Category';

function Body(){
  return (
    <div className='body'>
      {/* <Category /> */}
      <h1 style={{ textAlign: "center" }}>Top Resturants</h1>
      <TopResturants />
    </div>
  );
}

export default Body;