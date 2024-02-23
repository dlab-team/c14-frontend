import { FeedbackService } from '@/services/feedback.service';
import { toast } from 'sonner';
import { useMutation } from 'react-query';

const useCreateFeedback = () => {
  return useMutation(FeedbackService.createFeedback, {
    onSuccess: () => {
      toast.success('Gracias por calificar la encuesta');
    },
    onError: error => {
      toast.error(error?.message || 'Ha ocurrido un error, intente nuevamente');
    },
  });
};

export default useCreateFeedback;
