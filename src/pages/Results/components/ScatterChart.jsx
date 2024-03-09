export const ScatterChart = ({ results }) => {
  return (
    <>
      <div className="scatter-chart mt-10">
        {results?.map((item, index) => {
          return (
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
          );
        })}
      </div>
      <div className="flex items-center mt-10 justify-between w-[75%] mx-auto translate-x-[-16%] xl:w-[82%] xl:mx-auto xl:pl-9 xl:translate-x-0 lg:mx-auto lg:w-[78%] lg:pr-3 lg:translate-x-0 md:mx-auto md:w-[77%] md:pr-4 md:translate-x-0 sm:mx-auto sm:w-[81%] sm:pr-10 sm:translate-x-0">
        <div className="text-sm">0%</div>
        <div className="text-sm">25%</div>
        <div className="text-sm">50%</div>
        <div className="text-sm">75%</div>
        <div className="text-sm">100%</div>
      </div>
      <div className="mt-11 lg:hidden">
        {results?.map((item, index) => (
          <div className="flex items-center mt-2 justify-between" key={index}>
            <div className="font-semibold item-center justify-center text-sm">
              {index + 1 + '. ' + item.text}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
