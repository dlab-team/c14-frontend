import { ResponseService } from '@/services/response.service';
import { toast } from 'sonner';
import { useQuery } from 'react-query';

export const useGetGroupedResponsesForAYear = year => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['groupedForAYear'],
    queryFn: () => ResponseService.groupedForAYear(year),
  });

  return { data, isLoading, isError, refetch };
};
