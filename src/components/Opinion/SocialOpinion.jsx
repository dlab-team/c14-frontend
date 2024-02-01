import React, { useEffect } from 'react';
import useFormStore from '@/store/useFormStore';
import useGetSocialPhrases from '@/hooks/PhrasesHook/useGetSocialPhrases';
import Opinion from './components/Opinion';

const SocialOpinion = ({ handleStep }) => {
  const optionIds = useFormStore(state => state.socialCharacterization);
  const socialResult = useFormStore(s => s.socialResult);
  const setSocialResult = useFormStore(s => s.setSocialResult);
  const { data: socialPhrases, isLoading, isError } = useGetSocialPhrases(optionIds);
  const updateSocialResult = useFormStore(state => state.updateSocialResult);

  useEffect(() => {
    if (!socialResult?.length) {
      setSocialResult(socialPhrases);
    }
  }, [socialPhrases, socialResult, setSocialResult]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error</p>;
  }

  return (
    <Opinion
      handleStep={handleStep}
      opinionResult={socialResult}
      updateOpinionResult={updateSocialResult}
    />
  );
};

export default SocialOpinion;
