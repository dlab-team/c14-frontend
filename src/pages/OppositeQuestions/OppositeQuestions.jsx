import useGetOppositePoliticalPhrases from '@/hooks/useGetOppositePoliticalPhrases'
import useFormStore from '@/store/useFormStore';
import  Button from '../../layouts/Button'
import CardOpposite from "./Components/CardOpposite"
import HeaderOpposite from "./Components/HeaderOpposite"


const OppositeQuestions = ({ handleStep }) => {
  const howCompare = useFormStore.getState().howCompare;
  const phrases = useGetOppositePoliticalPhrases(howCompare);
const handleOnClick = () => {
  handleStep();
};

  return (
    <>
      <HeaderOpposite></HeaderOpposite>
      {phrases.data.map(phrase => {
        return <CardOpposite phrase={phrase} key={phrase.id}></CardOpposite>;
      })}

      <div className=" flex justify-end mx-auto mb-40 max-w-2xl">
        <Button onClick={() => handleOnClick()} title="Continuar"></Button>
      </div>
    </>
  );
};
export default OppositeQuestions