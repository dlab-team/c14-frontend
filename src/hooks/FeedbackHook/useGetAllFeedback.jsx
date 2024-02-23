import { FeedbackService } from '@/services/feedback.service';
import { toast } from 'sonner';
import { useQuery } from 'react-query';

const useGetAllFeedback = () => {
  const { data, isLoading, isError, refetch } = useQuery(
    'feedback',
    FeedbackService.getAllFeedback,
    {
      onError: error => {
        toast.error(error?.message || 'Error al obtener las opciones');
      },
    }
  );

  return { data, isLoading, isError, refetch };
};

export default useGetAllFeedback;
