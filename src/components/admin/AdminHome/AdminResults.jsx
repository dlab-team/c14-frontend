import { useEffect, useState } from 'react';
import Select from 'react-select';
import { DateTime } from 'luxon';

import ResultTrend from './components/ResultTrend';
import useGetMetrics from '@/hooks/useGetMetrics';
import useGetPoliticalPolynomial from '@/hooks/SurveyResponse/useGetPoliticalPolynomial';
import useGetSocialsPolynomials from '@/hooks/useGetSocialsPolynomials';

const AdminResults = () => {
  const metrics = useGetMetrics();
  const { data: politicalPolynomial } = useGetPoliticalPolynomial();
  const { data: socialPolynomials } = useGetSocialsPolynomials();
  const [visits, setVisits] = useState(0);
  const [finished, setFinished] = useState(0);
  const [duration, setDuration] = useState(0);

  const [selectedId, setSelectedId] = useState('');

  const handleSelectChange = polynomial => {
    setSelectedId(polynomial.id);
  };

  useEffect(() => {
    if (metrics.data) {
      const duration = DateTime.fromMillis(metrics.data.duration).toFormat('mm:ss');
      setDuration(duration);
      setVisits(metrics.data.unfinished + metrics.data.finished);
      setFinished(metrics.data.finished);
    }
  }, [metrics]);

  useEffect(() => {
    if (socialPolynomials?.length > 0) {
      setSelectedId(socialPolynomials[0].id);
    }
  }, [socialPolynomials]);

  return (
    <div>
      <div className="relative w-[100%] h-[106px] px-[20%] mx-auto sm:w-full md:w-[75%] lg:w-[75%] xl:w-[75%] sm:ml-0 md:ml-40 lg:ml-40 xl:ml-40 -mt-11 py-8 bg-white rounded-lg border border-stone-300 align-center items-center gap-8 inline-flex z-60">
        <div className="h-[69px] flex-col justify-start items-center gap-1 inline-flex">
          <div className="text-purple-700 text-[40px] font-medium font-['Roboto'] leading-[43.60px]">
            {visits}
          </div>
          <div className="text-zinc-600 text-xs font-normal font-['Roboto'] leading-[13.08px]">
            Visitas
          </div>
        </div>
        <div className="px-8 border-l-2 border-r-2 border-purple-700 flex-col justify-start items-center gap-1 inline-flex">
          <div className="text-purple-700 text-[40px] font-medium font-['Roboto'] leading-[43.60px]">
            {finished}
          </div>
          <div className="w-[67px] text-center text-zinc-600 text-xs font-normal font-['Roboto'] leading-[13.08px]">
            Encuestas finalizadas
          </div>
        </div>
        <div className="flex-col justify-start items-center gap-1 inline-flex">
          <div className="text-purple-700 text-[40px] font-medium font-['Roboto'] leading-[43.60px]">
            {duration}
          </div>
          <div className="w-[67px] text-center text-zinc-600 text-xs font-normal font-['Roboto'] leading-[13.08px]">
            Tiempo terminado
          </div>
        </div>
      </div>

      <div className="w-[100%] px-6 mt-2 mx-auto sm:w-full md:w-[75%] lg:w-[75%] xl:w-[75%]sm:ml-0 md:ml-40 lg:ml-40 xl:ml-40 pt-6 pb-10 bg-white rounded-lg border border-stone-300 flex-col justify-center items-center gap-[42px] inline-flex">
        <div className="self-stretch h-3.5 text-black text-sm font-medium font-['Roboto']">
          Tendencia Política
        </div>
        {politicalPolynomial && <ResultTrend polynomialId={politicalPolynomial.id} />}
      </div>

      <div className="w-[100%] px-6 mt-2 mx-auto sm:w-full md:w-[75%] lg:w-[75%] xl:w-[75%]sm:ml-0 md:ml-40 lg:ml-40 xl:ml-40 pt-6 pb-10 bg-white rounded-lg border border-stone-300 flex-col justify-center items-center gap-[42px] inline-flex">
        <div className="self-stretch h-3.5 text-black text-sm font-medium font-['Roboto']">
          Tendencia Social
        </div>
        <Select
          id="opcionTendenciaSocial"
          placeholder="Selecciona una opción"
          className="w-64"
          options={socialPolynomials}
          getOptionLabel={p => p.name}
          getOptionValue={p => p.id}
          onChange={handleSelectChange}
          isSearchable={false}
        />
        {selectedId && <ResultTrend polynomialId={selectedId} />}
      </div>
    </div>
  );
};

export default AdminResults;
