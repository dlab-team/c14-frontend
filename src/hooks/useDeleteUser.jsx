import { useMutation, useQueryClient } from 'react-query';

import { AdministrationService } from '@/services/administration.service';
import { toast } from 'sonner';

const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation(id => AdministrationService.deleteUser(id), {
    onSuccess: () => {
      toast.success('Usuario eliminado con éxito');
    },
    onError: error => {
      toast.error(error?.message || 'Ha ocurrido un error al eliminar, intente nuevamente');
    },
    onSettled: () => {
      queryClient.invalidateQueries('users');
    },
  });
};

export default useDeleteUser;
