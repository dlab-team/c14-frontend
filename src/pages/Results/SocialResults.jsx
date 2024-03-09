import AdminHeader from '@/components/admin/AdminHeader';
import { SocialComparison } from './components/SocialComparison.jsx';
import { SocialPerception } from './components/SocialPerception.jsx';
import { ResultsFooter } from './components/ResultsFooter';
import Finish from './components/Finish';

const Results = () => {
  return (
    <div className="w-full">
      <AdminHeader
        title="¡Conoce los resultados de tu test!"
        fromColor="from-yellow-600"
        toColor="to-fuchsia-400"
        positionTitle="items-center"
      />
      <SocialComparison />
      <SocialPerception />

      <div className="max-w-4xl border-2 rounded-lg border-opacity-60 border-gray-400 w-[80%] mx-auto mt-[8vh]">
        <div className="w-[90%] mx-auto pt-10 pb-10 text-center">
          <p>
            A veces, por diversas razones, atribuimos a los otros que piensan distinto, ideas que
            con las que ellos no necesariamente están de acuerdo. Aplicar estereotipos en función de
            la tendencia política de alguien puede poner freno a la escucha y el diálogo.
          </p>
          <p>
            Este estudio y este test que estás haciendo es una oportunidad para que podamos mirarnos
            los unos a los otros y sorprendernos.
          </p>
          <p>Esta es una invitación a escuchar, a olvidar las etiquetas, a dialogar.</p>
        </div>
      </div>

      <Finish />
      <ResultsFooter showImages />
    </div>
  );
};

export default Results;
