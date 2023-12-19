import React, { useState } from 'react';
import QuestionForm from './QuestionForm';
import { caracterizacion } from './caracterization';
import useFormStore from '../../store/useFormStore';

const Questionary = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  //Seteo la seccion actual
  useFormStore.setState({ currentSurveySection: 'questionary' });
  const currentSurveySection = useFormStore(state => state.currentSurveySection);;
  console.log(currentSurveySection)

  const handleSubmit = selectedOptions => {
    console.log('Selected Options:', selectedOptions);
    
  };

  const handleNext = () => {
    setCurrentQuestionIndex(prevIndex => prevIndex + 1);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full h-36 bg-lime-500 flex justify-center items-center">
        <h1 className="font-medium text-5xl">Comenzamos con el cuestionario</h1>
      </div>
      <QuestionForm
        questions={caracterizacion}
        currentQuestionIndex={currentQuestionIndex}
        onSubmit={handleSubmit}
        onNext={handleNext}
      />
    </div>
  );
};

export default Questionary;
