import useFormStore from '@/store/useFormStore';
import { useNavigate } from 'react-router-dom';
import useFinishResponse from '@/hooks/useFinishResponse';

function Finish() {
  const navigate = useNavigate();
  const setAcceptedTerms = useFormStore(state => state.setAcceptedTerms);
  const socialCharacterization = useFormStore.getState().socialCharacterization;
  const socialResult = useFormStore.getState().socialResult;
  const oppositeSocialResult = useFormStore.getState().oppositeSocialResult;
  const avg = useFormStore(state => state.totalPerceptionGap);
  const { mutate: finishResponse } = useFinishResponse(
    socialCharacterization,
    true,
    socialResult,
    oppositeSocialResult,
    null,
    avg
  );

  const onReject = () => {
    setAcceptedTerms(false);
    finishResponse();
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
