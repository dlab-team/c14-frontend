import { useMutation, useQueryClient } from 'react-query';

import { PhrasesService } from '@/services/phrases.service';
import { toast } from 'sonner';

const useDeletePhrase = () => {
  const queryClient = useQueryClient();

  return useMutation(id => PhrasesService.deletePhrase(id), {
    onSuccess: () => {
      toast.success('Opción eliminada con éxito');
    },
    onError: error => {
      toast.error(error?.message || 'Ha ocurrido un error al eliminar, intente nuevamente');
    },
    onSettled: () => {
      queryClient.invalidateQueries('options');
    },
  });
};

export default useDeletePhrase;
