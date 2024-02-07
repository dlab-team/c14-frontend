import AdminHeader from '@/components/admin/AdminHeader';
import { ResultsFooter } from './components/ResultsFooter';
import Comparison from './components/Comparison.jsx';
import { Perception } from './components/Perception';
import KeepExploring from './components/KeepExploring';
import useFormStore from '@/store/useFormStore';
import Finish from './components/Finish';

const Results = () => {
  const step = useFormStore.getState().currentSurveySection;

  return (
    <div>
      <AdminHeader
        title="Resultados de mi brecha de percepción"
        fromColor="from-yellow-600"
        toColor="to-fuchsia-400"
        positionTitle="items-center"
      />
      <Comparison />
      <Perception />
      {step === 3 ? <KeepExploring /> : <Finish />}
      <ResultsFooter />
    </div>
  );
};

export default Results;
