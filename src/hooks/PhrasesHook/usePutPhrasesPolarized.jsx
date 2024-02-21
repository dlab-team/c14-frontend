import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'sonner';
import { PhrasesService } from '@/services/phrases.service';

const usePutPhrasesPolarized = () => {
  const queryClient = useQueryClient();

  return useMutation(({ id }) => PhrasesService.putPhrasesPolarized(id), {
    onSuccess: () => {
      toast.success('Polarización actualizada con exito');
    },
    onError: error => {
      toast.error(error?.message || 'Ha ocurrido un error, intente nuevamente');
    },
    onSettled: () => {
      queryClient.invalidateQueries('phrases');
    },
  });
};

export default usePutPhrasesPolarized;
