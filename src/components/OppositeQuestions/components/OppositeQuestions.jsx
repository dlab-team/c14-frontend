import { useState } from 'react';
import Button from '@/layouts/Button';
import CardOpposite from './CardOpposite';
import HeaderOpposite from './HeaderOpposite';

const OppositeQuestions = ({ handleStep, oppositeResults, updateOppositeResult }) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  const handleOnClick = () => {
    if (currentPhraseIndex < (oppositeResults?.length ?? 0) - 1) {
      setCurrentPhraseIndex(prevIndex => prevIndex + 1);
    } else {
      handleStep();
    }
  };

  return (
    <>
      <HeaderOpposite />
      {oppositeResults?.length > 0 && (
        <CardOpposite
          phrase={oppositeResults[currentPhraseIndex]}
          key={oppositeResults[currentPhraseIndex]?.id}
          updateOppositeResult={updateOppositeResult}
        />
      )}

      <div className=" flex justify-end mx-auto mb-40 max-w-2xl">
        <Button onClick={handleOnClick} title="Continuar"></Button>
      </div>
    </>
  );
};

export default OppositeQuestions;
