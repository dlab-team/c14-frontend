import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { opinionSchema } from '@/schemas/opinionSchema';
import RadioInput from './components/RadioInput';
import Button from '@/layouts/Button';
import useFormStore from '@/store/useFormStore';
import useGetPoliticalPhrases from '@/hooks/PhrasesHook/useGetPoliticalPhrases';
import { Fragment } from 'react';

const Opinion = ({ handleStep }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(opinionSchema),
  });

  const optionId = useFormStore(state => state.politicalCharacterization);
  const { data: politicalPhrases, isLoading, isError } = useGetPoliticalPhrases(optionId);

  const bgColors = [
    'bg-purple-500',
    'bg-teal-500',
    'bg-lime-500',
    'bg-orange-500',
    'bg-pink-500',
    'bg-red-500',
    'bg-indigo-500',
    'bg-sky-500',
  ];

  const accentColors = [
    'accent-purple-500',
    'accent-teal-600',
    'accent-lime-600',
    'accent-orange-600',
    'accent-pink-500',
    'accent-red-500',
    'accent-indigo-500',
    'accent-sky-600',
  ];

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error</p>;
  }

  const onSubmit = handleSubmit(data => {
    handleStep();
  });

  return (
    <div>
      <header className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mt-16">3XI CRITERIA</h1>
        <div className="bg-gradient-to-r from-orange-500 via-purple-500 to-lime-500 h-2 w-64 rounded-full mt-6"></div>
        <h2 className="text-5xl font-bold mt-6 text-center">Estudio Polarizaciones</h2>
        <p className="w-3/4 text-2xl text-center mt-24 text-slate-600">
          Esta encuesta es muy especial porque te vamos a desafiar. A continuación, te presentaremos
          una serie de frases que quizás no representen exactamente tu pensamiento e incluso te
          pueden parecer un poco exageradas. Y lo que te pedimos es que hagas el esfuerzo por
          responder igualmente. Sintetizar temas sociales en frases es complejo y siempre se generan
          problemas, pero es la única manera que tenemos de medir opiniones en una encuesta.
        </p>
      </header>
      <section className="flex flex-col items-center mt-24 mb-28 sm:mx-14 md:mx-0">
        <p className="text-2xl font-bold text-center mx-6">
          ¿Qué tan de acuerdo estás con cada una de estas frases?
        </p>

        <form onSubmit={onSubmit} className="w-10/12 lg:w-3/4 md:grid md:grid-cols-2 mt-8 md:mt-16">
          <div className="hidden md:block col-start-2">
            <div className="grid grid-cols-4 divide-x-2 border-x-2 border-t-2 rounded-t-lg text-xs lg:text-sm font-bold h-16 text-center">
              <div className="flex justify-center items-center px-1">
                <span className="">Muy de acuerdo</span>
              </div>
              <div className="flex justify-center items-center">
                <span className="">De acuerdo</span>
              </div>
              <div className="flex justify-center items-center px-1">
                <span className="text-center">Medianamente de acuerdo</span>
              </div>
              <div className="flex justify-center items-center">
                <span className="">Desacuerdo</span>
              </div>
            </div>
          </div>
          {politicalPhrases?.map((p, index) => {
            let nameRegister = `phrase.${index}`;
            return (
              <Fragment key={p.id}>
                <RadioInput
                  bgColor={bgColors[index > 7 ? index % 8 : index]}
                  sentence={p.text}
                  accentColor={accentColors[index > 7 ? index % 8 : index]}
                  register={register(nameRegister)}
                  required
                />
                <div className="col-span-2 flex justify-end me-1 text-red-500">
                  {errors.nameRegister && <p>{errors.nameRegister.message}</p>}
                </div>
              </Fragment>
            );
          })}
          <div className="col-span-2 flex justify-end">
            <div className="w-1/3 md:w-1/6 mr-1 mt-10 ">
              <Button title={'Continuar'} />
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Opinion;
