import { useMemo, useState } from 'react';
import './Comparison.css';
import { PiInfoBold } from 'react-icons/pi';
import { Tooltip } from '@/components/Tooltip';
import useFormStore from '@/store/useFormStore';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import CustomTabPanel from './CustomTabPanel';
import { ScatterChart } from './ScatterChart';

export const SocialComparison = () => {
  const socialResult = useFormStore(s => s.socialResult);
  const socialCharacterization = useFormStore(state => state.socialCharacterization);
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

  const mappedResult = useMemo(() => {
    return socialResult.map(e => ({
      ...e,
      percentage: Math.floor(e.survey_results[0].percentage * 100),
    }));
  }, [socialResult]);

  const groupedResults = useMemo(() => {
    const groups = {};
    mappedResult.forEach(item => {
      const groupName = item.polynomialId;
      if (!groups[groupName]) {
        groups[groupName] = {
          id: item.polynomialId,
          name: item.polynomial?.name,
          characterization: socialCharacterization.find(p => p.polynomialId === item.polynomialId)
            .name,
          phrases: [],
        };
      }
      groups[groupName].phrases.push(item);
    });
    return Object.values(groups);
  }, [mappedResult, socialCharacterization]);

  const renderTabs = () => {
    return groupedResults?.map((group, index) => {
      return (
        <CustomTabPanel key={index} value={value} index={index}>
          <div className="text-center">
            <h2 className="text-md font-normal mt-2 lg:text-xl">Porcentaje de acuerdo</h2>
          </div>
          <div className="invisible lg:visible lg:flex items-center justify-begin lg:translate-x-[-5%] lg:translate-y-[15px] lg:pl-1 pl-10">
            <Tooltip
              message="<b>Enunciado</b><br><br>Frase contruida sobre la base de algunos de los temas por los cuales se producen debates políticos o culturales que sitúan a cada grupo en una posición"
              bgColor="bg-teal-600"
              width="w-[200px]"
            >
              <PiInfoBold className="w-6 h-6" />
            </Tooltip>
          </div>
          <ScatterChart results={groupedResults[index].phrases} />
        </CustomTabPanel>
      );
    });
  };

  return (
    <div className="items-center justify-center h-full lg:w-[70%] w-[90%] mx-auto">
      <div className="flex items-center justify-center text-3xl font-bold text-purple-800 mt-10 mb-10">
        Yo en comparación con otros de: {groupedResults[value]?.characterization}
      </div>
      <div className="flex flex-col items-center justify-center mx-auto ">
        <div className="flex gap-2 mb-2">
          <div className="bg-orange-600 w-[25px] h-[25px] rounded-xl border-solid border-2 border-neutral-600"></div>
          <div>
            <p className="">% de acuerdo dentro de tu misma caracterización</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-end font-bold mt-1 mb-5 mr-10">Mis respuestas</div>
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
            {groupedResults?.map((group, index) => (
              <Tab
                key={index}
                label={group.name}
                index={group.id}
                {...a11yProps(index)}
                sx={{ textTransform: 'none', fontWeight: 'bold', fontSize: '13px' }}
              />
            ))}
          </Tabs>
        </Box>
        {renderTabs()}
      </div>
      <div className="invisible lg:visible lg:flex items-center justify-end pr-10">
        <Tooltip
          message="Eje que indica el <b>porcentaje de acuerdo</b>"
          bgColor="bg-purple-600"
          width="w-[150px]"
        >
          <PiInfoBold className="w-6 h-6" />
        </Tooltip>
      </div>
    </div>
  );
};
