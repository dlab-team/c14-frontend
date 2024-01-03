import { OptPolynomialsService } from '@/services/optionPolynomial.service';
import { toast } from 'sonner';
import { useMutation } from 'react-query';

const useDeleteOption = () => {
  return useMutation(id => OptPolynomialsService.deleteOptPolynomial(id), {
    onSuccess: () => {
      toast.success('Opción eliminada con éxito');
    },
    onError: error => {
      toast.error(error?.message || 'Ha ocurrido un error al eliminar, intente nuevamente');
    },
  });
};

export default useDeleteOption;
