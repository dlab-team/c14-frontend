import { useMutation, useQueryClient } from 'react-query';

import { PolynomialsService } from '@/services/polynomials.service';
import { toast } from 'sonner';

const useEditPolynomial = () => {
  const queryClient = useQueryClient();

  return useMutation(({ id, payload }) => PolynomialsService.editPolynomial(id, payload), {
    onSuccess: () => {
      toast.success('Polinomio editado con éxito');
    },
    onError: error => {
      toast.error(error?.message || 'Ha ocurrido un error, intente nuevamente');
    },
    onSettled: () => {
      queryClient.invalidateQueries('polynomials');
    },
  });
};

export default useEditPolynomial;
