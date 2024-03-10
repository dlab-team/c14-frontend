import React, { useEffect } from 'react';
import useFormStore from '@/store/useFormStore';
import useGetSocialPhrases from '@/hooks/PhrasesHook/useGetSocialPhrases';
import Opinion from './components/Opinion';
import Loader from '@/components/Loader/Loader';

const SocialOpinion = ({ handleStep }) => {
  const optionIds = useFormStore(state => state.socialCharacterization?.map(p => p.id));
  const socialResult = useFormStore(s => s.socialResult);
  const setSocialResult = useFormStore(s => s.setSocialResult);
  const { data, isLoading, isError } = useGetSocialPhrases(optionIds);
  const updateSocialResult = useFormStore(state => state.updateSocialResult);

  useEffect(() => {
    if (!socialResult?.length) {
      setSocialResult(data);
    }
  }, [data, socialResult, setSocialResult]);

  if (isLoading) return <Loader />;

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
