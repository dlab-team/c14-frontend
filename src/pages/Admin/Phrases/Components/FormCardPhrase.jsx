import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { phrasesSchema } from '../../../../schemas/phrasesSchema';
import { CiCirclePlus } from 'react-icons/ci';

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
      <div className="relative mt-10">
        <span className="absolute bottom-24 bg-white text-xs text-red-500">
          {errors?.phrase?.message}
        </span>
        <input
          type="phrase"
          placeholder="Escriba su pregunta aquí..."
          className="border rounded border-slate-200 h-14 px-10 w-full mb-10"
          {...register('phrase')}
        />
      </div>

      <div className="flex justify-center md:justify-around flex-wrap text-xl mb-10 gap-8">
        <select
          className="border rounded border-slate-200 px-3 font-semibold h-14 w-72 "
          {...register('binomio')}
        >
          <option value="" defaultValue>
            Identidad Politica
          </option>
          <option value="Opcion1">Opcion1</option>
          <option value="Opcion2">Opcion2</option>
          <option value="Opcion3">Opcion3</option>
        </select>

        <div className="border rounded border-slate-200 flex items-stretch relative ">
          <span className="absolute bottom-16 bg-white text-xs text-red-500">
            {errors?.porcentaje?.message}
          </span>
          <input
            type="number"
            min="0"
            max="100"
            {...register('porcentaje')}
            placeholder="acuerdo"
            className="px-3 w-32"
          />
          <div className="bg-[#34ABC9] text-white p-4 rounded-r">%</div>
        </div>
      </div>
      {/* ADD PHRASE BUTTON----------- */}
      <button className="border rounded border-black flex justify-center items-center w-full text-2xl md:h-14">
        Agregar Pregunta <CiCirclePlus className="mx-2" />
      </button>
    </form>
  );
};
export default FormCardPhrase;
