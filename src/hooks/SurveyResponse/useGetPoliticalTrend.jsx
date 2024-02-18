import { ResponseService } from '@/services/response.service';
import { toast } from 'sonner';
import { useQuery } from 'react-query';

const useGetPoliticalTrend = polynomialId => {
  const { data, isLoading, isError } = useQuery(
    ['politicalTrend', polynomialId],
    () => ResponseService.politicalTrendResults(polynomialId),
    {
      onError: error => {
        toast.error(error?.message || 'Error al obtener las tendencias');
      },
    }
  );

  return { data, isLoading, isError };
};

export default useGetPoliticalTrend;
