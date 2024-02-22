import AdminHeader from '@/components/admin/AdminHeader';
import Comparison from './components/Comparison.jsx';
import Finish from './components/Finish';
import KeepExploring from './components/KeepExploring';
import { Perception } from './components/Perception';
import { ResultsFooter } from './components/ResultsFooter';
import useFormStore from '@/store/useFormStore';
import { useState } from 'react';

const Results = () => {
  const step = useFormStore.getState().currentSurveySection;
  const [showImages, setShowImages] = useState(true);
  return (
    <div>
      <AdminHeader
        title="¡Conoce los resultados de tu test!"
        fromColor="from-yellow-600"
        toColor="to-fuchsia-400"
        positionTitle="items-center"
      />
      <Comparison />
      <Perception />
      {step === 3 ? <KeepExploring /> : <Finish />}
      <ResultsFooter showImages={showImages} />
    </div>
  );
};

export default Results;
