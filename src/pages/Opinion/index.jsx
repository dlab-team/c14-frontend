import Button from '@/layouts/Button';
import { useForm } from 'react-hook-form';
import { sentences } from './db';
import { Fragment } from 'react';

const Opinion = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit(data => {
    console.log(data);
  });

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
    <div className="flex items-center">
      <div className="flex flex-col items-center w-11/12 h-[90vh]">
        <div>
          <p className="pt-16 text-lg">
            <span className="font-bold pr-5">PASO 2</span> Responder las siguientes preguntas.
          </p>
        </div>

        <form onSubmit={onSubmit} className="w-3/4 grid grid-cols-2 mt-14">
          <div className="col-start-2">
            <div className="grid grid-cols-4 mb-7">
              <span className="text-center">Muy de acuerdo</span>
              <span className="text-center">De acuerdo</span>
              <span className="text-center">Medianamente de acuerdo</span>
              <span className="text-center">Desacuerdo</span>
            </div>
          </div>
          {randomNumbers.map(item => (
            <Fragment key={item}>
              <div>
                <p>{sentences[item - 1].text}</p>
              </div>
              <div className="flex justify-around mb-5">
                <div>
                  <input
                    className="before:content[''] peer relative h-5 w-5 cursor-pointer rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                    type="radio"
                    value="option1"
                    {...register(`frase${item}`)}
                  />
                </div>
                <div>
                  <input
                    className="before:content[''] peer relative h-5 w-5 cursor-pointer rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                    type="radio"
                    value="option2"
                    {...register(`frase${item}`)}
                  />
                </div>
                <div>
                  <input
                    className="before:content[''] peer relative h-5 w-5 cursor-pointer rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                    type="radio"
                    value="option3"
                    {...register(`frase${item}`)}
                  />
                </div>
                <div>
                  <input
                    className="before:content[''] peer relative h-5 w-5 cursor-pointer rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
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
      </div>
      <div className="w-5 bg-gradient-to-b from-indigo-500 via-orange-500 to-emerald-500 h-[80vh] rounded-full"></div>
    </div>
  );
};

export default Opinion;
