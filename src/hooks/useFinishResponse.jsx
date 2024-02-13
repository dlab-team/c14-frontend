import { useMutation } from 'react-query';
import { ResponseService } from '@/services/response.service';
import { toast } from 'sonner';
import useFormStore from '@/store/useFormStore';

const useFinishResponse = characterization => {
  const responseId = useFormStore.getState().responseId;
  const polinomialOptionsId = Array.isArray(characterization)
    ? characterization
    : [characterization];

  const payload = {
    id: responseId,
    polinomialOptionsId: polinomialOptionsId,
  };

  return useMutation(() => ResponseService.finishResponse(payload), {
    onSuccess: () => {
      console.log('success');
      toast.success('Encuesta finalizada con éxito');
    },
    onError: error => {
      toast.error(error?.message || 'Ha ocurrido un error, intente nuevamente');
    },
  });
};

export default useFinishResponse;
