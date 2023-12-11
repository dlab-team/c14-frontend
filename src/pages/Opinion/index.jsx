import Button from '@/layouts/Button';
import { useForm } from 'react-hook-form';
import { sentences } from './db';
import { Fragment } from 'react';

const Opinion = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = handleSubmit(data => {
    console.log(data);
    alert('Form submitted successfully!');
    reset();
  });

  const bgColors = ['bg-purple-500', 'bg-teal-500', 'bg-lime-500', 'bg-orange-500', 'bg-pink-500'];
  const accentColors = [
    'accent-purple-500',
    'accent-teal-600',
    'accent-lime-600',
    'accent-orange-600',
    'accent-pink-500',
  ];

  let randomNumbers = [];
  const phrases = () => {
    while (randomNumbers.length < 5) {
      let randomNum = Math.floor(Math.random() * 9) + 1;
      if (!randomNumbers.includes(randomNum)) {
        randomNumbers.push(randomNum);
      }
    }
    return;
  };
  phrases();

  return (
    <div>
      <header className="flex flex-col items-center lg:h-[90vh]">
        <h1 className="text-4xl font-bold mt-20">3XI CRITERIA</h1>
        <div className="bg-gradient-to-r from-orange-500 via-purple-500 to-lime-500 h-2 w-64 rounded-full mt-6"></div>
        <h2 className="text-5xl font-bold mt-6">Estudio Polarizaciones</h2>
        <p className="w-3/4 text-2xl text-center mt-24 text-slate-600">
          Esta encuesta es muy especial porque te vamos a desafiar. A continuación, te presentaremos
          una serie de frases que quizás no representen exactamente tu pensamiento e incluso te
          pueden parecer un poco exageradas. Y lo que te pedimos es que hagas el esfuerzo por
          responder igualmente. Sintetizar temas sociales en frases es complejo y siempre se generan
          problemas, pero es la única manera que tenemos de medir opiniones en una encuesta.
        </p>
      </header>
      <section className="flex flex-col items-center mb-28">
        <p className="text-2xl font-bold">
          ¿Qué tan de acuerdo estás con cada una de estas frases?
        </p>
        <form onSubmit={onSubmit} className="w-10/12 lg:w-3/4 grid grid-cols-2 mt-14">
          <div className="col-start-2">
            <div className="grid grid-cols-4 divide-x-2 border-x-2 border-t-2 rounded-t-lg text-sm font-bold h-16">
              <div className="flex justify-center items-center">
                <span className="">Muy de acuerdo</span>
              </div>
              <div className="flex justify-center items-center">
                <span className="">De acuerdo</span>
              </div>
              <div className="flex justify-center items-center">
                <span className="text-center">Medianamente de acuerdo</span>
              </div>
              <div className="flex justify-center items-center">
                <span className="">Desacuerdo</span>
              </div>
            </div>
          </div>
          {randomNumbers.map((item, index) => (
            <Fragment key={item}>
              <div
                className={`flex items-center px-5 text-white rounded-l-lg ${bgColors[index]} h-20 shadow-xl`}
              >
                <p>{sentences[item - 1].text}</p>
              </div>
              <div className="grid grid-cols-4 divide-x-2 border-2 mb-3 h-20 shadow-xl">
                <div className="grid place-content-center bg-gray-100">
                  <input
                    className={`before:content[''] peer relative h-5 w-5 cursor-pointer rounded-full border border-blue-gray-200 ${accentColors[index]} transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10`}
                    type="radio"
                    value="option1"
                    {...register(`frase${item}`)}
                  />
                </div>
                <div className="grid place-content-center">
                  <input
                    className={`before:content[''] peer relative h-5 w-5 cursor-pointer rounded-full border border-blue-gray-200 ${accentColors[index]} transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10`}
                    type="radio"
                    value="option2"
                    {...register(`frase${item}`)}
                  />
                </div>
                <div className="grid place-content-center bg-gray-100">
                  <input
                    className={`before:content[''] peer relative h-5 w-5 cursor-pointer rounded-full border border-blue-gray-200 ${accentColors[index]} transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10`}
                    type="radio"
                    value="option3"
                    {...register(`frase${item}`)}
                  />
                </div>
                <div className="grid place-content-center">
                  <input
                    className={`before:content[''] peer relative h-5 w-5 cursor-pointer rounded-full border border-blue-gray-200 ${accentColors[index]} transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10`}
                    type="radio"
                    value="option4"
                    {...register(`frase${item}`)}
                  />
                </div>
              </div>
            </Fragment>
          ))}
          <div className="col-span-2 flex justify-end">
            <div className="w-1/6 mr-5 mt-8">
              <Button title={'Continuar'} />
            </div>
          </div>
        </form>
      </section>
    </div>
    // <div className="">
    //   <div className="flex flex-col items-center w-11/12 h-[90vh]">
    //     <div>
    //       <p className="pt-16 text-lg">
    //         <span className="font-bold pr-5">PASO 2</span> Responder las siguientes preguntas.
    //       </p>
    //     </div>

    // <form onSubmit={onSubmit} className="w-3/4 grid grid-cols-2 mt-14">
    //   <div className="col-start-2">
    //     <div className="grid grid-cols-4 mb-7">
    //       <span className="text-center">Muy de acuerdo</span>
    //       <span className="text-center">De acuerdo</span>
    //       <span className="text-center">Medianamente de acuerdo</span>
    //       <span className="text-center">Desacuerdo</span>
    //     </div>
    //   </div>
    //   {randomNumbers.map(item => (
    //     <Fragment key={item}>
    //       <div>
    //         <p>{sentences[item - 1].text}</p>
    //       </div>
    //       <div className="flex justify-around mb-5">
    //         <div>
    //           <input
    //             className="before:content[''] peer relative h-5 w-5 cursor-pointer rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
    //             type="radio"
    //             value="option1"
    //             {...register(`frase${item}`)}
    //           />
    //         </div>
    //         <div>
    //           <input
    //             className="before:content[''] peer relative h-5 w-5 cursor-pointer rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
    //             type="radio"
    //             value="option2"
    //             {...register(`frase${item}`)}
    //           />
    //         </div>
    //         <div>
    //           <input
    //             className="before:content[''] peer relative h-5 w-5 cursor-pointer rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
    //             type="radio"
    //             value="option3"
    //             {...register(`frase${item}`)}
    //           />
    //         </div>
    //         <div>
    //           <input
    //             className="before:content[''] peer relative h-5 w-5 cursor-pointer rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
    //             type="radio"
    //             value="option4"
    //             {...register(`frase${item}`)}
    //           />
    //         </div>
    //       </div>
    //     </Fragment>
    //   ))}
    //   <div className="col-span-2 flex justify-end">
    //     <div className="w-1/6 mr-5 mt-8">
    //       <Button title={'Continuar'} />
    //     </div>
    //   </div>
    // </form>
    //   </div>
    //   <div className="w-5 bg-gradient-to-b from-indigo-500 via-orange-500 to-emerald-500 h-[80vh] rounded-full"></div>
    // </div>
  );
};

export default Opinion;
