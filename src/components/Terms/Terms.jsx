const Terms = ({ isOpen, onClose, onAccept }) => {
  if (!isOpen) {
    return null;
  }
  const paragraphs = [
    'Esta encuesta es muy especial porque te vamos a desafiar. A continuación, te presentaremos una serie de frases que quizás no representen exactamente tu pensamiento e incluso te pueden parecer un poco exageradas. Y lo que te pedimos es que hagas el esfuerzo por responder igualmente. Sintetizar temas sociales en frases es complejo y siempre se generan problemas, pero es la única manera que tenemos de medir opiniones en una encuesta.',
  ];

  const repeatedParagraphs = Array.from({ length: 10 }, (_, index) => (
    <p key={index} className="text-sm text-left text-dark m-1">
      {paragraphs}
    </p>
  ));
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="fixed inset-0 bg-black opacity-50"></div>
        <div className="w-auto max-w-xl mx-auto my-6">
          <div className="relative flex flex-col bg-white rounded-lg pl-3">
            <div className="p-4">
              <h2 className="text-3xl font-bold mb-10 mt-5">Terminos y Condiciones</h2>
              <div className="overflow-auto space-y-3 mb-4 h-[50vh] pr-4">{repeatedParagraphs}</div>
              <div className="flex flex-row justify-end space-x-3 pr-9 mb-5 mt-6">
                <button
                  type="button"
                  className=" text-black bg-white rounded-lg border border-black w-32 h-12 font-semibold items-center text-xl"
                  onClick={onClose}
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  className=" text-white bg-black rounded-lg items-center text-xl w-32 h-12 font-semibold"
                  onClick={onAccept}
                >
                  Aceptar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;
