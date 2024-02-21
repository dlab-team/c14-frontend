import './Comparison.css';
import { PiInfoBold } from 'react-icons/pi';
import { Tooltip } from '@/components/Tooltip';
import useFormStore from '@/store/useFormStore';
import { useMemo } from 'react';

function Comparison() {
  const step = useFormStore.getState().currentSurveySection;
  const politicalResult = useFormStore(s => s.politicalResult);
  const socialResult = useFormStore(s => s.socialResult);
  const politicalName = useFormStore.getState().politicalName;
  const socialNames = useFormStore.getState().socialNames;

  const name = step === 3 ? politicalName : socialNames;

  const mappedResult = useMemo(() => {
    let result = [];
    if (step === 3) result = politicalResult;
    else if (step === 7) result = socialResult;
    return result.map(e => ({
      ...e,
      percentage: Math.floor(e.survey_results[0].percentage * 100),
    }));
  }, [step, politicalResult, socialResult]);

  return (
    <div className="items-center justify-center h-full lg:w-[70%] w-[90%] mx-auto">
      <div className="flex items-center justify-center text-3xl font-bold text-purple-800 mt-10 mb-10">
        Yo en comparación con otros de: {name}
      </div>
      <div className="flex items-center justify-end font-bold">Mis respuestas</div>
      <div className="invisible lg:visible lg:flex items-center justify-begin lg:translate-x-[-5%] lg:translate-y-[15px] lg:pl-1 pl-10">
        <Tooltip
          message="<b>Enunciado</b><br><br>Frase contruida sobre la base de algunos de los temas por los cuales se producen debates políticos o culturales que sitúan a cada grupo en una posición"
          bgColor="bg-teal-600"
          width="w-[200px]"
        >
          <PiInfoBold className="w-6 h-6" />
        </Tooltip>
      </div>
      <div className="flex items-center justify-center">
        <h2 className="text-xl font-normal">Porcentaje de acuerdo</h2>
      </div>
      <div className="scatter-chart mt-10">
        {mappedResult.map((item, index) => (
          <div className="item body" key={item.id}>
            <div className="legend mr-3 text-xs bottom-4 ml-[-50px]">
              <label className="text-xs mb-4 hidden lg:block" htmlFor={`phrase-${index}`}>
                {item.text}
              </label>

              <label className="block lg:hidden pt-2" htmlFor={`phrase-${index}`}>
                {index + 1}
              </label>
            </div>
            <div className="data">
              <div className="percentage zero"></div>
              <div className="percentage twenty-five"></div>
              <div className="percentage fifty"></div>
              <div className="percentage seventy-five"></div>
              <div className="percentage one-hundred"></div>
              <div className={`marker dot blue`} style={{ left: `${item.percentage}%` }}></div>
            </div>
            <div className="response ml-3 font-bold w-40 text-center translate-y-[-10px] text-sm">
              {item.value}
            </div>
          </div>
        ))}
      </div>

      <div className="invisible lg:visible lg:flex items-center justify-end pr-10">
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
      <div className="mt-11 lg:hidden">
        {mappedResult.map((item, index) => (
          <div className="flex items-center mt-2 w-[90%]" key={index}>
            <div className="font-semibold item-center justify-center">
              {index + 1 + '. ' + item.text}
            </div>
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
