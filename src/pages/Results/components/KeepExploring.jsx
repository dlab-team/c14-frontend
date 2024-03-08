import useFormStore from '@/store/useFormStore';
import { useNavigate } from 'react-router-dom';
import useFinishResponse from '@/hooks/useFinishResponse';

function KeepExploring() {
  const navigate = useNavigate();
  const nextStep = useFormStore(state => state.nextStep);
  const setAcceptedTerms = useFormStore(state => state.setAcceptedTerms);
  const politicalCharacterization = useFormStore.getState().politicalCharacterization;
  const politicalResult = useFormStore.getState().politicalResult;
  const oppositePoliticalResult = useFormStore.getState().oppositePoliticalResult;
  const avg = useFormStore(state => state.totalPerceptionGap);

  const { mutate: finishResponse } = useFinishResponse(
    politicalCharacterization,
    false,
    politicalResult,
    oppositePoliticalResult,
    avg,
    null
  );

  const onAccept = () => {
    finishResponse();
    nextStep();
  };

  const onReject = () => {
    setAcceptedTerms(false);
    finishResponse();
    navigate('/reconocimiento');
  };
  const paragraphs = ['¡Ahora te invitamos a seguir jugando!'];

  return (
    <div className="w-[90%] mx-auto my-6 lg:w-[50%] pb-10">
      <div className="relative flex flex-col bg-white">
        <div className="text-2xl mb-10 pr-4 text-center m-4 font-semibold">{paragraphs}</div>
        <div className="shadow-2xl border-2 rounded-xl">
          <div className="bg-purple-500 p-4 text-white rounded-t-lg">
            <h2 className="text-xl font-bold mb-4 mt-4 text-center">
              ¿Quieres explorar tus prejuicios sociales?
            </h2>
          </div>
          <div className="flex flex-row justify-center space-x-3 mb-5 mt-6">
            <button
              type="button"
              className=" text-white bg-black rounded-lg border border-black w-32 h-12 font-semibold items-center text-xl"
              onClick={onAccept}
            >
              Si
            </button>
            <button
              type="button"
              className=" text-black bg-white rounded-lg border border-black w-32 h-12 font-semibold items-center text-xl"
              onClick={onReject}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KeepExploring;
