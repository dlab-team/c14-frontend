import Button from '@/layouts/Button';
import CardOpposite from './CardOpposite';
import HeaderOpposite from './HeaderOpposite';

const OppositeQuestions = ({ handleStep, oppositeResults, updateOpossitePoliticalResult }) => {
  const handleOnClick = () => {
    handleStep();
  };

  return (
    <>
      <HeaderOpposite />
      {oppositeResults?.map(phrase => {
        return (
          <CardOpposite
            phrase={phrase}
            key={phrase.id}
            updateOpossitePoliticalResult={updateOpossitePoliticalResult}
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
