import { useEffect, useState } from 'react';

import { Information } from './components/Information';
import LeftSide from './components/LeftSide';
import { ResultsFooter } from '@/pages/Results/components/ResultsFooter';
import RightSide from './components/RightSide';
import useFormStore from '@/store/useFormStore';
import { useNavigate } from 'react-router-dom';

const Acknowledgments = () => {
  const navigate = useNavigate();
  const totalPerceptionGap = useFormStore(state => state.totalPerceptionGap);
  const [showImages, setShowImages] = useState(false);

  useEffect(() => {
    if (totalPerceptionGap === 0) {
      navigate('/');
    }
  }, [totalPerceptionGap, navigate]);

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-10 px-8 mt-9">
        <Information />
        <div className="flex flex-col lg:flex-row items-center justify-center gap-y-12 gap-x-32 mb-12">
          <LeftSide />
          <RightSide />
        </div>
      </div>
      <ResultsFooter showImages={showImages} />
    </>
  );
};

export default Acknowledgments;
