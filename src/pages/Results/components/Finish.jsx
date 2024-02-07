import useFormStore from '@/store/useFormStore';
import { useNavigate } from 'react-router-dom';

function Finish() {
  const navigate = useNavigate();
  const nextStep = useFormStore(state => state.nextStep);
  const setAcceptedTerms = useFormStore(state => state.setAcceptedTerms);

  const onReject = () => {
    setAcceptedTerms(false);
    navigate('/reconocimiento');
  };

  return (
    <div className="flex item-center justify-center">
      <button
        type="button"
        className="text-white bg-black rounded-lg border border-black w-fit h-12 font-semibold items-center text-xl px-3"
        onClick={onReject}
      >
        Finalizar Cuestionario
      </button>
    </div>
  );
}

export default Finish;
