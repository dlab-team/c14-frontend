import { ResponseService } from '@/services/response.service';
import { toast } from 'sonner';
import { useQuery } from 'react-query';

export const useGetTrends = polynomialId => {
  const { data, isLoading, isError } = useQuery(
    ['trends', polynomialId],
    () => ResponseService.trendResults(polynomialId),
    {
      onError: error => {
        toast.error(error?.message || 'Error al obtener las tendencias');
      },
    }
  );

  return { data, isLoading, isError };
};
