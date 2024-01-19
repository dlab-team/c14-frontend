import AdminHeader from '@/components/admin/AdminHeader';
import { CiCirclePlus } from 'react-icons/ci';
import PhraseCard from './Components/PhraseCard';
import { data } from './data';
import useGetAllPoly from './../../../hooks/PolynomialsHook/useGetAllPoly';
import Select from 'react-select';
import { useState } from 'react';

const Phrases = () => {
  const {data: polynomials} = useGetAllPoly()
  const [selectedOption, setSelectedOption] = useState(null);
  
  const filteredPhrases = data.filter(phrase => phrase.polynomialId === selectedOption?.value);

  const handleButton = () => {
    console.log('crear frase');
  };

  const handleChange = selectedOption => {
    setSelectedOption(selectedOption);
  };
 

  return (
    <>
      <AdminHeader
        title={`Frases y Respuestas`}
        description="Aquí podrás editar frases y respuestas del cuestionario."
      />
      <main className="max-w-4xl mx-4 md:mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-10">
          <Select
            className="md:w-52"
            id="selectOption"
            placeholder="Selecciona"
            options={polynomials?.map(poly => ({ value: poly.id, label: poly.name }))}
            onChange={handleChange}
            value={selectedOption}
          />
          <button
            className="bg-black px-4 py-2 my-10 rounded-2xl text-white text-xl font-bold flex justify-center items-center"
            onClick={handleButton}
          >
            Crear Frase <CiCirclePlus />
          </button>
        </div>
        {selectedOption && (
          filteredPhrases.map(phrase =>{
            return <PhraseCard key={phrase.id} phrase={phrase}></PhraseCard>;
          })
        )}
      </main>
    </>
  );
};

export default Phrases;
