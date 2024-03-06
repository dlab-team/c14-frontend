import './Comparison.css';
import { PiInfoBold } from 'react-icons/pi';
import { Tooltip } from '@/components/Tooltip';
import useFormStore from '@/store/useFormStore';
import { useMemo, useState } from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

function Comparison() {
  const step = useFormStore.getState().currentSurveySection;
  const politicalResult = useFormStore(s => s.politicalResult);
  const socialResult = useFormStore(s => s.socialResult);
  const politicalName = useFormStore.getState().politicalName;
  const socialNames = useFormStore.getState().socialNames;
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
          <Box sx={{ p: 3 }}>
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

  const name = step === 3 ? politicalName : socialNames;

  const mappedResult = useMemo(() => {
    let result = [];
    if (step === 3) result = politicalResult;
    else if (step === 7) result = socialResult;
    return result.map(e => ({
      ...e,
      percentage: Math.floor(e.survey_results[0].percentage * 100),
    }));
  }, [step, politicalResult, socialResult]);

  const groupedResults = useMemo(() => {
    const groups = {};
    mappedResult.forEach(item => {
      const groupName = item.name;
      if (!groups[groupName]) {
        groups[groupName] = [];
      }
      groups[groupName].push(item);
    });
    return groups;
  }, [mappedResult]);

  const renderTabs = () => {
    return Object.keys(groupedResults).map((groupName, index) => {
      let groupIndex = 0;
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
          <div className="scatter-chart mt-10">
            {groupedResults[groupName].map((item, groupItemIndex) => {
              groupIndex++;
              return (
                <div className="item body" key={item.id}>
                  <div className="legend mr-3 text-xs bottom-4 ml-[-50px]">
                    <label
                      className="text-xs mb-4 hidden lg:block"
                      htmlFor={`phrase-${groupIndex}`}
                    >
                      {item.text}
                    </label>
                    <label className="block lg:hidden pt-2" htmlFor={`phrase-${groupIndex}`}>
                      {groupIndex}
                    </label>
                  </div>
                  <div className="data">
                    <div className="percentage zero"></div>
                    <div className="percentage twenty-five"></div>
                    <div className="percentage fifty"></div>
                    <div className="percentage seventy-five"></div>
                    <div className="percentage one-hundred"></div>
                    <div
                      className={`marker dot blue`}
                      style={{ left: `${item.percentage}%` }}
                    ></div>
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
            {groupedResults[groupName].map((item, groupItemIndex) => (
              <div className="flex items-center mt-2 justify-between" key={groupItemIndex}>
                <div className="font-semibold item-center justify-center text-sm">
                  {groupItemIndex + 1 + '. ' + item.text}
                </div>
              </div>
            ))}
          </div>
        </CustomTabPanel>
      );
    });
  };

  //

  return (
    <div className="items-center justify-center h-full lg:w-[70%] w-[90%] mx-auto">
      <div className="flex items-center justify-center text-3xl font-bold text-purple-800 mt-10 mb-10">
        Yo en comparación con otros de: {name}
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
}

export default Comparison;
