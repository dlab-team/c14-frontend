import AdminHeader from '@/components/admin/AdminHeader';
import { ResultsFooter } from './components/ResultsFooter'

const Results = () => {
  return (
    <div>
      <AdminHeader
        title="Resultados de mi brecha de percepción"
        fromColor="from-yellow-600"
        toColor="to-fuchsia-400"
        positionTitle="items-center"
      />
            <ResultsFooter />
    </div>
  );
};

export default Results;
