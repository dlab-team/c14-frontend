import './Comparison.css';
import { testComparison } from './testComparison';
import { PiInfoBold } from 'react-icons/pi';
import { Tooltip } from '@/components/Tooltip';

function Comparison() {
  return (
    <div className="items-center justify-center h-full lg:w-[70%] w-[90%] mx-auto">
      <div className="flex items-center justify-center text-3xl font-bold text-purple-800 mt-10 mb-10">
        Yo en comparación con otros participantes
      </div>
      <div className="flex items-center justify-end font-bold">Mis respuestas</div>
      <div className="invisible md:visible md:flex items-center justify-begin lg:translate-x-[-5%] lg:translate-y-[15px] lg:pl-1 pl-10">
        <Tooltip
          message="<b>Enunciado</b><br><br>Frase contruida sobre la base de algunos de los temas por los cuales se producen debates políticos o culturales que sitúan a cada grupo en una posición"
          bgColor="bg-teal-600"
          width="w-[200px]"
        >
          <PiInfoBold className="w-6 h-6" />
        </Tooltip>
      </div>
      <div className="scatter-chart mt-10">
        {testComparison.map((item, index) => (
          <div className="item body" key={index}>
            <div className="legend mr-3 text-xs font-bold bottom-4 ml-[-50px]">
              <label className="hidden md:block" htmlFor={`phrase-${index}`}>
                {item.phrase}
              </label>

              <label className="block md:hidden pt-2" htmlFor={`phrase-${index}`}>
                {item.item}
              </label>
            </div>
            <div className="data">
              <div className="percentage zero"></div>
              <div className="percentage twenty-five"></div>
              <div className="percentage fifty"></div>
              <div className="percentage seventy-five"></div>
              <div className="percentage one-hundred"></div>
              <div className={`marker dot blue`} style={{ left: `${item.value}%` }}></div>
            </div>
            <div className="response ml-3 font-bold w-40 text-center translate-y-[-10px] text-sm">
              <span id={`phrase-${index}`}>{item.answer}</span>
            </div>
          </div>
        ))}

        <div className="invisible md:visible md:flex items-center justify-end pr-10">
          <Tooltip
            message="Eje que indica el <b>porcentaje de acuerdo</b>"
            bgColor="bg-purple-600"
            width="w-[150px]"
          >
            <PiInfoBold className="w-6 h-6" />
          </Tooltip>
        </div>

        <div className="flex items-center mt-10 justify-between w-[75%] mx-auto translate-x-[-16%] xl:w-[82%] xl:mx-auto xl:pl-9 xl:translate-x-0 lg:mx-auto lg:w-[78%] lg:pr-3 lg:translate-x-0 md:mx-auto md:w-[77%] md:pr-4 md:translate-x-0 sm:mx-auto sm:w-[81%] sm:pr-10 sm:translate-x-0">
          <div className="text-sm">0%</div>
          <div className="text-sm">25%</div>
          <div className="text-sm">50%</div>
          <div className="text-sm">75%</div>
          <div className="text-sm">100%</div>
        </div>
      </div>
      <div className="mt-11 md:hidden">
        {testComparison.map((item, index) => (
          <div className="flex items-center justify-begin mt-2 w-[90%]" key={index}>
            <div className="text-xs font-semibold">{item.item + '. ' + item.phrase}</div>
          </div>
        ))}
      </div>
      <div className="border-2 rounded-lg border-opacity-60 border-gray-400 w-[80%] mx-auto mt-[15vh]">
        <div className="w-[90%] mx-auto pt-10 pb-10 text-center">
          lorem ipsum dolor sit amet, consectetur adipiscing elitlorem ipsum dolor sit amet,
          consectetur adipiscing elitlorem ipsum dolor sit amet, consectetur adipiscing elitlorem
          ipsum dolor sit amet, consectetur adipiscing elitlorem ipsum dolor sit amet, consectetur
          adipiscing elitlorem ipsum dolor sit amet, consectetur adipiscing elitlorem ipsum dolor
          sit amet, consectetur adipiscing elitlorem ipsum dolor sit amet, consectetur adipiscing
          elitlorem ipsum dolor sit amet, consectetur adipiscing elitlorem ipsum dolor sit amet,
          consectetur adipiscing elitlorem ipsum dolor sit amet, consectetur adipiscing elitlorem
          ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </div>
    </div>
  );
}

export default Comparison;
