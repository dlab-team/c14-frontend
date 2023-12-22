import { useState } from 'react';
import useFormStore from '@/store/useFormStore';
import Button from '../../layouts/Button';
import { task } from './info';

const Questionary = () => {
  const setCurrentSurveySection = useFormStore(state => state.setCurrentSurveySection);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleCheckboxChange = () => {
    setAgreeTerms(!agreeTerms);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!agreeTerms) {
      alert('Debes estar de acuerdo con los términos y condiciones.');
      return;
    }
    setCurrentSurveySection(1);
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full h-36 bg-lime-500 flex justify-center items-center">
        <h1 className="font-medium text-5xl">Comenzamos con el cuestionario</h1>
      </div>
      <div className="flex gap-x-7 pt-4">
        <h3 className="text-sm font-medium">PASO 1</h3>
        <p className="text-sm">Selecciona la opción con la que te sientas más identificado.</p>
      </div>
      <form onSubmit={handleSubmit} className="grid w-96 pt-7">
        <div className="grid grid-cols-2 gap-x-32">
          {task.map(item => (
            <div key={item.item}>
              <input type="radio" name="options" id={`item${item.item}`} />
              <label htmlFor={`item${item.item}`}>
                {item.title} {item.item}
              </label>
            </div>
          ))}
        </div>
        <div className="flex gap-x-3 text-sm pt-24 pb-7">
          <input
            type="checkbox"
            id="conditions"
            checked={agreeTerms}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="conditions">Estoy de acuerdo con los términos y condiciones</label>
        </div>
        <Button title="Continuar" />
      </form>
    </div>
  );
};

export default Questionary;
