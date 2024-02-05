import { PhrasesService } from '@/services/phrases.service';
import { toast } from 'sonner';
import { useQuery } from 'react-query';

const useGetOppositeSocialPhrases = optionIds => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryHash: ['oppositeSocialPhrases', optionIds],
    queryFn: () => PhrasesService.getInverseSocialPhrases(optionIds),
    onError: error => {
      toast.error(error?.message || 'Error al obtener las opciones');
    },
  });

  return { data, isLoading, isError, refetch };
};

export default useGetOppositeSocialPhrases;
