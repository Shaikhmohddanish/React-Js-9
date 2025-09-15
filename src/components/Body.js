
import AllResturants from './AllResturants';
import TopResturants from './TopResturants';
import Category from './Category';

function Body(){
  return (
    <div className='body'>
      <Category />
      <TopResturants />
      <AllResturants />
    </div>
  );
}

export default Body;