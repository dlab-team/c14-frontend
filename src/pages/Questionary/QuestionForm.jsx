import React, {useState} from 'react';
import Button from '../../layouts/Button';
import useFormStore from '../../store/useFormStore';

const QuestionForm = ({ questions, onSubmit }) => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const currentQuestionIndex = useFormStore(state => state.currentQuestionIndex);
  const setAnswer = useFormStore(state => state.setAnswer);
  const setCurrentQuestionIndex = useFormStore(state => state.setCurrentQuestionIndex);
  const clearForm = useFormStore(state => state.clearForm);

  const handleOptionChange = (questionItem, optionId) => {
    setSelectedOptions(prevState => ({
      ...prevState,
      [questionItem]: optionId,
    }));
    setAnswer(questionItem, optionId);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(selectedOptions);
    setSelectedOptions({}); 
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handleConfirmation = () => {
    const confirmed = window.confirm('Estas seguro de que quieres enviar estas respuestas?');
    if (confirmed) {
      const answers = clearForm();
      alert('Respuestas guardadas:\n' + JSON.stringify(answers, null, 2));
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  if (!currentQuestion) {
    return (
      <div onClick={handleConfirmation}>
      <Button title="Enviar Respuestas"></Button>
    </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid w-96 pt-7">
      <div key={currentQuestion.item}>
        <div className="flex gap-x-7 pt-4">
         
          <p className="text-sm">{currentQuestion.title}</p>
        </div>
        <div className="grid grid-cols-2 gap-x-32">
          {currentQuestion.options.map(option => (
            <div key={option.id}>
              <input
                type="radio"
                name={`options${currentQuestion.item}`}
                id={`item${currentQuestion.item}option${option.id}`}
                checked={selectedOptions[currentQuestion.item] === option.id}
                onChange={() => handleOptionChange(currentQuestion.item, option.id)}
              />
              <label htmlFor={`item${currentQuestion.item}option${option.id}`}>
                {option.title}
              </label>
            </div>
          ))}
        </div>
      </div>
      <Button title="Continuar" />
    </form>
  );
};

export default QuestionForm;

