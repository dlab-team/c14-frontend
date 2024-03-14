import { FaRegTrashCan } from 'react-icons/fa6';
import { FiEdit3 } from 'react-icons/fi';
import { useMemo } from 'react';

const OptionCard = ({ option, deleteOption, editOption }) => {
  const group = useMemo(() => {
    return !option.group ? 'Neutro' : option.group;
  }, [option.group]);

  return (
    <tr className="hover:bg-sky-100">
      <td className="border border-gray-300 px-2 py-2 text-center text-sm">{option.name}</td>
      <td className="border border-gray-300 px-2 text-sm text-center hidden sm:table-cell">
        {group}
      </td>
      <td className="border border-gray-300 px-2 text-sm text-center hidden md:table-cell">
        <span
          className="inline-block h-5 w-5 rounded-full"
          style={{ backgroundColor: option.color }}
        ></span>
      </td>
      <td className="border border-gray-300 px-3 py-2 text-sm">{option.description}</td>
      <td className="border border-gray-300 text-center">
        <button
          className="transition-all hover:scale-105 mr-2"
          onClick={() => deleteOption(option.id)}
        >
          <FaRegTrashCan size={18} color="Crimson" />
        </button>
        <button
          className="transition-all hover:scale-105 ml-2"
          onClick={() => editOption(option.id)}
        >
          <FiEdit3 size={18} color="DarkCyan" />
        </button>
      </td>
    </tr>
  );
};

export default OptionCard;
