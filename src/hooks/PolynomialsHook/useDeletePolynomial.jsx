import { useMutation, useQueryClient } from 'react-query';

import { PolynomialsService } from '@/services/polynomials.service';
import { toast } from 'sonner';

const useDeletePolynomial = () => {
  const queryClient = useQueryClient();

  return useMutation(id => PolynomialsService.deletePolynomial(id), {
    onSuccess: () => {
      toast.success('Polynomio eliminado con éxito');
    },
    onError: error => {
      toast.error(error?.message || 'Ha ocurrido un error al eliminar, intente nuevamente');
    },
    onSettled: () => {
      queryClient.invalidateQueries('polynomials');
    },
  });
};

export default useDeletePolynomial;
