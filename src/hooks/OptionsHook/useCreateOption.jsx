import { useMutation, useQueryClient } from 'react-query';

import { OptPolynomialsService } from '@/services/optionPolynomial.service';
import { toast } from 'sonner';

const useCreateOption = () => {
  const queryClient = useQueryClient();

  return useMutation(OptPolynomialsService.createOptPolynomial, {
    onSuccess: () => {
      toast.success('Opcion creada con exito');
    },
    onError: error => {
      toast.error(error?.message || 'Ha ocurrido un error, intente nuevamente');
    },
    onSettled: () => {
      queryClient.invalidateQueries('options');
    },
  });
};

export default useCreateOption;
