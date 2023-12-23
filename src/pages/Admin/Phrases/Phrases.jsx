import AdminHeader from '@/components/admin/AdminHeader';
import { CiCirclePlus } from 'react-icons/ci';
import PhraseCard from './Components/PhraseCard';
import { data } from './data';

const Phrases = () => {
  const handleButton = () => {
    console.log('crear frase');
  };

  return (
    <>
      <AdminHeader
        title={`Frases y Respuestas`}
        description="Aquí podrás editar frases y respuestas del cuestionario."
      />
      <main className="max-w-4xl mx-4 md:mx-auto">
        <div className="flex justify-end">
          <button
            className="bg-black px-4 py-2 my-10 rounded-2xl text-white text-xl font-bold flex justify-center items-center"
            onClick={handleButton}
          >
            Crear Frase <CiCirclePlus />
          </button>
        </div>
        {data.map(phrase => {
          return <PhraseCard key={phrase.id} phrase={phrase}></PhraseCard>;
        })}
      </main>
    </>
  );
};

export default Phrases;
