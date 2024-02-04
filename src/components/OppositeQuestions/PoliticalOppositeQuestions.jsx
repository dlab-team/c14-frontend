import { useEffect } from 'react';
import useFormStore from '@/store/useFormStore';
import useGetOppositePoliticalPhrases from '@/hooks/useGetOppositePoliticalPhrases';
import OppositeQuestions from './components/OppositeQuestions';

const PoliticalOppositeQuestions = ({ handleStep }) => {
  const optionId = useFormStore(state => state.politicalCharacterization);
  const opossitePoliticalResult = useFormStore(s => s.opossitePoliticalResult);
  const setOpossitePoliticalResult = useFormStore(s => s.setOpossitePoliticalResult);
  const { data: oppositePoliticalPhrases } = useGetOppositePoliticalPhrases(optionId);
  const updateOppositePoliticalResult = useFormStore(state => state.updateOpossitePoliticalResult);

  useEffect(() => {
    if (!opossitePoliticalResult?.length) {
      setOpossitePoliticalResult(oppositePoliticalPhrases);
    }
  }, [oppositePoliticalPhrases, opossitePoliticalResult, setOpossitePoliticalResult]);

  return (
    <OppositeQuestions
      handleStep={handleStep}
      oppositeResults={opossitePoliticalResult}
      updateOppositeResult={updateOppositePoliticalResult}
    />
  );
};
export default PoliticalOppositeQuestions;
