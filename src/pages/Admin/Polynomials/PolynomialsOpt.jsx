import AdminHeader from '@/components/admin/AdminHeader';
import { CiCirclePlus } from 'react-icons/ci';
import CreateOptionModal from './Components/CreateOptModal';
import CreatePolynomialModal from './Components/CreatePolynomialModal';
import EditPolynomialModal from './Components/EditPolynomialModal';
import { FaRegTrashCan } from 'react-icons/fa6';
import { FiEdit3 } from 'react-icons/fi';
import { TbLetterX } from 'react-icons/tb';
import { Toaster } from 'sonner';
import useDeleteOption from '@/hooks/OptionsHook/useDeleteOption';
import useDeletePolynomial from '@/hooks/PolynomialsHook/useDeletePolynomial';
import useGetOptions from '@/hooks/OptionsHook/useGetOptions';
import useGetPolynomials from '@/hooks/PolynomialsHook/useGetPolynomials';
import { useState } from 'react';

const PolynomialsOpt = () => {
  const { data: polynomials, isLoading: loadingPoly, isError: errorPoly } = useGetPolynomials();
  const { mutate: deletePoly } = useDeletePolynomial();
  const { data: options, isLoading, isError } = useGetOptions();
  const { mutate: deleteOpt } = useDeleteOption();
  const [isCreatingOpt, setIsCreatingOpt] = useState(false);
  const [selectedPolynomial, setSelectedPolynomial] = useState(null);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [isCreatingPoly, setIsCreatingPoly] = useState(false);
  const [isEditingPoly, setIsEditingPoly] = useState(false);

  const DetailsOpt = polynomial => {
    setSelectedPolynomial(
      selectedPolynomial && selectedPolynomial.id === polynomial.id ? null : polynomial
    );
    setIsOptionsOpen(selectedPolynomial && selectedPolynomial.id === polynomial.id ? false : true);
  };

  const toggleOptionModal = () => {
    setIsCreatingOpt(!isCreatingOpt);
    setIsOptionsOpen(!isOptionsOpen);
  };

  const togglePolynomialModal = () => {
    setIsCreatingPoly(!isCreatingPoly);
  };

  const toggleEditPolynomialModal = polynomial => {
    setSelectedPolynomial(polynomial);
    setIsEditingPoly(!isEditingPoly);
  };

  const deleteOption = async id => {
    const status = window.confirm(`¿Estás seguro de eliminar la opción?`);
    if (status) {
      deleteOpt(id);
    }
  };

  const deletePolynomial = async id => {
    const status = window.confirm(`¿Estás seguro de eliminar el polinomio?`);
    if (status) {
      deletePoly(id);
    }
  };

  if (isLoading && loadingPoly) {
    return <p>Loading...</p>;
  }

  if (isError && errorPoly) {
    return <p>Error loading data</p>;
  }

  return (
    <>
      <Toaster position="top-center" />
      <AdminHeader
        title="Opciones de polinomios"
        description="Puedes agregar, modificar o eliminar opciones"
      />
      <div className="flex relative overflow-x-auto  p-3 my-8  max-w-4xl mx-auto xl:justify-end justify-center">
        <button
          className="bg-black px-4 py-2 rounded-2xl text-white text-xl font-bold flex justify-center items-center"
          onClick={() => togglePolynomialModal()}
        >
          Crear un Polinomio <CiCirclePlus />
        </button>
      </div>
      <div className="bg-purple-500 flex relative overflow-x-auto  p-3 my-8  max-w-4xl mx-auto justify-center ">
        <h1 className="font-bold text-center text-lg text-white">Polinomios Políticos</h1>{' '}
      </div>
      <div>
        {polynomials &&
          polynomials
            ?.filter(poly => poly.political === true)
            .map(poly => (
              <div
                key={poly?.id}
                className="relative overflow-x-auto mx-auto my-8 max-w-4xl border rounded border-slate-200 bg-white shadow-xl p-4 md:p-10 mb-10 "
              >
                <div className="flex justify-between items-center text-2xl m-2">
                  <p className="font-semibold w-52 sm:mb-5">{poly.name}</p>
                  <p className="font-semibold hidden sm:block">
                    {poly.active ? 'activo' : 'inactivo'}
                  </p>
                  <div className="flex gap-4">
                    <button
                      className="border rounded border-black p-1"
                      onClick={() => deletePolynomial(poly.id)}
                    >
                      <FaRegTrashCan />
                    </button>
                    <button
                      className="border rounded border-black p-1"
                      onClick={() => toggleEditPolynomialModal(poly)}
                    >
                      <FiEdit3 />
                    </button>
                    <button
                      className={`border rounded border-black p-1 ${
                        isOptionsOpen ? 'bg-black text-white' : 'bg-white text-black'
                      }`}
                      onClick={() => DetailsOpt(poly)}
                    >
                      Opciones
                    </button>
                  </div>
                </div>
                <div>
                  {selectedPolynomial && selectedPolynomial.id === poly.id && (
                    <div className="flex flex-col items-center mt-5">
                      <div className="mb-3">
                        <button
                          className="underline text-black px-4 py-2 rounded cursor-pointer"
                          onClick={() => toggleOptionModal()}
                        >
                          Agregar una opción
                        </button>
                      </div>
                      <div className="flex flex-wrap">
                        {options &&
                          options
                            .filter(opt => opt.polynomialId === poly.id)
                            .map(opt => (
                              <div
                                key={opt.id}
                                className="border rounded-md border-gray-300 m-1 flex max-w-sm items-center p-2"
                              >
                                <p>{opt.name}</p>
                                <button
                                  className="text-red-500 m-2 border border-red-600 rounded-lg"
                                  onClick={() => deleteOption(opt.id)}
                                >
                                  <TbLetterX size={20} />
                                </button>
                              </div>
                            ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
      </div>

      <div className="bg-teal-500 flex relative overflow-x-auto  p-3 my-8  max-w-4xl mx-auto justify-center ">
        <h1 className="font-bold text-center text-lg text-white">Polinomios Sociales</h1>{' '}
      </div>
      <div>
        {polynomials &&
          polynomials
            ?.filter(poly => poly.political === false)
            .map(poly => (
              <div
                key={poly?.id}
                className="relative overflow-x-auto mx-auto my-8 max-w-4xl border rounded border-slate-200 bg-white shadow-xl p-4 md:p-10 mb-10"
              >
                <div className="flex sm:flex-row justify-between items-center text-2xl m-2">
                  <p className="font-semibold w-52">{poly.name}</p>
                  <p className="font-semibold hidden sm:block">
                    {poly.active ? 'activo' : 'inactivo'}
                  </p>
                  <div className="flex gap-4 ">
                    <button
                      className="border rounded border-black p-1"
                      onClick={() => deletePolynomial(poly.id)}
                    >
                      <FaRegTrashCan />
                    </button>
                    <button
                      className="border rounded border-black p-1"
                      onClick={() => toggleEditPolynomialModal(poly)}
                    >
                      <FiEdit3 />
                    </button>
                    <button
                      className={`border rounded border-black p-1 ${
                        isOptionsOpen ? 'bg-black text-white' : 'bg-white text-black'
                      }`}
                      onClick={() => DetailsOpt(poly)}
                    >
                      Opciones
                    </button>
                  </div>
                </div>
                <div>
                  {selectedPolynomial && selectedPolynomial.id === poly.id && (
                    <div className="flex flex-col items-center mt-5">
                      <div className="mb-3">
                        <button
                          className="underline text-black px-4 py-2 rounded cursor-pointer"
                          onClick={() => toggleOptionModal()}
                        >
                          Agregar una opción
                        </button>
                      </div>
                      <div className="flex flex-wrap">
                        {options &&
                          options
                            .filter(opt => opt.polynomialId === poly.id)
                            .map(opt => (
                              <div
                                key={opt.id}
                                className="border rounded-md border-gray-300 m-1 flex max-w-sm items-center p-2"
                              >
                                <p>{opt.name}</p>
                                <button
                                  className="text-red-500 m-2 border border-red-600 rounded-lg"
                                  onClick={() => deleteOption(opt.id)}
                                >
                                  <TbLetterX size={20} />
                                </button>
                              </div>
                            ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
      </div>
      {isCreatingOpt && (
        <CreateOptionModal
          isOpen={isCreatingOpt}
          onClose={() => {
            setIsOptionsOpen(false);
            setIsCreatingOpt(false);
          }}
          selectedPolynomial={selectedPolynomial}
        />
      )}

      {isCreatingPoly && (
        <CreatePolynomialModal isOpen={isCreatingPoly} onClose={() => setIsCreatingPoly(false)} />
      )}

      {isEditingPoly && selectedPolynomial && (
        <EditPolynomialModal
          isOpen={isEditingPoly}
          onClose={toggleEditPolynomialModal}
          polynomialData={selectedPolynomial}
        />
      )}
    </>
  );
};

export default PolynomialsOpt;
