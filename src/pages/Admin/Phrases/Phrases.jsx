import AdminHeader from '@/components/admin/AdminHeader';
import { CiCirclePlus } from 'react-icons/ci';
import PhraseCard from './Components/PhraseCard';
import useGetAllPoly from './../../../hooks/PolynomialsHook/useGetAllPoly';
import Select from 'react-select';
import { useState, useEffect } from 'react';
import useGetPhrasesByIdPolinomial from '@/hooks/PhrasesHook/useGetPhrasesByIdPolinomial';

const Phrases = () => {
  const [selectedOption, setSelectedOption] = useState({
    value: 'aa1acca6-908e-4261-a882-f9e473da0bea',
    label: 'Político',
  });
  const [polynomials, setPolynomials] = useState([]);
  const { data: polynomialsData } = useGetAllPoly();
  const [selectedExtrm, setselectedExtrm] = useState([]);
  const [filteredOptions, setsfilteredOptions] = useState([]);
  const {
    data: PhrasesByIdPolinomial,
    isLoading,
    isError,
    refetch,
  } = useGetPhrasesByIdPolinomial(selectedOption?.value);

  useEffect(() => {
    if (polynomialsData) {
      setPolynomials(polynomialsData);
      setSelectedOption({
        value: polynomialsData[0].id,
        label: polynomialsData[0].name,
      });
    }
  }, [polynomialsData]);

  useEffect(() => {
    if (selectedOption?.value) {
      refetch();
    }
   setselectedExtrm([])
   setsfilteredOptions([]);
  }, [selectedOption, refetch]);

  const handleButton = () => {
    console.log('crear frase');
  };

  const handleChange = selectedExtrm => {
    setselectedExtrm(selectedExtrm);
    const filteredOptions = PhrasesByIdPolinomial.filter(item => item.group === selectedExtrm.value);
    setsfilteredOptions(filteredOptions);
  };

  return (
    <>
      <AdminHeader
        title={`Frases y Respuestas`}
        description="Aquí podrás editar frases y respuestas del cuestionario."
      />
      <main className="max-w-4xl mx-4 md:mx-auto">
        <p className="mt-5">Para ver las frases asociadas a cada grupo debe seleccionar un Polinomio y un grupo</p>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <Select
            className="md:w-52"
            id="selectOption"
            placeholder="Selecciona"
            options={polynomials?.map(poly => ({ value: poly.id, label: poly.name }))}
            onChange={selectedOption => setSelectedOption(selectedOption)}
            value={selectedOption}
          />
          <Select
            className="md:w-52 mt-2"
            id="selectOption"
            placeholder="Selecciona Extremo"
            options={[
              { value: 'Extremo 1', label: 'Extremo 1' },
              { value: 'Extremo 2', label: 'Extremo 2' },
            ]}
            onChange={handleChange}
            value={selectedExtrm}
          />
          <button
            className="bg-black px-4 py-2 my-10 rounded-2xl text-white text-xl font-bold flex justify-center items-center"
            onClick={handleButton}
          >
            Crear Frase <CiCirclePlus />
          </button>
        </div>
        {selectedOption &&
          (isLoading ? (
            <p>Loading...</p>
          ) : isError ? (
            <p>Error loading data</p>
          ) : (
            filteredOptions.map((phrase,index) => <PhraseCard key={phrase.id} phrase={phrase} index={index}></PhraseCard>)
          ))}
      </main>
    </>
  );
};

export default Phrases;
