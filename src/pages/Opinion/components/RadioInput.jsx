import { Fragment } from 'react';

const RadioInput = ({ bgColor, sentence, accentColor, register }) => {
  return (
    <Fragment>
      <div
        className={`flex items-center px-5 text-white rounded-t-lg md:rounded-tr-none md:rounded-l-lg  ${bgColor} h-28 md:h-20 md:shadow-xl mt-8 md:mt-0`}
      >
        <p>{sentence}</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 divide-x-2 divide-y-2 md:divide-y-0 border-2 md:mb-3 h-fit md:h-20 md:shadow-xl">
        <div className="flex justify-center items-center md:hidden h-14 bg-gray-100">
          <span className="">Desacuerdo</span>
        </div>
        <div className="grid place-content-center bg-gray-100">
          <input
            className={`before:content[''] peer relative h-5 w-5 cursor-pointer rounded-full border border-blue-gray-200 ${accentColor} transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10`}
            type="radio"
            value="option1"
            {...register}
          />
        </div>
        <div className="flex justify-center items-center md:hidden h-14">
          <span className="text-center">Medianamente de acuerdo</span>
        </div>
        <div className="grid place-content-center">
          <input
            className={`before:content[''] peer relative h-5 w-5 cursor-pointer rounded-full border border-blue-gray-200 ${accentColor} transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10`}
            type="radio"
            value="option2"
            {...register}
          />
        </div>
        <div className="flex justify-center items-center md:hidden h-14 bg-gray-100">
          <span className="">De acuerdo</span>
        </div>
        <div className="grid place-content-center bg-gray-100">
          <input
            className={`before:content[''] peer relative h-5 w-5 cursor-pointer rounded-full border border-blue-gray-200 ${accentColor} transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10`}
            type="radio"
            value="option3"
            {...register}
          />
        </div>
        <div className="flex justify-center items-center md:hidden h-14 text-center">
          <span className="">Muy de acuerdo</span>
        </div>
        <div className="grid place-content-center">
          <input
            className={`before:content[''] peer relative h-5 w-5 cursor-pointer rounded-full border border-blue-gray-200 ${accentColor} transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10`}
            type="radio"
            value="option4"
            {...register}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default RadioInput;
