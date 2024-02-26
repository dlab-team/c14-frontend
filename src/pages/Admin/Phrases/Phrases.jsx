import { useEffect, useState } from 'react';

import AdminHeader from '@/components/admin/AdminHeader';
import { CiCirclePlus } from 'react-icons/ci';
import CreatePhraseModal from './Components/CreatePhraseModal';
import { ExtremeButtonGroup } from './Components/ExtremeButtonGroup';
import PhraseCard from './Components/PhraseCard';
import Select from 'react-select';
import { Toaster } from 'sonner';
import useGetAllPoly from './../../../hooks/PolynomialsHook/useGetAllPoly';
import useGetPhrasesByIdPolinomial from '@/hooks/PhrasesHook/useGetPhrasesByIdPolinomial';

const Phrases = () => {
  const [selectedOption, setSelectedOption] = useState({
    value: 'a1d1458c-14e1-404f-af2a-1b20601068bf',
    label: 'Politico',
  });
  const [polynomials, setPolynomials] = useState([]);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [extremo, setExtremo] = useState('Extremo 1');
  const { data: polynomialsData, isLoading, isError } = useGetAllPoly();
  const {
    data: phrasesData,
    refetch,
    isLoading: loadPhrase,
    isError: errorPhrase,
  } = useGetPhrasesByIdPolinomial(selectedOption?.value);

  useEffect(() => {
    if (polynomialsData && polynomialsData.length > 0) {
      setPolynomials(polynomialsData);
      setSelectedOption({
        value: polynomialsData[0].id,
        label: polynomialsData[0].name,
      });
    }
  }, [polynomialsData]);

  useEffect(() => {
    if (selectedOption) {
      refetch();
    }
  }, [selectedOption, refetch]);

  useEffect(() => {
    if (phrasesData) {
      setFilteredOptions(phrasesData.filter(item => item.group === extremo));
    }
  }, [phrasesData, extremo]);

  const handleExtreme = extreme => {
    if (extreme !== extremo) {
      setExtremo(extreme);
    }
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <AdminHeader
        title={`Frases y Respuestas`}
        description="Aquí podrás editar frases y respuestas del cuestionario."
      />
      <main className="max-w-4xl mx-4 md:mx-auto">
        <Toaster position="top-center" />
        <p className="mt-5 font-bold">
          Para ver las frases asociadas a cada grupo debe seleccionar un Polinomio y un grupo.
        </p>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <Select
            className="md:w-52 my-4"
            id="selectOption"
            placeholder="Selecciona"
            options={polynomials.map(poly => ({ value: poly.id, label: poly.name }))}
            onChange={setSelectedOption}
            value={selectedOption}
          />

          <ExtremeButtonGroup currentExtreme={extremo} handleExtreme={handleExtreme} />

          <button
            className="bg-black px-4 py-2 md:my-10 my-4 rounded-2xl text-white text-xl font-bold flex justify-center items-center transition-all hover:scale-105"
            onClick={() => toggleModal()}
          >
            Crear Frase <CiCirclePlus />
          </button>
        </div>
        {isLoading && loadPhrase && <p>Loading...</p>}
        {isError && errorPhrase && <p>Error loading data</p>}
        {!isLoading && !isError && (
          <div>
            {filteredOptions.map((phrase, index) => (
              <PhraseCard key={phrase.id} phrase={phrase} index={index} />
            ))}
          </div>
        )}
        {isOpen && <CreatePhraseModal isOpen={isOpen} onClose={() => setIsOpen(false)} />}
      </main>
    </>
  );
};

export default Phrases;
