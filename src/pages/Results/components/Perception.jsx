import { PiInfoBold } from 'react-icons/pi';
import { Tooltip } from '@/components/Tooltip';
import useFormStore from '@/store/useFormStore';

export const Perception = () => {
  const oppositePoliticalResult = useFormStore(s =>
    s.oppositePoliticalResult.map(e => ({
      ...e,
      investigation: Math.floor(Math.random() * 60) + 30,
    }))
  );
  let quantityPerseptions = 0
  let totalPerseptions = 0
  for (const result of oppositePoliticalResult){
    quantityPerseptions = quantityPerseptions+1
    totalPerseptions = totalPerseptions+Math.abs(result.value-result.investigation)
  }
  const totalPerseptionGap = (totalPerseptions/quantityPerseptions).toFixed(2)
  return (
    <div className="flex flex-col h-full lg:w-[70%] w-[90%] mx-auto my-10">
      <div className="flex flex-col items-center justify-center mt-10 mb-10 gap-4">
        <p className="text-3xl font-bold text-amber-500">Mi brecha de percepción es: {totalPerseptionGap}%</p>
        <p className="text-center text-base text-black font-normal">
          ipsum dolor sit amet consectetur adipiscing elit etiam habitant, scelerisque maecenas nisl
          platea himenaeos neque volutpat bibendum eros, donec rutrum odio in pellentesque venenatis
          condimentum ut. Suscipit himenaeos porta orci vitae viverra ipsum dolor sit amet
          consectetur adipiscing elit etiam habita
        </p>
      </div>
      <div className="flex flex-wrap gap-5 md:justify-center">
        <div className="flex items-start gap-2">
          <div className="bg-blue-500 w-[25px] h-[25px] rounded-xl border-solid border-2 border-neutral-600"></div>
          <p>Tu respuesta</p>
        </div>
        <div className="flex items-start gap-2">
          <div className="bg-red-500 w-[25px] h-[25px] rounded-xl border-solid border-2 border-neutral-600"></div>
          <p className="w-[121px]">
            Lo que piensan las personas de <strong>derecha</strong>
          </p>
        </div>
        <div className="flex items-start gap-2">
          <div className="bg-gray-300 w-[62px] h-[25px] rounded-xl "></div>
          <p>Polarizaciones</p>
        </div>
        <div className="invisible md:visible flex items-start gap-2">
          <Tooltip
            message="<b>Polarización</b><br><br>Distancia entre lo que piensan las personas del grupo propio y las personas del grupo opuesto."
            bgColor="bg-amber-500"
            width="w-[160px]"
          >
            <PiInfoBold className="w-6 h-6 cursor-pointer" />
          </Tooltip>
        </div>
      </div>
      <div className="flex items-center justify-end font-bold my-7">Brecha de percepción</div>
      <div className="scatter-chart mt-3">
        {oppositePoliticalResult.map((item, index) => (
          <div key={index} className="flex justify-around items-center h-[94px] gap-4">
            <div className="text-right text-xs overflow-clip w-32 h-20">{item.text}</div>
            <div className="flex items-center relative w-[100%] h-[100%] border-t-[2px] border-b-[1px] border-solid border-slate-400">
              <div className="absolute h-[100%] left-[0] border-l-[1px] border-dotted border-slate-400 z-[200]"></div>
              <div className="absolute hidden md:block h-[100%] left-[5%] border-l-[1px] border-dotted border-slate-400 z-[200]"></div>
              <div className="hidden sm:block absolute h-[100%] left-[10%] border-l-[1px] border-dotted border-slate-400 z-[200]"></div>
              <div className="absolute hidden md:block h-[100%] left-[15%] border-l-[1px] border-dotted border-slate-400 z-[200]"></div>
              <div className="absolute h-[100%] left-[20%] border-l-[1px] border-dotted border-slate-400 z-[200]"></div>
              <div className="absolute hidden md:block h-[100%] left-[25%] border-l-[1px] border-dotted border-slate-400 z-[200]"></div>
              <div className="hidden sm:block absolute h-[100%] left-[30%] border-l-[1px] border-dotted border-slate-400 z-[200]"></div>
              <div className="absolute hidden md:block h-[100%] left-[35%] border-l-[1px] border-dotted border-slate-400 z-[200]"></div>
              <div className="absolute h-[100%] left-[40%] border-l-[1px] border-dotted border-slate-400 z-[200]"></div>
              <div className="absolute hidden md:block h-[100%] left-[45%] border-l-[1px] border-dotted border-slate-400 z-[200]"></div>
              <div className="hidden sm:block absolute h-[100%] left-[50%] border-l-[1px] border-dotted border-slate-400 z-[200]"></div>
              <div className="absolute hidden md:block h-[100%] left-[55%] border-l-[1px] border-dotted border-slate-400 z-[200]"></div>
              <div className="absolute h-[100%] left-[60%] border-l-[1px] border-dotted border-slate-400 z-[200]"></div>
              <div className="absolute hidden md:block h-[100%] left-[65%] border-l-[1px] border-dotted border-slate-400 z-[200]"></div>
              <div className="hidden sm:block absolute h-[100%] left-[70%] border-l-[1px] border-dotted border-slate-400 z-[200]"></div>
              <div className="absolute hidden md:block h-[100%] left-[75%] border-l-[1px] border-dotted border-slate-400 z-[200]"></div>
              <div className="absolute h-[100%] left-[80%] border-l-[1px] border-dotted border-slate-400 z-[200]"></div>
              <div className="absolute hidden md:block h-[100%] left-[85%] border-l-[1px] border-dotted border-slate-400 z-[200]"></div>
              <div className="hidden sm:block absolute h-[100%] left-[90%] border-l-[1px] border-dotted border-slate-400 z-[200]"></div>
              <div className="absolute hidden md:block h-[100%] left-[95%] border-l-[1px] border-dotted border-slate-400 z-[200]"></div>
              <div className="absolute h-[100%] left-[100%] border-l-[1px] border-dotted border-slate-400 z-[200]"></div>

              {item.value < item.investigation ? (
                <div
                  className="absolute z-[300] h-[25px] bg-gray-300 rounded-[27px]"
                  style={{
                    left: `calc(${item.value}% - 12px)`,
                    right: `calc((100% - ${item.investigation}%) - 12px)`,
                  }}
                ></div>
              ) : (
                <div
                  className="absolute z-[300] h-[25px] bg-gray-300 rounded-[27px]"
                  style={{
                    left: `calc(${item.investigation}% - 12px)`,
                    right: `calc((100% - ${item.value}%) - 12px)`,
                  }}
                ></div>
              )}

              <div
                className={`absolute translate-x-[-50%] z-[500] w-[20px] h-[20px] rounded-[15px] border-[2px] border-gray-500 ${
                  item.value > item.investigation ? 'bg-blue-500' : 'bg-red-500'
                }`}
                style={{
                  left: `${item.value > item.investigation ? item.value : item.investigation}%`,
                }}
              ></div>
              <div
                className={`absolute translate-x-[-50%] z-[500] w-[20px] h-[20px] rounded-[15px] border-[2px] border-gray-500 ${
                  item.value > item.investigation ? 'bg-red-500' : 'bg-blue-500'
                }`}
                style={{
                  left: `${item.value > item.investigation ? item.investigation : item.value}%`,
                }}
              ></div>
            </div>
            <div>{Math.abs(item.value-item.investigation)}%</div>
          </div>
        ))}
        <div className="flex justify-between mt-2 ml-[104px] md:ml-[120px] mr-8">
          <div className="text-sm">0</div>
          <div className="text-sm hidden sm:block">10</div>
          <div className="text-sm">20</div>
          <div className="text-sm hidden sm:block">30</div>
          <div className="text-sm">40</div>
          <div className="text-sm hidden sm:block">50</div>
          <div className="text-sm">60</div>
          <div className="text-sm hidden sm:block">70</div>
          <div className="text-sm">80</div>
          <div className="text-sm hidden sm:block">90</div>
          <div className="text-sm">100</div>
        </div>
      </div>
      <div className="border-2 rounded-lg border-opacity-60 border-gray-400 w-[80%] mx-auto mt-[8vh]">
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
};
