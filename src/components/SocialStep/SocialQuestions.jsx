import './SocialStep.css';
import { Controller } from 'react-hook-form';

const SocialQuestions = ({ pregunta, opciones, control, nombreDelControl, onOptionSelect }) => {
  const handleOptionSelect = option => {
    onOptionSelect({ name: option.name });
  };

  return (
    <div className="mb-10">
      <div className="p-9 text-center rounded-tl-md rounded-tr-md flex items-center justify-center bgsup">
        <p className="pl-4 flex items-center">{pregunta}</p>
      </div>
      <div className="parte-inferior2 flex-wrap bg-white flex justify-center p-5 xxl:flex-col xxl:items-center sm:mb-2.5 rounded-bl-lg rounded-br-lg">
        {opciones &&
          opciones.length > 0 &&
          opciones.map((option, optionIndex) => (
            <label
              key={optionIndex}
              className="max-w-full flex items-center text-black m-2 p-2.5 font-roboto font-semibold rounded-lg "
            >
              <Controller
                control={control}
                name={nombreDelControl}
                rules={{ required: true }}
                render={({ field }) => (
                  <>
                    <input
                      type="radio"
                      {...field}
                      value={option.id}
                      onClick={() => handleOptionSelect(option)}
                    />
                    {option.name}
                  </>
                )}
              />
            </label>
          ))}
      </div>
    </div>
  );
};

export default SocialQuestions;
