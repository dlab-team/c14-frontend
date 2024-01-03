import { OptPolynomialsService } from '@/services/optionPolynomial.service';
import { toast } from 'sonner';
import { useMutation } from 'react-query';

const useCreateOption = () => {
  return useMutation(OptPolynomialsService.createOptPolynomial, {
    onSuccess: () => {
      toast.success('Opcion creada con exito');
    },
    onError: error => {
      toast.error(error?.message || 'Ha ocurrido un error, intente nuevamente');
    },
  });
};

export default useCreateOption;
