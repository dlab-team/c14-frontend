import { useEffect, useMemo, useState } from 'react';
import { PiInfoBold } from 'react-icons/pi';
import { Tooltip } from '@/components/Tooltip';
import useFormStore from '@/store/useFormStore';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

export const Perception = () => {
  const step = useFormStore.getState().currentSurveySection;
  const oppositePoliticalResult = useFormStore(s => s.oppositePoliticalResult);
  const oppositeSocialResult = useFormStore(s => s.oppositeSocialResult);
  const setTotalPerceptionGap = useFormStore(s => s.setTotalPerceptionGap);

  const resultOpposite = useMemo(() => {
    let result = [];
    if (step === 3) result = oppositePoliticalResult;
    else if (step === 7) result = oppositeSocialResult;
    return result.map(e => ({
      ...e,
      percentage: Math.floor(e.survey_results[0].percentage * 100),
    }));
  }, [step, oppositePoliticalResult, oppositeSocialResult]);

  const totalPerceptionGap = useMemo(() => {
    const totalPerceptions = resultOpposite.reduce(
      (acc, curr) => acc + Math.abs(curr.value - curr.percentage),
      0
    );
    return (totalPerceptions / resultOpposite.length).toFixed(2);
  }, [resultOpposite]);

  useEffect(() => {
    setTotalPerceptionGap(totalPerceptionGap);
  }, [totalPerceptionGap, setTotalPerceptionGap]);

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 2 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const groupedResults = useMemo(() => {
    const groups = {};
    resultOpposite.forEach(item => {
      const groupName = item.name;
      if (!groups[groupName]) {
        groups[groupName] = [];
      }
      groups[groupName].push(item);
    });
    return groups;
  }, [resultOpposite]);

  const renderTabs = () => {
    return Object.keys(groupedResults).map((groupName, index) => (
      <CustomTabPanel key={index} value={value} index={index}>
        <div className="flex flex-col scatter-chart mt-3">
          {groupedResults[groupName].map((item, groupItemIndex) => (
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
            {groupedResults[groupName].map((item, groupItemIndex) => (
              <div className="flex items-center mt-2 justify-between" key={groupItemIndex}>
                <div className="font-semibold item-center justify-center text-sm mx-auto">
                  {groupItemIndex + 1 + '. ' + item.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CustomTabPanel>
    ));
  };

  return (
    <div className="flex flex-col h-full lg:w-[70%] w-[90%] mx-auto my-10">
      <div className="flex flex-col items-center justify-center mt-10 mb-10 gap-4">
        <p className="text-3xl font-bold text-amber-500 text-center">
          Mi polarización subjetiva es de: {totalPerceptionGap}%
        </p>
        <p className="text-center text-xl text-black font-normal">
          ¿Qué quiere decir? Es la distancia entre lo que tú crees que piensan los demás y lo que
          realmente ellos piensan. Mientras más bajo es el porcentaje, más cerca estás de conocer
          cómo piensan los otros: estás más conectado con ellos.
        </p>
      </div>
      <div className="flex flex-wrap gap-5 md:justify-center">
        <div className="flex items-start gap-2">
          <div className="bg-blue-500 w-[25px] h-[25px] rounded-xl border-solid border-2 border-neutral-600"></div>
          <p className="w-[121px]">Tu respuesta (cómo crees que piensan los grupos opuestos)</p>
        </div>
        <div className="flex items-start gap-2">
          <div className="bg-red-500 w-[25px] h-[25px] rounded-xl border-solid border-2 border-neutral-600"></div>
          <p className="w-[121px]">Lo que piensan las personas de los grupos opuestos</p>
        </div>
        <div className="flex items-start gap-2">
          <div className="bg-gray-300 w-[62px] h-[25px] rounded-xl "></div>
          <p className="w-[121px]">
            Polarización subjetiva (la distancia entre lo que tú crees que piensan los demás y lo
            que realmente ellos piensan).
          </p>
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
      <div className="flex items-center justify-end font-bold my-7">Distancia</div>

      <div className="items-center justify-center w-[100%] mx-auto">
        <Box
          sx={{
            borderBottom: 1,
            borderColor: 'divider',
            width: '80%',
            ml: 'auto',
            mr: 'auto',
            mt: '20px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="wrapped label tabs example"
            textColor="inherit"
            indicatorColor="secondary"
            variant="scrollable"
            allowScrollButtonsMobile
          >
            {Object.keys(groupedResults).map((groupName, index) => (
              <Tab
                key={index}
                label={groupName}
                {...a11yProps(index)}
                sx={{ textTransform: 'none', fontWeight: 'bold', fontSize: '13px' }}
              />
            ))}
          </Tabs>
        </Box>
        {renderTabs()}
      </div>

      <div className="border-2 rounded-lg border-opacity-60 border-gray-400 w-[80%] mx-auto mt-[8vh]">
        <div className="w-[90%] mx-auto pt-10 pb-10 text-center">
          <p>
            A veces, por diversas razones, atribuimos a los otros que piensan distinto, ideas que
            con las que ellos no necesariamente están de acuerdo. Aplicar estereotipos en función de
            la tendencia política de alguien puede poner freno a la escucha y el diálogo.
          </p>
          <p>
            Este estudio y este test que estás haciendo es una oportunidad para que podamos mirarnos
            los unos a los otros y sorprendernos.
          </p>
          <p>Esta es una invitación a escuchar, a olvidar las etiquetas, a dialogar.</p>
        </div>
      </div>
    </div>
  );
};