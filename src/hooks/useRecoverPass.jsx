import { RecoveryService } from '@/services/recovery.service';
import { toast } from 'sonner';
import { useMutation } from 'react-query';

const useResetPassword = () => {
  return useMutation(RecoveryService.recovery, {
    onError: error => {
      const errorMessage = error?.response?.data?.message || error?.message;
      toast.error(errorMessage || 'Algo salio mal, vuelve a intentarlo');
    },
  });
};

export default useResetPassword;
