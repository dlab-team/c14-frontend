import { OptPolynomialsService } from '@/services/optionPolynomial.service';
import { toast } from 'sonner';
import { useMutation } from 'react-query';

const useEditOption = () => {
  return useMutation(({ id, payload }) => OptPolynomialsService.editOptPolynomial(id, payload), {
    onSuccess: () => {
      toast.success('Opcion editada con exito');
    },
    onError: error => {
      toast.error(error?.message || 'Ha ocurrido un error, intente nuevamente');
    },
  });
};

export default useEditOption;
