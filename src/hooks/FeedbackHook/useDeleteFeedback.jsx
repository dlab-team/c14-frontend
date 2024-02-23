import { FeedbackService } from '@/services/feedback.service';
import { toast } from 'sonner';
import { useMutation, useQueryClient } from 'react-query';

const useDeleteFeedback = () => {
  const queryClient = useQueryClient();

  return useMutation(id => FeedbackService.deleteFeedback(id), {
    onSuccess: () => {
      toast.success('Feedback eliminado con éxito');
    },
    onError: error => {
      toast.error(error?.message || 'Ha ocurrido un error al eliminar, intente nuevamente');
    },
    onSettled: () => {
      queryClient.invalidateQueries('feedback');
    },
  });
};

export default useDeleteFeedback;
