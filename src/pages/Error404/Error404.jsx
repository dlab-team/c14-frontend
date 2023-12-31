import { Link } from 'react-router-dom';
import error404 from '../../assets/img/error404.png';
import bg404 from '../../assets/img/bg404.png';
import Button from '../../layouts/Button';
import './Error404.css';

const Error404 = () => {
  return (
    <div className="relative min-h-[90vh] flex justify-center items-center text-center overflow-hidden">
      <div className="bg-image hidden sm:block">
        <img src={bg404} alt="bg404" />
      </div>
      <div className="px-4 max-w-sm flex flex-col gap-4">
        <img className="error-image max-w-xs" src={error404} alt="error404" />
        <p className="error-message mb-4">Página no encontrada</p>
        <Link to="/">
          <Button title={'Volver al inicio'} className="rounded-lg" />
        </Link>
      </div>
    </div>
  );
};

export default Error404;
