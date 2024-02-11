import { useMutation, useQueryClient } from 'react-query';

import { PhrasesService } from '@/services/phrases.service';
import { toast } from 'sonner';

const useCreatePhrase = () => {
  const queryClient = useQueryClient();

  return useMutation(PhrasesService.createPhrase, {
    onSuccess: () => {
      toast.success('Frase creada con éxito');
    },
    onError: error => {
      toast.error(error?.message || 'Ha ocurrido un error, intente nuevamente');
    },
    onSettled: () => {
      queryClient.invalidateQueries('PhrasesByidPolinomial');
    },
  });
};

export default useCreatePhrase;
