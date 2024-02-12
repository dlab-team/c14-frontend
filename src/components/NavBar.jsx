import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa6';
import useFormStore from '@/store/useFormStore';
import { useEffect, useState } from 'react';

const NavBar = () => {
  const [show, setShow] = useState('invisible');
  const prevStep = useFormStore(state => state.prevStep);
  const clearOppositeSocialResult = useFormStore(state => state.clearOppositeSocialResult);
  const clearOppositePoliticalResult = useFormStore(state => state.clearOppositePoliticalResult);

  useEffect(() => {
    const unsub = useFormStore.subscribe(state => {
      if (state.currentSurveySection === 2 || state.currentSurveySection === 6) {
        setShow('visible');
      } else {
        setShow('invisible');
      }
    });
    return unsub;
  }, []);

  const handlePrevious = () => {
    const step = useFormStore.getState().currentSurveySection;
    if (step === 2) {
      clearOppositePoliticalResult();
    }
    if (step === 6) {
      clearOppositeSocialResult();
    }
    prevStep();
  };

  return (
    <nav className="bg-white flex items-center justify-between h-[10vh] w-full px-16 border-b-2">
      <button className={show} onClick={handlePrevious}>
        <FaArrowLeft size={30} />
      </button>
      <div className="flex items-center">
        <Link className="flex-shrink-0 mr-4">
          <img
            src="/logo/criteria/criteriaLogo.png"
            alt="Logo criteria"
            style={{ width: '120px' }}
          />
        </Link>
        <Link to="/">
          <img src="/logo/logo-3xi-negro.png" alt="Logo 3xi" className="w-14 lg:pr-3" />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
