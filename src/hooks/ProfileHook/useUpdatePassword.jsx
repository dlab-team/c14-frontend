import { AdministrationService } from '@/services/administration.service';
import { toast } from 'sonner';
import { useMutation } from 'react-query';

const useUpdatePassword = () => {
  return useMutation(payload => AdministrationService.updatePassword(payload), {
    onSuccess: () => {
      toast.success('Contraseña actualizada con éxito');
    },
    onError: error => {
      toast.error(error?.message || 'Ha ocurrido un error, intente nuevamente');
    },
  });
};

export default useUpdatePassword;
