import { useEffect } from 'react';

import useFormStore from '@/store/useFormStore';
import useGetOppositePoliticalPhrases from '@/hooks/useGetOppositePoliticalPhrases';
import Button from '../../layouts/Button';
import CardOpposite from './Components/CardOpposite';
import HeaderOpposite from './Components/HeaderOpposite';

const OppositeQuestions = ({ handleStep }) => {
  const howCompare = useFormStore.getState().howCompare;
  const opossitePoliticalResult = useFormStore(s => s.opossitePoliticalResult);
  const setOpossitePoliticalResult = useFormStore(s => s.setOpossitePoliticalResult);
  const { data: phrases } = useGetOppositePoliticalPhrases(howCompare || 'Extremo 1');
  const handleOnClick = () => {
    handleStep();
  };

  useEffect(() => {
    if (!opossitePoliticalResult?.length) {
      setOpossitePoliticalResult(phrases);
    }
  }, [phrases, opossitePoliticalResult, setOpossitePoliticalResult]);

  return (
    <>
      <HeaderOpposite />
      {opossitePoliticalResult?.map(phrase => {
        return <CardOpposite phrase={phrase} key={phrase.id} />;
      })}

      <div className=" flex justify-end mx-auto mb-40 max-w-2xl">
        <Button onClick={() => handleOnClick()} title="Continuar"></Button>
      </div>
    </>
  );
};
export default OppositeQuestions;
