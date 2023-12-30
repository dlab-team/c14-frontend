import { Link } from 'react-router-dom';
import error404 from '../../assets/img/error404.png';
import bg404 from '../../assets/img/bg404.png';
import Button from '../../layouts/Button';
import './Error404.css';

const Error404 = () => {
  return (
    <div className="error-container">
      <div className="bg-image">
        <img src={bg404} alt="bg404" />
      </div>
      <div className="error-content">
        <img className="error-image" src={error404} alt="error404" />
        <p className="error-message">Página no encontrada</p>
        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          <Link to="/">
            <Button title={'Volver al inicio'} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error404;
