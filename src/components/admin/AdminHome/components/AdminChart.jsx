import { useState, useEffect } from 'react';
import { XAxis, YAxis, Legend, Tooltip, AreaChart, Area, ResponsiveContainer } from 'recharts';
import Button from '@/layouts/Button';
import { useGetGroupedResponsesByYear } from '@/hooks/SurveyResponse/useGetGroupedResponsesByYear';
import { useGetGroupedResponsesForAYear } from '@/hooks/SurveyResponse/useGetGroupedResponseForAYear';

const AdminChart = () => {
  const {
    data: groupedByYear,
    isLoading: isLoadingYear,
    isError: isErrorYear,
    refetch: refetchYear,
  } = useGetGroupedResponsesByYear();
  const [selectedYear, setSelectedYear] = useState(2024);

  const {
    data: monthlyData,
    isLoading: isLoadingMonthly,
    isError: isErrorMonthly,
    refetch: refetchMonthly,
  } = useGetGroupedResponsesForAYear(selectedYear.toString());

  const [selectHideDataset1, setSelectHideDataset1] = useState(false);
  const [selectHideDataset2, setSelectHideDataset2] = useState(false);
  const [showYearSelect, setShowYearSelect] = useState(true);

  useEffect(() => {
    refetchMonthly(selectedYear.toString());
  }, [selectedYear, refetchMonthly]);

  const handleYearChange = event => {
    const year = parseInt(event.target.value);
    setSelectedYear(year);
  };

  const toggleHideDataset = datasetIndex => {
    if (datasetIndex === 1) {
      setSelectHideDataset1(prevState => !prevState);
    } else if (datasetIndex === 2) {
      setSelectHideDataset2(prevState => !prevState);
    }
  };

  const handleAnualButtonClick = () => {
    setShowYearSelect(false);
  };

  const handleMensualButtonClick = () => {
    setShowYearSelect(true);
  };

  let dataToRender = monthlyData;
  if (!showYearSelect) {
    dataToRender = groupedByYear;
  }

  if (isLoadingMonthly || isLoadingYear) return <p>Loading...</p>;
  if (isErrorMonthly || isErrorYear) return <p>Error fetching data</p>;

  return (
    <div className="flex flex-1 flex-col items-center">
      <div className="flex mb-5 space-x-1">
        <Button title="Visitas" onClick={() => toggleHideDataset(1)} />
        <Button title="Finalizadas" onClick={() => toggleHideDataset(2)} />
      </div>
      {showYearSelect && (
        <div className="mb-3">
          <select value={selectedYear} onChange={handleYearChange}>
            {groupedByYear &&
              groupedByYear.map(item => (
                <option key={item.label} value={item.label}>
                  {item.label}
                </option>
              ))}
          </select>
        </div>
      )}

      <ResponsiveContainer width="90%" height={400}>
        <AreaChart
          data={dataToRender}
          strokeWidth={3}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis
            dataKey="label"
            tickLine={false}
            dy={10}
            angle={-45}
            textAnchor="end"
            height={80}
          />
          <YAxis tickLine={false} dx={-10} allowDecimals={false} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Visitas"
            stroke="rgb(153, 209, 64)"
            activeDot={{ stroke: 'black', strokeWidth: 2, r: 8 }}
            strokeWidth={4}
            fillOpacity={1}
            fill="url(#selectedVisitas)"
            hide={selectHideDataset1}
          />
          <Area
            type="monotone"
            dataKey="Finalizadas"
            stroke="rgb(211, 191, 93)"
            activeDot={{ stroke: 'black', strokeWidth: 2, r: 8 }}
            strokeWidth={4}
            fillOpacity={1}
            fill="url(#selectedFinalizadas)"
            hide={selectHideDataset2}
          />
          <Legend
            verticalAlign="top"
            iconType="plainline"
            iconSize={20}
            wrapperStyle={{ top: 0, right: 0 }}
          />
        </AreaChart>
      </ResponsiveContainer>

      <div className="flex justify-center my-2 mt-5 space-x-1">
        <Button title="Anual" onClick={handleAnualButtonClick} />
        <Button title="Mensual" onClick={handleMensualButtonClick} />
      </div>
    </div>
  );
};

export default AdminChart;
