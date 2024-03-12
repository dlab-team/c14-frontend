import { useEffect, useMemo, useState } from 'react';
import { PiInfoBold } from 'react-icons/pi';
import { Tooltip } from '@/components/Tooltip';
import useFormStore from '@/store/useFormStore';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { ScatterPerceptionChart } from './ScatterPerceptionChart';
import CustomTabPanel from './CustomTabPanel';

export const SocialPerception = () => {
  const oppositeSocialResult = useFormStore(s => s.oppositeSocialResult);
  const setTotalPerceptionGap = useFormStore(s => s.setTotalPerceptionGap);
  const clearOppositeSocialResult = useFormStore(state => state.clearOppositeSocialResult);
  const setOppositeSocialResult = useFormStore(s => s.setOppositeSocialResult);

  const resultOpposite = useMemo(() => {
    return oppositeSocialResult.map(e => ({
      ...e,
      percentage: Math.floor(e.survey_results[0].percentage * 100),
      perception: Math.abs(e.value - Math.floor(e.survey_results[0].percentage * 100)),
    }));
  }, [oppositeSocialResult]);

  useEffect(() => {
    if (resultOpposite && JSON.stringify(resultOpposite) !== JSON.stringify(oppositeSocialResult)) {
      clearOppositeSocialResult();
      setOppositeSocialResult(resultOpposite);
    }
  }, [resultOpposite, oppositeSocialResult]);

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
        <ScatterPerceptionChart results={groupedResults[groupName]} />
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
    </div>
  );
};
