import { useEffect } from 'react';
import useFormStore from '@/store/useFormStore';
import useGetOppositeSocialPhrases from '@/hooks/useGetOppositeSocialPhrases';
import OppositeQuestions from './components/OppositeQuestions';
import Loader from '@/components/Loader/Loader';

const SocialOppositeQuestions = ({ handleStep }) => {
  const optionIds = useFormStore(state => state.socialCharacterization?.map(p => p.id));
  const oppositeSocialResult = useFormStore(s => s.oppositeSocialResult);
  const setOppositeSocialResult = useFormStore(s => s.setOppositeSocialResult);
  const { data: oppositeSocialPhrases, isLoading } = useGetOppositeSocialPhrases(optionIds);
  const updateOppositeSocialResult = useFormStore(state => state.updateOppositeSocialResult);

  useEffect(() => {
    if (!oppositeSocialResult?.length && oppositeSocialPhrases?.length) {
      setOppositeSocialResult(oppositeSocialPhrases);
    }
  }, [oppositeSocialPhrases, oppositeSocialResult, setOppositeSocialResult]);

  if (isLoading) return <Loader />;

  return (
    <OppositeQuestions
      handleStep={handleStep}
      oppositeResults={oppositeSocialResult}
      updateOppositeResult={updateOppositeSocialResult}
    />
  );
};
export default SocialOppositeQuestions;
