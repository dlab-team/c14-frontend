import { Link } from 'react-router-dom';
import { TiArrowBack } from 'react-icons/ti';

const NavBar = () => {
  return (
    <nav className="bg-white flex items-center justify-between py-[30px] px-16 border-b-2">
      <Link to="/">
        <TiArrowBack size={35} />
      </Link>
      <p className="font-semibold text-2xl">Lorem ipsum dolor sit</p>
      <Link to="/">
        <img src="/logo/logo-3xi-negro.png" alt="Logo 3xi" className="h-10 pr-3" />
      </Link>
    </nav>
  );
};

export default NavBar;
