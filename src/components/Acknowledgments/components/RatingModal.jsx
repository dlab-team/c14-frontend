import { Toaster, toast } from 'sonner';
import { MdMarkEmailRead } from 'react-icons/md';
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';
import { useState } from 'react';
import DOMPurify from 'dompurify';

function RatingModal({ isOpen, onClose }) {
  const [value, setValue] = useState(3);
  const [feedback, setFeedback] = useState(' ');

  if (!isOpen) {
    return null;
  }

  const handleChange = event => {
    setFeedback(event.target.value);
  };

  const sendFeedback = () => {
    if (!value) {
      toast.error('Debes calificar la encuesta del 1 al 5');
    } else {
      const cleanFeedback = DOMPurify.sanitize(feedback);
      toast.success(cleanFeedback);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center mr-20">
      <div className="w-[350px] max-w-xl mx-auto my-6 shadow-xl border border-slate-300 rounded-lg">
        <div className="relative flex flex-col bg-white rounded-lg pl-3">
          <div className="p-4">
            <div className="flex flex-row justify-between">
              <h2 className="text-sm font-bold mb-2 mt-2">Calificanos:</h2>
              <button
                type="button"
                className="text-black border-black w-fit h-fit items-center text-sm"
                onClick={onClose}
              >
                x
              </button>
            </div>
            <div>
              <Rating
                name="simple-controlled"
                defaultValue={3}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </div>
            <h2 className="text-sm font-bold mb-1">Cuentanos tu experiencia:</h2>
            <TextField
              id="feedback"
              placeholder="Escribe aquí..."
              multiline
              rows={4}
              fullWidth
              onChange={handleChange}
            />
            <div className="flex flex-row justify-end mt-2">
              <button
                type="button"
                className="text-black bg-white rounded-lg border border-slate-300 w-10 h-10 font-semibold text-xl"
                onClick={sendFeedback}
              >
                <MdMarkEmailRead className="w-5 h-5 items-center mx-auto opacity-70" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Toaster position="top-center" />
    </div>
  );
}

export default RatingModal;
