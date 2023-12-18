import React, { useState } from 'react';
import QuestionForm from './QuestionForm';
import { questions } from './info';

const Questionary = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

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
        questions={questions}
        currentQuestionIndex={currentQuestionIndex}
        onSubmit={handleSubmit}
        onNext={handleNext}
      />
    </div>
  );
};

export default Questionary;
