import { TbLetterX } from 'react-icons/tb';

const OptionCard = ({ option, deleteOption }) => {
  return (
    <div
      key={option.id}
      className="border rounded-xl border-gray-300 flex max-w-sm items-center gap-2 px-2.5 py-1"
    >
      <p>{option.name}</p>
      <button
        className="text-red-500 border border-red-600 rounded-full transition-all hover:scale-105"
        onClick={() => deleteOption(option.id)}
      >
        <TbLetterX size={18} />
      </button>
    </div>
  );
};

export default OptionCard;
