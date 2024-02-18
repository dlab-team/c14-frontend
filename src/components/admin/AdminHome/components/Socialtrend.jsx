import { useEffect, useState } from 'react';
import useGetPoliticalTrend from '@/hooks/SurveyResponse/useGetPoliticalTrend';

const Socialtrend = polynomialId => {
  const [selectedPolynomialId, setSelectedPolynomialId] = useState(null);

  useEffect(() => {
    if (polynomialId) {
      setSelectedPolynomialId(polynomialId.polynomialId);
    }
  });

  const {
    data: politicalTrend,
    isLoadingTrend,
    isErrorTrend,
  } = useGetPoliticalTrend(selectedPolynomialId);

  const total = politicalTrend?.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      {politicalTrend ? (
        Array.isArray(politicalTrend) && politicalTrend.length > 0 ? (
          <div className="self-stretch h-[65px] flex-col justify-center items-center gap-[9px] flex rounded-lg">
            <div className="w-[329px] shadow justify-center items-center inline-flex relative rounded-lg">
              {politicalTrend.map((item, index) => {
                let colorClass = '';
                if (index === 0) {
                  colorClass = 'rounded-l-lg bg-lime-400';
                } else if (index === politicalTrend.length - 1) {
                  colorClass = 'bg-red-500 rounded-r-lg';
                } else if (index === politicalTrend.length - 2) {
                  colorClass = 'bg-purple-700 ';
                } else if (index === 1) {
                  colorClass = 'bg-orange-400';
                }
                return (
                  <div
                    key={index}
                    className={`h-[42px] relative ${colorClass} ${
                      item.quantity === 0 ? 'hidden' : ''
                    }`}
                    style={{ width: `${(item.quantity / total) * 100}%` }}
                  >
                    <div className="absolute top-11 w-full text-center text-black text-xs font-normal font-['Roboto']">
                      {item.quantity}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div>No hay datos disponibles</div>
        )
      ) : (
        <div>Cargando...</div>
      )}
      <div className="w-[328px] justify-start items-start gap-6 inline-flex">
        {politicalTrend?.map((item, index) => (
          <div className={`justify-start items-start gap-2 flex`} key={index}>
            <div
              className={`w-[13px] h-[13px] rounded-full`}
              style={{ backgroundColor: item.color }}
            ></div>
            <div className={`text-center text-zinc-600 text-xs font-normal font-['Roboto']`}>
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Socialtrend;
