import { useMutation, useQueryClient } from 'react-query';

import { OptPolynomialsService } from '@/services/optionPolynomial.service';
import { toast } from 'sonner';

const useEditOption = () => {
  const queryClient = useQueryClient();

  return useMutation(({ id, payload }) => OptPolynomialsService.editOptPolynomial(id, payload), {
    onSuccess: () => {
      toast.success('Opcion editada con éxito');
    },
    onError: error => {
      toast.error(error?.message || 'Ha ocurrido un error, intente nuevamente');
    },
    onSettled: () => {
      queryClient.invalidateQueries('options');
    },
  });
};

export default useEditOption;
