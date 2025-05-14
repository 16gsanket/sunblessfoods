import { Link } from 'react-router-dom';


function Header() {
  return (
    <header className=" flex items-center justify-between border-b border-stone-200 bg-light_brown px-4 py-4 uppercase sm:px-6 font-pizza text-pizza">
      <Link to="/" className="tracking-widest text-[20px] font-semibold">
        LOGO
      </Link>

     <ul className='flex align-middle gap-[62px] justify-center text-[20px] pr-10 font-semibold text-dark_brown'>
      <Link to='/'>
      <li className = 'hover:text-black hover:cursor-default'>Home</li>
      </Link>
      <Link to='/products'>
      <li className = 'hover:text-black hover:cursor-default'>Products</li>
      </Link>

      <Link to='/about'>
      <li className = 'hover:text-black hover:cursor-default'>About Us</li>
      </Link>

      <Link to='/contact'>
      <li className = 'hover:text-black hover:cursor-default'>Contact</li>
      </Link>
     </ul>
    </header>
  );
}

export default Header;