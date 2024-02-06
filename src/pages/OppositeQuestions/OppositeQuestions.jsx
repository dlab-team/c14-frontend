import { useEffect } from 'react';

import useFormStore from '@/store/useFormStore';
import useGetOppositePoliticalPhrases from '@/hooks/useGetOppositePoliticalPhrases';
import Button from '../../layouts/Button';
import CardOpposite from './Components/CardOpposite';
import HeaderOpposite from './Components/HeaderOpposite';

const OppositeQuestions = ({ handleStep }) => {
  const optionId = useFormStore(state => state.politicalCharacterization);
  const oppositePoliticalResult = useFormStore(s => s.oppositePoliticalResult);
  const setOppositePoliticalResult = useFormStore(s => s.setOppositePoliticalResult);
  const { data: oppositePoliticalPhrases } = useGetOppositePoliticalPhrases(optionId);
  const handleOnClick = () => {
    handleStep();
  };

  useEffect(() => {
    if (!oppositePoliticalResult?.length) {
      setOppositePoliticalResult(oppositePoliticalPhrases);
    }
  }, [oppositePoliticalPhrases, oppositePoliticalResult, setOppositePoliticalResult]);

  return (
    <>
      <HeaderOpposite />
      {oppositePoliticalResult?.map(phrase => {
        return <CardOpposite phrase={phrase} key={phrase.id} />;
      })}

      <div className=" flex justify-end mx-auto mb-40 max-w-2xl">
        <Button onClick={() => handleOnClick()} title="Continuar"></Button>
      </div>
    </>
  );
};
export default OppositeQuestions;
