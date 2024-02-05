import { useEffect } from 'react';
import useFormStore from '@/store/useFormStore';
import useGetOppositeSocialPhrases from '@/hooks/useGetOppositeSocialPhrases';
import OppositeQuestions from './components/OppositeQuestions';

const SocialOppositeQuestions = ({ handleStep }) => {
  const optionIds = useFormStore(state => state.socialCharacterization);
  const oppositeSocialResult = useFormStore(s => s.oppositeSocialResult);
  const setOppositeSocialResult = useFormStore(s => s.setOppositeSocialResult);
  const { data: oppositeSocialPhrases } = useGetOppositeSocialPhrases(optionIds);
  const updateOppositeSocialResult = useFormStore(state => state.updateOppositeSocialResult);

  useEffect(() => {
    if (!oppositeSocialResult?.length) {
      setOppositeSocialResult(oppositeSocialPhrases);
    }
  }, [oppositeSocialPhrases, oppositeSocialResult, setOppositeSocialResult]);

  return (
    <OppositeQuestions
      handleStep={handleStep}
      oppositeResults={oppositeSocialResult}
      updateOppositeResult={updateOppositeSocialResult}
    />
  );
};
export default SocialOppositeQuestions;
