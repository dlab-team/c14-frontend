import useFormStore from '@/store/useFormStore';
import OppositeQuestions from '../OppositeQuestions/OppositeQuestions';
import Opinion from '../Opinion';
import StepOne from '@/components/StepOne/StepOne';
import HowCompare from '@/components/HowCompare/HowCompare';
import SocialStep from '@/components/SocialStep/SocialStep';
import Results from '../Results/Results';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PoliticalOpinion from '@/components/Opinion/PoliticalOpinion';
import SocialOpinion from '@/components/Opinion/SocialOpinion';

// 0: {
//   name: '[Political] Characterization Section',
//   component: <Questionary />,
// },

const Wrapper = () => {
  const currentSurveySection = useFormStore(state => state.currentSurveySection);
  const nextStep = useFormStore(state => state.nextStep);
  const acceptedTerms = useFormStore(state => state.acceptedTerms);
  const navigate = useNavigate();

  useEffect(() => {
    if (!acceptedTerms) {
      navigate('/');
    }
    window.scrollTo(0, 0);
  });

  const handleStep = () => {
    nextStep();
    //console.log(useFormStore.getState().currentSurveySection);
  };

  const sections = {
    0: <StepOne handleStep={handleStep} />,
    1: <PoliticalOpinion handleStep={handleStep} />, // <p>[Political] Own group perceptions</p>,
    //1: <Opinion handleStep={handleStep} />,
    // 2: <HowCompare handleStep={handleStep} />, // <p>[Political] Opposite group perceptions</p>,
    2: <OppositeQuestions handleStep={handleStep} />, // <p>[Political] Opposite group perceptions</p>,
    3: <Results />,
    4: <SocialStep handleStep={handleStep} />,
    5: <SocialOpinion handleStep={handleStep} />,
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
