import AdminHeader from '@/components/admin/AdminHeader';
import { twMerge } from 'tailwind-merge';
import useGetAllPoliticalPhrases from '@/hooks/PhrasesHook/useGetAllPoliticalPhrases';
import { useState } from 'react';

const PolarizedPoliticalPhrases = () => {
  const { data: phrases, isLoading, isError, refetch } = useGetAllPoliticalPhrases();
  const [isPolarized, setIsPolarized] = useState(true);

  return (
    <>
      <AdminHeader
        title={`Frases Políticas Polarizadas`}
        description="Aquí podrás modificar la polarización de las frases."
      />

      <div className="relative overflow-x-auto rounded-lg p-3 m-3 mt-10 bg-white border-2 w-5/6 mx-auto">
        <table className="table-auto w-full text-sm text-left text-gray-500">
          <caption className="p-5 text-lg font-semibold text-left rtl:text-righ dark:text-black">
            Frases
          </caption>
          <thead className="text-xs text-gray-900 border-y-3 border-black">
            <tr>
              <th scope="col" className="hidden sm:table-cell px-6 py-3"></th>
              <th scope="col" className="px-6 py-3">
                Frases
              </th>
              <th scope="col" className="px-6 py-3">
                Polarización
              </th>
            </tr>
          </thead>
          <tbody className="text-#5C5E64 divide-y divide-slate-#5C5E64 px-6 border-t">
            {phrases?.map((phrase, index) => (
              <tr key={phrase.id}>
                <th
                  scope="row"
                  className="hidden sm:table-cell px-2 py-2 font-medium  whitespace-nowrap w-2 text-center"
                >
                  {index + 1}.-
                </th>
                <th
                  scope="row"
                  className="flex px-2 py-2 font-medium whitespace-normal w-auto overflow-auto"
                >
                  {phrase.text}
                </th>
                <td className="hidden md:table-cell px-3 py-2 ms-2 font-medium whitespace-nowrap w-10">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center rounded-2xl">
                    <button
                      className={twMerge(
                        'px-4 py-2 text-md rounded-l-2xl text-white font-bold flex justify-center items-center transition-all hover:scale-105 bg-neutral-400 border',
                        isPolarized === 'Polarizado' && 'bg-purple-500'
                      )}
                      // onClick={handleClick}
                    >
                      Polarizado
                    </button>

                    <button
                      className={twMerge(
                        'px-4 py-2 text-md rounded-r-2xl text-white font-bold flex justify-center items-center transition-all hover:scale-105 bg-neutral-400 border',
                        isPolarized === 'No Polarizado' && 'bg-teal-500'
                      )}
                      // onClick={handleClick}
                    >
                      No Polarizado
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
