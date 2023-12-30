import backgroundHeaderMobile from '../../assets/img/admin/backgroundHeaderMobile.png';
import backgroundHeader from '../../assets/img/admin/backgroundHeader.png';
import banderas from '../../assets/img/banderas.png';
import Button from '../../layouts/Button';
import './StepOne.css';

const StepOne = () => {
  return (
    <div
      className="flex flex-col justify-center relative col-start-2 col-span-5 p-4 md:p-8 text-white h-[300px]"
      style={{ background: 'linear-gradient(to right, #35ABC7, #4CB69A)' }}
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
        <img width="70px" src={banderas} alt="" /><p>¿Con quién te identificas?</p>
        </div>
        <div className="parte-inferior">
          <label>
            <input type="radio" name="lado" /> Izquierda
          </label>
          <label>
            <input type="radio" name="lado" /> Derecha
          </label>
          <label>
            <input type="radio" name="lado" /> Centro
          </label>
          <label>
            <input type="radio" name="lado" /> Independiente
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

export default StepOne;