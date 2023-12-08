import Button from '../../../layouts/Button';
import { Link } from 'react-router-dom';
import { FaRegCircleCheck } from "react-icons/fa6";

function ChangedCard() {
    const title = "Volver a Acceder" 
 
  return (
      <div className="flex flex-col justify-center items-center">
        <div className="h-20 w-20 flex items-center justify-center mb-4 mt-5">
            <FaRegCircleCheck className="w-20 h-20"/>
        </div>
        <div className="flex gap-x-4 pt-4 pb-5">
            <h1 className="font-semibold text-2xl text-center">¡Contraseña cambiada!</h1>
        </div>
        <div className="flex gap-x-4 pt-1 pb-7">
            <p className="text-slate-950 ml-1 font-medium text-sm text-center">Su contraseña ha sido cambiada correctamente.</p>
        </div>
        <div className="flex gap-x-3 text-sm mt-7 w-full">
            <Link to="/auth/login" className="w-full">
            <Button title={title}/>
            </Link>
        </div>
      </div>
  );
  
}

export default ChangedCard;
