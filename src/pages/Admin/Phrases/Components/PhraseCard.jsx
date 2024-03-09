import { FaRegTrashCan } from 'react-icons/fa6';
import { FiEdit3 } from 'react-icons/fi';
import { MdPercent } from 'react-icons/md';
import { phrasesSchema } from '../../../../schemas/phrasesSchema';
import useDeletePhrase from '@/hooks/PhrasesHook/useDeletePhrase';
import useEditPhrase from '@/hooks/PhrasesHook/useEditPhrase';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { twMerge } from 'tailwind-merge';

const PhraseCard = ({ phrase, index }) => {
  const { mutate: deletePhrase } = useDeletePhrase();
  const { mutate: updatePhrase } = useEditPhrase();
  const [showEdit, setShowEdit] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: phrase,
    resolver: yupResolver(phrasesSchema),
  });

  const onSubmit = data => {
    updatePhrase({
      ...phrase,
      text: data.text,
      survey_results: data.survey_results,
    });
    setShowEdit(false);
  };

  const deleteOnePhrase = async id => {
    const status = window.confirm(`¿Estás seguro de eliminar la frase?`);
    if (status) {
      deletePhrase(id);
    }
  };

  return (
    <div className="border rounded border-slate-200 bg-white shadow-xl p-4 md:p-10 mb-10">
      <div className="flex justify-between items-center text-2xl">
        <div className="flex flex-wrap">
          <p className="font-semibold me-2">Frase N°{index + 1}</p>
          <span
            className={twMerge(
              'text-xs text-[#7e22ce] font-medium bg-[#FBD7FF] py-2 px-3 rounded-full',
              phrase.group === 'Extremo 2' && 'text-[#006666] bg-[#CFF5FF]'
            )}
          >
            {phrase.options ?? phrase.group}
          </span>
        </div>

        <div className="flex gap-3">
          <button
            className="p-1 border hover:border-neutral-400 border-white rounded-md transition-all hover:scale-105"
            onClick={() => deleteOnePhrase(phrase.id)}
          >
            <FaRegTrashCan size={26} color="Crimson" />
          </button>
          <button
            onClick={() => {
              setShowEdit(!showEdit);
              setValue('phrase', phrase.text);
            }}
            className={twMerge(
              `p-1 border hover:border-neutral-400 border-white rounded-md transition-all hover:scale-105`,
              showEdit && 'shadow border'
            )}
          >
            <FiEdit3 size={26} color="DarkCyan" />
          </button>
        </div>
      </div>
      {/* FORM */}
      {!showEdit ? (
        <div className="mt-4 max-w-xl">
          <p className="mb-2">{phrase.text}</p>
          <footer className="flex flex-wrap gap-2 items-center">
            {phrase.survey_results.map((result, index) => {
              return (
                <span
                  className="text-neutral-600 bg-neutral-300 px-3 py-1 rounded-full"
                  key={'chip' + result.phraseId + result.polynomialOptionId}
                >
                  {result.polynomial_option.name}: {result.percentage}
                </span>
              );
            })}
          </footer>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="relative my-10">
            <span className="text-xs text-red-500">{errors?.phrase?.message}</span>
          </div>
          <div className="relative my-10">
            <input
              type="phrase"
              placeholder={'Escriba su pregunta aquí...'}
              className="border rounded-lg border-slate-200 focus:outline-slate-500 h-12 px-8 w-full md:text-lg"
              {...register('text')}
            />
            <span className="text-xs text-red-500">{errors?.phrase?.message}</span>
          </div>

          <div className="flex flex-col max-w-md mx-auto text-xl mb-8 gap-4">
            {phrase.survey_results.map((result, index) => {
              return (
                <div
                  className="flex flex-col max-w-md"
                  key={result.phraseId + result.polynomialOptionId}
                >
                  <div className="flex items-stretch justify-center rounded-lg border border-slate-200 focus-within:outline-slate-500 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 max-h-11">
                    <div className="rounded-s-lg bg-neutral-300 grow py-2 pl-4">
                      {result.polynomial_option.name}
                    </div>
                    <input
                      type="number"
                      min={0}
                      max={1}
                      step={0.01}
                      {...register(`survey_results.${index}.percentage`, {
                        max: 1,
                        min: 0,
                      })}
                      placeholder="acuerdo"
                      className="peer px-3 w-32 rounded-l-lg outline-none text-center"
                    />
                    <div className="bg-[#34ABC9] text-white flex items-center rounded-r-lg px-3">
                      <MdPercent />
                    </div>
                  </div>
                  <span className="col-span-2 text-center text-xs text-red-500">
                    {errors?.porcentaje?.message}
                  </span>
                </div>
              );
            })}
          </div>

          {/* SAVE PHRASE BUTTON----------- */}
          <button className="max-w-lg mx-auto font-medium border py-2 rounded-lg border-black flex justify-center items-center gap-2 w-full text-lg transition-all hover:scale-105">
            <span>Guardar Cambios</span>
          </button>
        </form>
      )}
    </div>
  );
};
export default PhraseCard;
