import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { opinionSchema } from '@/schemas/opinionSchema';
import RadioInput from './components/RadioInput';
import Button from '@/layouts/Button';
import useFormStore from '@/store/useFormStore';
import useGetExtrmPoliticalPhrases from '@/hooks/useGetExtrmPoliticalPhrases';
import useGetPoliticalPhrases from '@/hooks/PhrasesHook/useGetPoliticalPhrases';

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

  let text = [];
  let id = [];
  if (politicalPhrases) {
    politicalPhrases?.forEach(phrase => {
      id.push(phrase.id);
      text.push(phrase.text);
    });
  }

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
      <header className="flex flex-col items-center lg:h-[90vh]">
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
      <section className="flex flex-col items-center mt-14 mb-28 sm:mx-14 md:mx-0">
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

          <RadioInput
            bgColor={'bg-purple-500'}
            sentence={text[0]}
            accentColor={'accent-purple-500'}
            register={register('frase1')}
            required
          />
          <div className="col-span-2 flex justify-end me-1 text-red-500">
            {errors.frase1 && <p>{errors.frase1.message}</p>}
          </div>
          <RadioInput
            bgColor={'bg-teal-500'}
            sentence={text[1]}
            accentColor={'accent-teal-600'}
            register={register('frase2')}
          />
          <div className="col-span-2 flex justify-end me-1 text-red-500">
            {errors.frase2 && <p>{errors.frase2.message}</p>}
          </div>
          <RadioInput
            bgColor={'bg-lime-500'}
            sentence={text[2]}
            accentColor={'accent-lime-600'}
            register={register('frase3')}
          />
          <div className="col-span-2 flex justify-end me-1 text-red-500">
            {errors.frase3 && <p>{errors.frase3.message}</p>}
          </div>
          <RadioInput
            bgColor={'bg-orange-500'}
            sentence={text[3]}
            accentColor={'accent-orange-600'}
            register={register('frase4')}
          />
          <div className="col-span-2 flex justify-end me-1 text-red-500">
            {errors.frase4 && <p>{errors.frase4.message}</p>}
          </div>
          <RadioInput
            bgColor={'bg-pink-500'}
            sentence={text[4]}
            accentColor={'accent-pink-500'}
            register={register('frase5')}
          />
          <div className="col-span-2 flex justify-end me-1 text-red-500 bg-">
            {errors.frase5 && <p>{errors.frase5.message}</p>}
          </div>
          <RadioInput
            bgColor={'bg-red-500'}
            sentence={text[5]}
            accentColor={'accent-red-500'}
            register={register('frase6')}
          />
          <div className="col-span-2 flex justify-end me-1 text-red-500">
            {errors.frase6 && <p>{errors.frase6.message}</p>}
          </div>
          <RadioInput
            bgColor={'bg-indigo-500'}
            sentence={text[6]}
            accentColor={'accent-indigo-500'}
            register={register('frase7')}
          />
          <div className="col-span-2 flex justify-end me-1 text-red-500">
            {errors.frase7 && <p>{errors.frase7.message}</p>}
          </div>
          <RadioInput
            bgColor={'bg-sky-500'}
            sentence={text[7]}
            accentColor={'accent-sky-600'}
            register={register('frase8')}
          />
          <div className="col-span-2 flex justify-end me-1 text-red-500">
            {errors.frase8 && <p>{errors.frase8.message}</p>}
          </div>
          <RadioInput
            bgColor={'bg-purple-500'}
            sentence={text[8]}
            accentColor={'accent-purple-500'}
            register={register('frase9')}
          />
          <div className="col-span-2 flex justify-end me-1 text-red-500">
            {errors.frase9 && <p>{errors.frase9.message}</p>}
          </div>
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
