import { useEffect, useState } from 'react';

import AdminHeader from '@/components/admin/AdminHeader';
import { twMerge } from 'tailwind-merge';
import useGetAllPoliticalPhrases from '@/hooks/PhrasesHook/useGetAllPoliticalPhrases';
import usePutPhrasesPolarized from '@/hooks/PhrasesHook/usePutPhrasesPolarized';

const PolarizedPoliticalPhrases = () => {
  const { data: phrases, refetch } = useGetAllPoliticalPhrases();
  const { mutate: updatePolarized } = usePutPhrasesPolarized();
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    checkPolarization();
  }, [phrases]);

  const checkPolarization = () => {
    if (!phrases) return;

    const allPolarized = phrases.every(phrase => phrase.neutral);
    const allNotPolarized = phrases.every(phrase => !phrase.neutral);

    if (allPolarized || allNotPolarized) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  };

  const handleToggle = id => {
    updatePolarized({ id });
    refetch();
  };

  return (
    <>
      <AdminHeader
        title={`Frases Políticas Polarizadas`}
        description="Aquí podrás modificar la polarización de las frases."
      />

      <div
        className={`relative overflow-x-auto rounded-lg p-3 m-3 mt-10 bg-white border-2 w-5/6 mx-auto shadow-xl ${
          showAlert ? ' shadow-red-400' : ''
        }`}
      >
        {showAlert && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative m-3 text-center"
            role="alert"
          >
            <strong className="font-bold">¡Alerta!</strong>
            <span className="block sm:inline ms-2">
              Si todas las frases están{' '}
              <p className="inline underline">Polarizadas o No Polarizadas</p> habrán secciones
              vacias en el formulario.
            </span>
          </div>
        )}
        <table className="table-auto w-full text-sm text-left text-gray-500">
          <caption className="p-4 text-2xl font-semibold text-left rtl:text-righ dark:text-black">
            Frases
          </caption>
          <thead className="text-xs text-gray-900 border-y-3 border-black">
            <tr>
              <th scope="col" className="hidden sm:table-cell px-6 py-3"></th>
              <th scope="col" className="px-6 py-3 text-center">
                Frases
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Polarización
              </th>
            </tr>
          </thead>
          <tbody className="text-#5C5E64 divide-y divide-slate-#5C5E64 px-6 border-t">
            {phrases?.map((phrase, index) => (
              <tr key={phrase.id}>
                <th
                  scope="row"
                  className="hidden sm:table-cell px-2 py-2 font-medium whitespace-nowrap w-2 text-center"
                >
                  {index + 1}.-
                </th>
                <th
                  scope="row"
                  className="px-2 py-2 font-medium whitespace-normal w-auto overflow-auto min-w-[10rem]"
                >
                  {phrase.text}
                </th>
                <td className="px-3 py-2 ms-2 font-medium whitespace-nowrap w-10">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center rounded-2xl">
                    <button
                      className={twMerge(
                        'max-w-md text-md rounded-2xl text-white font-bold flex justify-center items-center transition-all hover:scale-105 bg-neutral-400 border overflow-hidden'
                      )}
                      onClick={() => {
                        handleToggle(phrase.id);
                        checkPolarization();
                      }}
                    >
                      <span
                        className={twMerge(
                          'w-28 p-2 block md:hidden',
                          phrase.neutral && 'bg-purple-500',
                          !phrase.neutral && 'bg-teal-500'
                        )}
                      >
                        {phrase.neutral ? 'Si' : 'No'}
                      </span>
                      <span
                        className={twMerge(
                          'w-28 p-2 hidden md:block',
                          !phrase.neutral && 'bg-teal-500'
                        )}
                      >
                        No Polarizado
                      </span>
                      <span
                        className={twMerge(
                          'w-28 p-2 hidden md:block',
                          phrase.neutral && 'bg-purple-500'
                        )}
                      >
                        Polarizado
                      </span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PolarizedPoliticalPhrases;
