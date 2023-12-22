import { IoCheckmarkCircle } from 'react-icons/io5';
import Button from '@/layouts/Button';
import { Link } from 'react-router-dom';

const LeftSide = () => {
  const title = 'Ver resultados';

  return (
    <div className="flex-1 flex items-center justify-center md:mt-0 mt-10">
      <div className="border border-gray-300 shadow-xl shadow-gray-300 w-[300px] rounded-xl">
        <div className="flex flex-col justify-center items-center">
          <div className="flex items-center justify-center mb-4 mt-5">
            <IoCheckmarkCircle className="w-[9rem] h-[9rem] text-fuchsia-900 opacity-75" />
          </div>
          <div className="flex gap-x-4 pt-4 pb-5">
            <h1 className="font-semibold text-2xl text-center">Llegamos al final</h1>
          </div>
          <div className="flex gap-x-4">
            <h2 className="text-slate-950 ml-1 font-medium text-lg text-center">
              ¡Gracias por participar!
            </h2>
          </div>
          <div className="flex gap-x-3 text-sm mt-5 mb-7 w-[11rem]">
            <Link to="/" className="w-full">
              <Button title={title} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
