import { PhrasesService } from '@/services/phrases.service';
import { toast } from 'sonner';
import { useQuery } from 'react-query';

const useGetOppositeSocialPhrases = optionId => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryHash: ['oppositeSocialPhrases', optionId],
    queryFn: () => PhrasesService.getInverseSocialPhrases(optionId),
    onError: error => {
      toast.error(error?.message || 'Error al obtener las opciones');
    },
  });

  return { data, isLoading, isError, refetch };
};

export default useGetOppositeSocialPhrases;
