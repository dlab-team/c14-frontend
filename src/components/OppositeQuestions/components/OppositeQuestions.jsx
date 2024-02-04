import Button from '@/layouts/Button';
import CardOpposite from './CardOpposite';
import HeaderOpposite from './HeaderOpposite';
import useFormStore from '@/store/useFormStore';

const OppositeQuestions = ({ handleStep, oppositeResults, updateOppositeResult }) => {
  const handleOnClick = () => {
    console.log(useFormStore.getState().opossitePoliticalResult);
    //handleStep();
  };

  return (
    <>
      <HeaderOpposite />
      {oppositeResults?.map(phrase => {
        return (
          <CardOpposite
            phrase={phrase}
            key={phrase.id}
            updateOppositeResult={updateOppositeResult}
          />
        );
      })}

      <div className=" flex justify-end mx-auto mb-40 max-w-2xl">
        <Button onClick={() => handleOnClick()} title="Continuar"></Button>
      </div>
    </>
  );
};
export default OppositeQuestions;
