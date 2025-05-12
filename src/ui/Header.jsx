import { Link } from 'react-router-dom';


function Header() {
  return (
    <header className=" flex items-center justify-between border-b border-stone-200 bg-yellow-500 px-4 py-4 uppercase sm:px-6 font-pizza text-pizza">
      <Link to="/" className="tracking-widest">
        LOGO
      </Link>

     <ul className='flex align-middle gap-4 justify-center'>
      <li>Home</li>
      <li>Products</li>
      <li>About Us</li>
      <li>Contact</li>
     </ul>
    </header>
  );
}

export default Header;