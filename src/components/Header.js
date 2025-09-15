function Header(){
  return (
    <div className='header'>
      <div className='header-logo'>
        <img src='./images/swiggy_logo_white.png' alt='Logo' />
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;