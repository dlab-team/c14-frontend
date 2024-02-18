import { useEffect, useState } from 'react';

import useGetAllPoly from '@/hooks/PolynomialsHook/useGetAllPoly';
import useGetPoliticalTrend from '@/hooks/SurveyResponse/useGetPoliticalTrend';

const Politicaltrend = () => {
  const { data: polynomialsData } = useGetAllPoly();
  const [selectedPolynomialId, setSelectedPolynomialId] = useState(null);

  useEffect(() => {
    if (polynomialsData && polynomialsData.length) {
      const polynomial = polynomialsData.find(p => p.name === 'Político');
      if (polynomial) {
        setSelectedPolynomialId(polynomial.id);
      }
    }
  }, [polynomialsData]);

  const {
    data: politicalTrend,
    isLoadingTrend,
    isErrorTrend,
  } = useGetPoliticalTrend(selectedPolynomialId);

  console.log('politicalTrend:', politicalTrend);

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
    </>
  );
};

export default Politicaltrend;
