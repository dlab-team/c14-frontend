import { MetricsService } from '@/services/metrics.service';
import { toast } from 'sonner';
import { useQuery } from 'react-query';

const useGetMetrics = () => {
  const { data, isLoading, isError, refetch } = useQuery('metrics', MetricsService.getMetrics, {
    onError: error => {
      toast.error(error?.message || 'Error al obtener los usuarios');
    },
  });

  return { data, isLoading, isError, refetch };
};

export default useGetMetrics;
