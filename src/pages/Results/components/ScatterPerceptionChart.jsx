export const ScatterPerceptionChart = ({ results }) => {
  return (
    <div className="flex flex-col scatter-chart mt-3">
      {results?.map((item, groupItemIndex) => (
        <div
          key={groupItemIndex}
          className="flex justify-around items-center h-[94px] gap-4 w-full mx-auto"
        >
          <div className="sm:hidden flex justify-center items-center text-lg overflow-clip w-4 h-20">
            {groupItemIndex + 1}
          </div>
          <div className="hidden sm:block text-right translate-x-[-10px] text-xs w-[220px] h-22">
            {item.text}
          </div>
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

            {item.value < item.percentage ? (
              <div
                className="absolute z-[300] h-[25px] bg-gray-300 rounded-[27px]"
                style={{
                  left: `calc(${item.value}% - 12px)`,
                  right: `calc((100% - ${item.percentage}%) - 12px)`,
                }}
              ></div>
            ) : (
              <div
                className="absolute z-[300] h-[25px] bg-gray-300 rounded-[27px]"
                style={{
                  left: `calc(${item.percentage}% - 12px)`,
                  right: `calc((100% - ${item.value}%) - 12px)`,
                }}
              ></div>
            )}

            <div
              className={`absolute translate-x-[-50%] z-[500] w-[20px] h-[20px] rounded-[15px] border-[2px] border-gray-500 ${
                item.value > item.percentage ? 'bg-blue-500' : 'bg-red-500'
              }`}
              style={{
                left: `${item.value > item.percentage ? item.value : item.percentage}%`,
              }}
            ></div>
            <div
              className={`absolute translate-x-[-50%] z-[500] w-[20px] h-[20px] rounded-[15px] border-[2px] border-gray-500 ${
                item.value > item.percentage ? 'bg-red-500' : 'bg-blue-500'
              }`}
              style={{
                left: `${item.value > item.percentage ? item.percentage : item.value}%`,
              }}
            ></div>
          </div>
          <div className="w-[20px]">{Math.abs(item.value - item.percentage)}%</div>
        </div>
      ))}
      <div className="flex justify-between mt-2 ml-[30px] sm:ml-[165px] md:ml-[180px] xl:ml-[195px] mr-8">
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
      <div className="sm:hidden flex flex-col mt-[50px]">
        {results?.map((item, groupItemIndex) => (
          <div className="flex items-center mt-2 justify-between" key={groupItemIndex}>
            <div className="font-semibold item-center justify-center text-sm mx-auto">
              {groupItemIndex + 1 + '. ' + item.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
