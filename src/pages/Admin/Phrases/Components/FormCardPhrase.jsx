import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { phrasesSchema } from '../../../../schemas/phrasesSchema';
import { CiCirclePlus } from 'react-icons/ci';
import { MdPercent } from 'react-icons/md';

const FormCardPhrase = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(phrasesSchema),
  });

  const onSubmit = data => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="relative my-10">
        <input
          type="phrase"
          placeholder="Escriba su pregunta aquí..."
          className="border rounded-lg border-slate-200 focus:outline-slate-500 h-12 px-8 w-full md:text-lg"
          {...register('phrase')}
        />
        <span className="text-xs text-red-500">{errors?.phrase?.message}</span>
      </div>

      <div className="flex justify-center md:justify-around flex-wrap text-xl mb-10 gap-8">
        <select
          className="border rounded-lg border-slate-200 px-3 font-semibold h-12 w-72 "
          {...register('binomio')}
        >
          <option value="" defaultValue>
            Identidad Politica
          </option>
          <option value="Opcion1">Opcion1</option>
          <option value="Opcion2">Opcion2</option>
          <option value="Opcion3">Opcion3</option>
        </select>

        <div className="flex items-stretch relative rounded-lg border border-slate-200 focus-within:outline-slate-500 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2">
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
      {/* ADD PHRASE BUTTON----------- */}
      <button className="font-medium border rounded-lg border-black flex justify-center items-center gap-2 w-full text-lg md:h-12">
        <span>Agregar Pregunta</span>
        <CiCirclePlus size={24} />
      </button>
    </form>
  );
};
export default FormCardPhrase;
