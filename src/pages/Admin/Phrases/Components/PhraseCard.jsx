import { FaRegTrashCan, FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';
import { FiEdit3 } from 'react-icons/fi';
import { useState } from 'react';
import FormCardPhrase from './FormCardPhrase';

const PhraseCard = ({ phrase }) => {
  const [showEdit, setShowEdit] = useState(false);
  const [activePhrase, setActivePhrase] = useState(true);
  return (
    <div className="border rounded border-slate-200 bg-white shadow-xl p-4 md:p-10 mb-10">
      <div className="flex justify-between text-2xl">
        <p className="font-semibold">Frase N°x</p>
        <div className="flex gap-4 ">
          {/* DELETE - ACTIVE - EDIT BUTTONS -------- */}
          <button className="border rounded border-black p-1 ">
            <FaRegTrashCan />
          </button>
          <button
            onClick={() => setActivePhrase(!activePhrase)}
            className="border rounded border-black p-1 "
          >
            {activePhrase ? <FaRegEye /> : <FaRegEyeSlash />}
          </button>
          <button
            onClick={() => setShowEdit(!showEdit)}
            className={`border rounded border-black p-1 ${showEdit ? 'bg-black text-white' : ''}`}
          >
            <FiEdit3 />
          </button>
        </div>
      </div>
      {!showEdit && <div className="mt-4 max-w-xl">{phrase.frase}</div>}
      {showEdit && <FormCardPhrase />}
    </div>
  );
};
export default PhraseCard;
