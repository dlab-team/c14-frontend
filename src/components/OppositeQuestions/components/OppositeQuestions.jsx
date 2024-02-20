import { useState, useEffect } from 'react';
import Button from '@/layouts/Button';
import CardOpposite from './CardOpposite';
import HeaderOpposite from './HeaderOpposite';

const OppositeQuestions = ({ handleStep, oppositeResults, updateOppositeResult }) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [title, setTitle] = useState('Siguiente frase');

  useEffect(() => {
    if (currentPhraseIndex < (oppositeResults?.length ?? 0) - 1) {
      setTitle('Siguiente frase');
    } else {
      setTitle('Ver resultados');
    }
  }, [currentPhraseIndex, title, oppositeResults]);

  const handleOnClick = () => {
    if (currentPhraseIndex < (oppositeResults?.length ?? 0) - 1) {
      setCurrentPhraseIndex(prevIndex => prevIndex + 1);
    } else {
      handleStep();
    }
  };

  if (!oppositeResults[currentPhraseIndex]) {
    return null;
  }

  return (
    <>
      <HeaderOpposite phrase={oppositeResults[currentPhraseIndex]} />
      {oppositeResults?.length > 0 && (
        <CardOpposite
          phrase={oppositeResults[currentPhraseIndex]}
          key={oppositeResults[currentPhraseIndex]?.id}
          updateOppositeResult={updateOppositeResult}
        />
      )}

      <div className=" flex justify-end mx-auto mb-40 max-w-2xl">
        <Button onClick={handleOnClick} title={title}></Button>
      </div>
    </>
  );
};

export default OppositeQuestions;
