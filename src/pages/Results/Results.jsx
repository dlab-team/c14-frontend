import AdminHeader from '@/components/admin/AdminHeader';
import { ResultsFooter } from './components/ResultsFooter';
import Comparison from './components/Comparison.jsx';
import KeepExploring from './components/KeepExploring';

const Results = () => {
  return (
    <div>
      <AdminHeader
        title="Resultados de mi brecha de percepción"
        fromColor="from-yellow-600"
        toColor="to-fuchsia-400"
        positionTitle="items-center"
      />
      <Comparison />
      <KeepExploring />
      <ResultsFooter />
    </div>
  );
};

export default Results;
