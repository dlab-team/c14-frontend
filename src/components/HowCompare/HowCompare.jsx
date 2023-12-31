import backgroundHeaderMobile from '../../assets/img/admin/backgroundHeaderMobile.png';
import backgroundHeader from '../../assets/img/admin/backgroundHeader.png';
import banderas from '../../assets/img/banderas.png';
import Button from '../../layouts/Button';
import './HowCompare.css';

const HowCompare = () => {
  return (
    <div
      className="flex flex-col justify-center relative col-start-2 col-span-5 p-4 md:p-8 text-white h-[300px]"
      style={{ background: 'linear-gradient(to right, #DF1A84, #E23F43)' }}
    >
      <img
        src={backgroundHeaderMobile}
        alt="Background Header"
        className="absolute inset-0 w-full h-full object-cover md:hidden"
      />
      <img
        src={backgroundHeader}
        alt="Background Header"
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
      />
      
      <div className="contenedor">
        <div className="parte-superior">            
        <img width="70px" src={banderas} alt="" /><p>¿Con quién te quieres comparar?</p>
        </div>
        <div className="parte-inferior">
          <label>
            <input type="radio" name="lado" /> Izquierda
          </label>
          <label>
            <input type="radio" name="lado" /> Derecha
          </label>
        </div>
        <div className="col-span-2 flex justify-end">
        <div className="w-1/3 md:w-1/6 mr-1 mt-10 ">
          <Button title={'Continuar'} />
        </div>
      </div>
      </div>      
    </div>
  );
};

export default HowCompare;
