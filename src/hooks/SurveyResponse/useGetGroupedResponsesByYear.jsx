import { ResponseService } from '@/services/response.service';
import { toast } from 'sonner';
import { useQuery } from 'react-query';

export const useGetGroupedResponsesByYear = () => {
  const { data, isLoading, isError, refetch } = useQuery(
    'groupedByYear',
    ResponseService.groupedByYear,
    {
      onError: error => {
        toast.error(error?.message || 'Error al obtener los datos de los años');
      },
    }
  );

  return { data, isLoading, isError, refetch };
};
