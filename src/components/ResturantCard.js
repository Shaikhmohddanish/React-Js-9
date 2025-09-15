function ResturantCard({ name, rating, eta }){
  return(
    <div className='resturant-card'>
      <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/897bc750-6b57-4e7d-9365-87c1ab2c6d7e_Chinese2.png' alt='Resturant' />
      <h3>{name}</h3>
      <p>{rating} Star</p>
      <p>{eta} mins</p>
    </div>
  );
}

export default ResturantCard;