import { useMutation, useQueryClient } from 'react-query';

import { OptPolynomialsService } from '@/services/optionPolynomial.service';
import { toast } from 'sonner';

const useDeleteOption = () => {
  const queryClient = useQueryClient();

  return useMutation(id => OptPolynomialsService.deleteOptPolynomial(id), {
    onSuccess: () => {
      toast.success('Opción eliminada con éxito');
    },
    onError: error => {
      toast.error(error?.message || 'Ha ocurrido un error al eliminar, intente nuevamente');
    },
    onSettled: () => {
      queryClient.invalidateQueries('options');
    },
  });
};

export default useDeleteOption;
