import { FaRegTrashCan, FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';
import { FiEdit3 } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { phrasesSchema } from '../../../../schemas/phrasesSchema';
import { MdPercent } from 'react-icons/md';
import useGetOptions from '@/hooks/OptionsHook/useGetOptions';
import Select from 'react-select';

const PhraseCard = ({ phrase, index }) => {
  const [showEdit, setShowEdit] = useState(true);
  const [activePhrase, setActivePhrase] = useState(true);
  const { data: options, isLoading, isError } = useGetOptions();
  const [filteredOptions, setsfilteredOptions] = useState([]);

  useEffect(() => {
    if (options) {
      const filteredOptions = options.filter(item => item.polynomialId === phrase.polynomialId);
      setsfilteredOptions(filteredOptions);
    }
  }, [options, phrase.polynomialId]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      phrase: '',
    },
    resolver: yupResolver(phrasesSchema),
  });

  const onSubmit = data => {
    console.log(phrase);
  };

  return (
    <div className="border rounded border-slate-200 bg-white shadow-xl p-4 md:p-10 mb-10">
      <div className="flex justify-between items-center text-2xl">
        <div className="flex flex-wrap">
          <p className="font-semibold me-2">Frase N°{index+1}</p>
          <span className="text-xs text-[#34ABC9] font-medium bg-[#E8FAFF] py-2 px-3 rounded-full">
            {phrase.group}
          </span>
        </div>

        <div className="flex gap-4 ">
          {/* DELETE - ACTIVE - EDIT BUTTONS -------- */}
          <button className="border rounded border-black p-1 ">
            <FaRegTrashCan />
          </button>
          <button
            onClick={() => setActivePhrase(!activePhrase)}
            className="border rounded border-black p-1 "
          >
            {activePhrase ? <FaRegEye /> : <FaRegEyeSlash />}
          </button>
          <button
            onClick={() => {
              setShowEdit(!showEdit);
              setValue('phrase', phrase.text);
            }}
            className={`border rounded border-black p-1 ${showEdit ? '' : 'bg-black text-white'}`}
          >
            <FiEdit3 />
          </button>
        </div>
      </div>
      {/* FORM */}
      {showEdit ? (
        <div className="mt-4 max-w-xl">{phrase.text}</div>
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
              {...register('phrase')}
            />
            <span className="text-xs text-red-500">{errors?.phrase?.message}</span>
          </div>

          <div className="flex flex-col mx-auto  flex-wrap max-w-xl text-xl mb-10 gap-8">
            {filteredOptions.map(poliOpt => {
              return (
                <div className="flex justify-between">
                  <div className="rounded-lg border border-slate-200 w-1/2 p-2">{poliOpt.name}</div>
                  <div className="flex items-stretch relative rounded-lg border border-slate-200 focus-within:outline-slate-500 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 max-h-11">
                    <span className="absolute bottom-16 bg-white text-xs text-red-500">
                      {errors?.porcentaje?.message}
                    </span>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      {...register('porcentaje')}
                      placeholder="acuerdo"
                      className="peer px-3 w-32 rounded-l-lg outline-none "
                    />
                    <div className="bg-[#34ABC9] text-white flex items-center rounded-r-lg px-3">
                      <MdPercent />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* SAVE PHRASE BUTTON----------- */}
          <button className="font-medium border rounded-lg border-black flex justify-center items-center gap-2 w-full text-lg md:h-12">
            <span>Guardar Cambios</span>
          </button>
        </form>
      )}
    </div>
  );
};
export default PhraseCard;
