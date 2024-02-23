import { useEffect } from 'react';
import useFormStore from '@/store/useFormStore';
import useGetOppositePoliticalPhrases from '@/hooks/useGetOppositePoliticalPhrases';
import OppositeQuestions from './components/OppositeQuestions';
import Loader from '@/components/Loader/Loader';

const PoliticalOppositeQuestions = ({ handleStep }) => {
  const optionId = useFormStore(state => state.politicalCharacterization);
  const oppositePoliticalResult = useFormStore(s => s.oppositePoliticalResult);
  const setOppositePoliticalResult = useFormStore(s => s.setOppositePoliticalResult);
  const { data: oppositePoliticalPhrases, isLoading } = useGetOppositePoliticalPhrases(optionId);
  const updateOppositePoliticalResult = useFormStore(state => state.updateOppositePoliticalResult);

  useEffect(() => {
    if (!oppositePoliticalResult?.length && oppositePoliticalPhrases?.length) {
      setOppositePoliticalResult(oppositePoliticalPhrases);
    }
  }, [oppositePoliticalPhrases, oppositePoliticalResult, setOppositePoliticalResult]);

  if (isLoading) return <Loader />;

  return (
    <OppositeQuestions
      handleStep={handleStep}
      oppositeResults={oppositePoliticalResult}
      updateOppositeResult={updateOppositePoliticalResult}
    />
  );
};
export default PoliticalOppositeQuestions;
