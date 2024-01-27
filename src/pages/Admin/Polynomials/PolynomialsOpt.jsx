import AdminHeader from '@/components/admin/AdminHeader';
import { CiCirclePlus } from 'react-icons/ci';
import CreateOptionModal from './Components/CreateOptModal';
import CreatePolynomialModal from './Components/CreatePolynomialModal';
import EditPolynomialModal from './Components/EditPolynomialModal';
import OptButton from './Components/OptButton';
import OptionCard from './Components/OptionsCard';
import PolynomialCard from './Components/PolynomialCard';
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

  const [polynomialsState, setPolynomialsState] = useState({});

  const DetailsOpt = polynomial => {
    setSelectedPolynomial(prevSelected =>
      prevSelected && prevSelected.id === polynomial.id ? null : polynomial
    );

    setPolynomialsState(prevState => ({
      ...prevState,
      [polynomial.id]: !prevState[polynomial.id],
    }));
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
        title="Control de Polinomios"
        description="Aquí puedes crear, modificar y eliminar polinomios."
      />
      <div className="flex relative overflow-x-auto  p-3 my-8  max-w-4xl mx-auto xl:justify-end justify-center">
        <button
          className="bg-black px-4 py-2 rounded-2xl text-white text-xl font-bold flex justify-center items-center gap-2"
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
              <PolynomialCard
                key={poly?.id}
                polynomial={poly}
                deletePolynomial={deletePolynomial}
                toggleEditPolynomialModal={toggleEditPolynomialModal}
                DetailsOpt={() => DetailsOpt(poly)}
                isOptionsOpen={polynomialsState[poly.id] || false}
              >
                <div className="flex flex-col items-center mt-5">
                  <OptButton toggleOptionModal={toggleOptionModal} />
                  <div className="flex flex-wrap gap-2">
                    {options &&
                      options
                        .filter(opt => opt.polynomialId === poly.id)
                        .map(opt => (
                          <OptionCard key={opt.id} option={opt} deleteOption={deleteOption} />
                        ))}
                  </div>
                </div>
              </PolynomialCard>
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
              <PolynomialCard
                key={poly?.id}
                polynomial={poly}
                deletePolynomial={deletePolynomial}
                toggleEditPolynomialModal={toggleEditPolynomialModal}
                DetailsOpt={() => DetailsOpt(poly)}
                isOptionsOpen={polynomialsState[poly.id] || false}
              >
                <div className="flex flex-col items-center mt-5">
                  <OptButton toggleOptionModal={toggleOptionModal} />
                  <div className="flex flex-wrap gap-2">
                    {options &&
                      options
                        .filter(opt => opt.polynomialId === poly.id)
                        .map(opt => (
                          <OptionCard key={opt.id} option={opt} deleteOption={deleteOption} />
                        ))}
                  </div>
                </div>
              </PolynomialCard>
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
