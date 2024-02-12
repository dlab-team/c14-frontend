import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'sonner';
import { PhrasesService } from '@/services/phrases.service';

const useEditPhrase = () => {
  const queryClient = useQueryClient();

  return useMutation(({ id, ...payload }) => PhrasesService.updatePhrase(id, payload), {
    onSuccess: () => {
      toast.success('Frase editada con éxito');
    },
    onError: error => {
      toast.error(error?.message || 'Ha ocurrido un error, intente nuevamente');
    },
    onSettled: () => {
      queryClient.invalidateQueries('phrases');
    },
  });
};

export default useEditPhrase;
