import Slider from '../../../components/Slider/Slider'
const CardOpposite = ({ phrase }) => {
  return (
    <div className="rounded-md border border-slate-200 shadow-xl max-w-2xl mx-auto my-10 py-5 px-8 ">
      <p className="text-xl mb-16">{phrase.text}</p>
      <Slider color="#66B947" phrase={phrase}></Slider>
    </div>
  );
};
export default CardOpposite