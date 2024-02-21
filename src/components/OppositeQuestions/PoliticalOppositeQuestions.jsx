import { useEffect } from 'react';
import useFormStore from '@/store/useFormStore';
import useGetOppositePoliticalPhrases from '@/hooks/useGetOppositePoliticalPhrases';
import OppositeQuestions from './components/OppositeQuestions';

const PoliticalOppositeQuestions = ({ handleStep }) => {
  const optionId = useFormStore(state => state.politicalCharacterization);
  const oppositePoliticalResult = useFormStore(s => s.oppositePoliticalResult);
  const setOppositePoliticalResult = useFormStore(s => s.setOppositePoliticalResult);
  const { data: oppositePoliticalPhrases } = useGetOppositePoliticalPhrases(optionId);
  const updateOppositePoliticalResult = useFormStore(state => state.updateOppositePoliticalResult);
  console.log(oppositePoliticalResult)
  useEffect(() => {
    if (!oppositePoliticalResult?.length && oppositePoliticalPhrases?.length) {
      setOppositePoliticalResult(oppositePoliticalPhrases);
    }
  }, [oppositePoliticalPhrases, oppositePoliticalResult, setOppositePoliticalResult]);

  return (
    <OppositeQuestions
      handleStep={handleStep}
      oppositeResults={oppositePoliticalResult}
      updateOppositeResult={updateOppositePoliticalResult}
    />
  );
};
export default PoliticalOppositeQuestions;
