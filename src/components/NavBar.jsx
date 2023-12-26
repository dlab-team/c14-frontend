import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa6';

const NavBar = () => {
  return (
    <nav className="bg-white flex items-center justify-between h-[10vh] w-full px-16 border-b-2">
      <Link to="/">
        <FaArrowLeft size={30} />
      </Link>
      {/* <p className="font-semibold text-2xl">Lorem ipsum dolor sit</p> */}
      <Link to="/">
        <img src="/logo/logo-3xi-negro.png" alt="Logo 3xi" className="w-14 lg:pr-3" />
      </Link>
    </nav>
  );
};

export default NavBar;
