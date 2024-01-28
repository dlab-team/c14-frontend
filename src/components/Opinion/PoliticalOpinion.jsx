import React, { useEffect } from 'react';
import useFormStore from '@/store/useFormStore';
import useGetPoliticalPhrases from '@/hooks/PhrasesHook/useGetPoliticalPhrases';
import Opinion from './components/Opinion';

const PoliticalOpinion = ({ handleStep }) => {
  const optionId = useFormStore(state => state.politicalCharacterization);
  const politicalResult = useFormStore(s => s.politicalResult);
  const setPoliticalResult = useFormStore(s => s.setPoliticalResult);
  const { data: politicalPhrases, isLoading, isError } = useGetPoliticalPhrases(optionId);
  const updatePoliticalResult = useFormStore(state => state.updatePoliticalResult);
  console.log('Esto es politicalPhrass en PoliticalOpinion.jsx');
  console.log(politicalPhrases);

  useEffect(() => {
    if (!politicalResult?.length) {
      setPoliticalResult(politicalPhrases);
    }
  }, [politicalPhrases, politicalResult, setPoliticalResult]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error</p>;
  }

  return (
    <Opinion
      handleStep={handleStep}
      opinionResult={politicalResult}
      updateOpinionResult={updatePoliticalResult}
    />
  );
};

export default PoliticalOpinion;
