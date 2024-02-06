import PropTypes from 'prop-types';
import useFormStore from '@/store/useFormStore';

import Slider from '../../../components/Slider/Slider';

const CardOpposite = ({ phrase }) => {
  const updateOppositePoliticalResult = useFormStore(state => state.updateOppositePoliticalResult);

  const handleChange = (e, newValue) => {
    updateOppositePoliticalResult(phrase.id, newValue);
  };

  return (
    <div className="rounded-md border border-slate-200 shadow-xl max-w-2xl mx-auto my-10 py-5 px-8" style={{ width: '100%' }}>
      <p className="text-xl mb-16">{phrase.text}</p>
      <Slider color="#66B947" value={phrase.value} handleChange={handleChange} />
    </div>
  );
};

CardOpposite.propTypes = {
  phrase: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    value: PropTypes.number,
  }),
};

export default CardOpposite;
