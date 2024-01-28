import { PiXBold } from 'react-icons/pi';

export default function AdminModal({ setShowModal, title, children }) {
  return (
    <div
      onClick={() => setShowModal(false)}
      className="absolute z-50"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex min-h-full justify-center text-center items-center">
          <div
            onClick={e => e.stopPropagation()}
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all my-8 max-w-lg"
          >
            <div className="bg-white px-9 py-5">
              <div className="flex items-start">
                <div className="my-3 text-left">
                  <button
                    onClick={() => setShowModal(false)}
                    className="absolute top-6 right-6  hover:text-zinc-100 hover:bg-slate-900 p-1 rounded-full"
                  >
                    <PiXBold />
                  </button>

                  <h3
                    className="text-xl font-semibold leading-6 text-gray-900 mb-4 mr-8"
                    id="modal-title"
                  >
                    {title}
                  </h3>
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
