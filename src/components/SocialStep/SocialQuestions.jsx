import './SocialStep.css';
import { Controller } from 'react-hook-form';

const SocialQuestions = ({ question, options, control, index, onOptionSelect }) => {
  const handleOptionSelect = option => {
    onOptionSelect(option);
  };

  return (
    <div className="mb-10">
      <div className="p-9 text-center rounded-tl-md rounded-tr-md flex items-center justify-center bgsup">
        <p className="pl-4 flex items-center">{question}</p>
      </div>
      <div className="parte-inferior2 flex-wrap bg-white flex justify-center p-5 xxl:flex-col xxl:items-center sm:mb-2.5 rounded-bl-lg rounded-br-lg">
        {options?.map(option => (
          <label
            key={option.id}
            className="max-w-full flex items-center text-black m-2 p-2.5 font-roboto font-semibold rounded-lg "
          >
            <Controller
              control={control}
              name={`socialCharacterization.${index}`}
              rules={{ required: true }}
              render={({ field }) => (
                <>
                  <input
                    type="radio"
                    {...field}
                    value={option.id}
                    onClick={() => handleOptionSelect(option)}
                    required
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
