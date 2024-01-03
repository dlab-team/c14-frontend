import useFormStore from '@/store/useFormStore';
import Button from '@/layouts/Button';
import OppositeQuestions from '../OppositeQuestions/OppositeQuestions';
import Opinion from '../Opinion';
import StepOne from '@/components/StepOne/StepOne';
import HowCompare from '@/components/HowCompare/HowCompare';

// 0: {
//   name: '[Political] Characterization Section',
//   component: <Questionary />,
// },


const Wrapper = () => {
  const currentSurveySection = useFormStore(state => state.currentSurveySection);
  const nextStep = useFormStore(state => state.nextStep);

  const handleStep = () => {
    nextStep();
    console.log(useFormStore.getState().currentSurveySection);
  };

  const sections = {
  0: <StepOne handleStep={handleStep}/>,
  1: <Opinion handleStep={handleStep}/>, // <p>[Political] Own group perceptions</p>,
  // 2: <p>[Political] Own group perceptions results</p>,
  2: <HowCompare handleStep={handleStep}/>, // <p>[Political] Opposite group perceptions</p>,
  3: <OppositeQuestions />, // <p>[Political] Opposite group perceptions</p>,
  // 4: <p>[Political] Opposite group perceptions results</p>,
  // 5: <p>[Political] Next step invitation</p>,
  // 9: <p>[End] Final Step</p>,
};
  const CurrentStep = sections[currentSurveySection];

  // if (currentSurveySection === 5) {
  //   return (
  //     <section>
  //       <h2>Esta es la sección 5</h2>
  //     </section>
  //   );
  // }

  if (!CurrentStep || currentSurveySection === 0) {
    return sections[0];
  }

  return <section className="flex flex-col items-center">{CurrentStep}</section>;
};

export default Wrapper;
