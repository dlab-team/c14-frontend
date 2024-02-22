import { useMutation, useQueryClient } from 'react-query';

import { PhrasesService } from '@/services/phrases.service';
import { toast } from 'sonner';

const usePutPhrasesPolarized = () => {
  const queryClient = useQueryClient();

  return useMutation(({ id }) => PhrasesService.putPhrasesPolarized(id), {
    onSuccess: () => {
      toast('Polarización actualizada con exito');
    },
    onError: error => {
      toast(error?.message || 'Ha ocurrido un error, intente nuevamente');
    },
    onSettled: () => {
      queryClient.invalidateQueries('political-phrases');
    },
  });
};

export default usePutPhrasesPolarized;
