import  Button from '../../layouts/Button'
import CardOpposite from "./Components/CardOpposite"
import HeaderOpposite from "./Components/HeaderOpposite"
import data from './data'
const OppositeQuestions = () => {
  return (
    <>
      <HeaderOpposite></HeaderOpposite>
      {data.map((question)=>{
        return <CardOpposite question={question}></CardOpposite>;
      })}
      
      <div className=" flex justify-end mx-auto mb-40 max-w-2xl">
        <Button title="Continuar"></Button>
      </div>
    </>
  );
}
export default OppositeQuestions