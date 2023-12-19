import { ForgotService } from '../services/forgot.service'
import { useMutation } from 'react-query'
import { toast } from 'sonner';

const useForgotPasswordLink = () => {

  return useMutation(ForgotService.forgot, {
    onSuccess: ({ message }) => {
        toast.success(message || `Se ha enviado un email a su correo`);
    },
    onError: () => {
        toast.error('Este correo no se encuentra registrado');
    },
  })
}

export default useForgotPasswordLink