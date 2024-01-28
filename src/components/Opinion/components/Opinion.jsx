import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { opinionSchema } from '@/schemas/opinionSchema';
import RadioInput from './RadioInput';
import Button from '@/layouts/Button';
import { Fragment } from 'react';
import useFormStore from '@/store/useFormStore';

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

const Opinion = ({ handleStep, opinionResult, updateOpinionResult }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      phrases: [],
    },
    resolver: yupResolver(opinionSchema),
  });

  const onSubmit = handleSubmit(data => {
    const results = useFormStore.getState().socialResult;
    console.log('Esto es results');
    console.log(results);
    // console.log('Esto es data');
    // console.log(data);
    // console.log('*****************');
    // console.log('Esto es results');
    // console.log(results);
    // console.log('*****************');
    //handleStep();
  });

  return (
    <div>
      <header className="flex flex-col items-center">
        <h2 className="text-5xl font-bold mt-6 text-center">Estudio Polarizaciones</h2>
        <p className="w-3/4 text-2xl text-center mt-24 text-slate-600">
          Esta encuesta es muy especial porque te vamos a desafiar. <br></br>A continuación, te
          presentaremos una serie de frases que quizás no representen exactamente tu pensamiento e
          incluso te pueden parecer un poco exageradas. <br></br>
          Lo que te pedimos es que hagas el esfuerzo por responder igualmente. <br></br>
          Sintetizar temas sociales en frases es complejo y siempre se generan problemas, pero es la
          única manera que tenemos de medir opiniones en una encuesta.
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
                <span className="">Muy en desacuerdo</span>
              </div>
              <div className="flex justify-center items-center">
                <span className="">En desacuerdo</span>
              </div>
              <div className="flex justify-center items-center px-1">
                <span className="text-center">De acuerdo</span>
              </div>
              <div className="flex justify-center items-center">
                <span className="">Muy de acuerdo</span>
              </div>
            </div>
          </div>
          {opinionResult?.map((p, index) => {
            return (
              <Fragment key={p.id}>
                <RadioInput
                  sentence={p.text}
                  bgColor={bgColors[index % 8]}
                  accentColor={accentColors[index % 8]}
                  register={register(`phrases.${index}`)}
                  phraseId={p.id}
                  updateOpinionResult={updateOpinionResult}
                  required
                />
                <div className="col-span-2 flex justify-end me-1 text-red-500">
                  {errors.phrases?.[index] && <p>{errors.phrases?.[index].message}</p>}
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
