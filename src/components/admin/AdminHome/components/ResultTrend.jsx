import PropTypes from 'prop-types';
import { twJoin, twMerge } from 'tailwind-merge';

import { useGetTrends } from '@/hooks/SurveyResponse/useGetTrends';
import { useMemo } from 'react';

const colors = ['bg-lime-400', 'bg-orange-400', 'bg-purple-700', 'bg-red-500'];

const ResultTrend = ({ polynomialId }) => {
  const { data, isLoadingTrend, isErrorTrend } = useGetTrends(polynomialId);

  const total = useMemo(() => {
    return data?.reduce((acc, item) => acc + item.quantity, 0);
  }, [data]);

  if (isLoadingTrend) {
    return null;
  }

  if (isLoadingTrend) {
    return isErrorTrend;
  }

  return (
    <div className="self-stretch flex-col justify-start items-center gap-6 flex">
      <div className="flex flex-wrap justify-start items-start gap-y-4 gap-x-6 px-6">
        {data?.map((option, index) => (
          <div key={`option-${option.name}`} className="justify-start items-start gap-2 flex">
            <div
              className={twJoin('w-[13px] h-[13px] rounded-full', colors[index % data.length])}
            ></div>
            <div className="text-center text-zinc-600 text-xs font-normal font-['Roboto']">
              {option.name}
            </div>
          </div>
        ))}
      </div>
      {data ? (
        Array.isArray(data) && data.length > 0 ? (
          <div className="self-stretch h-[65px] flex-col justify-center items-center gap-[9px] flex rounded-lg">
            <div className="w-[329px] h-[42px] shadow inline-flex justify-center rounded-lg overflow-hidden">
              {data?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={twMerge(
                      colors[index % data.length],
                      item.quantity === 0 && 'hidden'
                    )}
                    style={{ width: `${(item.quantity / total) * 100}%` }}
                  ></div>
                );
              })}
            </div>
            <div className="w-[329px] justify-center items-center inline-flex">
              {data
                ?.filter(item => item.quantity > 0)
                ?.map(item => {
                  return (
                    <span
                      key={`text-option-${item.name}`}
                      className="w-full text-center text-black text-xs font-normal font-['Roboto']"
                    >
                      {item.quantity}
                    </span>
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
    </div>
  );
};

ResultTrend.propTypes = {
  polynomialId: PropTypes.string.isRequired,
};

export default ResultTrend;
