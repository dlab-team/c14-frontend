import useFormStore from '@/store/useFormStore';
import StepOne from '@/components/StepOne/StepOne';
import SocialStep from '@/components/SocialStep/SocialStep';
import { PoliticalResults, SocialResults } from '../Results';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PoliticalOpinion from '@/components/Opinion/PoliticalOpinion';
import SocialOpinion from '@/components/Opinion/SocialOpinion';
import PoliticalOppositeQuestions from '@/components/OppositeQuestions/PoliticalOppositeQuestions';
import SocialOppositeQuestions from '@/components/OppositeQuestions/SocialOppositeQuestions';

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
  }, [acceptedTerms, navigate]);

  const handleStep = () => {
    nextStep();
  };

  const sections = {
    0: <StepOne handleStep={handleStep} />,
    1: <PoliticalOpinion handleStep={handleStep} />,
    2: <PoliticalOppositeQuestions handleStep={handleStep} />,
    3: <PoliticalResults />,
    4: <SocialStep handleStep={handleStep} />,
    5: <SocialOpinion handleStep={handleStep} />,
    6: <SocialOppositeQuestions handleStep={handleStep} />,
    7: <SocialResults />,
  };
  const CurrentStep = sections[currentSurveySection];

  if (!CurrentStep || currentSurveySection === 0) {
    return sections[0];
  }

  return <section className="flex flex-col items-center">{CurrentStep}</section>;
};

export default Wrapper;
