import { useMutation, useQueryClient } from 'react-query';

import { PolynomialsService } from '@/services/polynomials.service';
import { toast } from 'sonner';

const useCreatePolynomial = () => {
  const queryClient = useQueryClient();

  return useMutation(PolynomialsService.createPolynomial, {
    onSuccess: () => {
      toast.success('Polinomio creado con exito');
    },
    onError: error => {
      toast.error(error?.message || 'Ha ocurrido un error, intente nuevamente');
    },
    onSettled: () => {
      queryClient.invalidateQueries('polynomials');
    },
  });
};

export default useCreatePolynomial;
