import { PhrasesService } from '@/services/phrases.service';
import { toast } from 'sonner';
import { useQuery } from 'react-query';

const useGetOppositePoliticalPhrases = optionId => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryHash: ['oppositePoliticalPhrases', optionId],
    queryFn: () => PhrasesService.getExtrmPoliticalPhrases(optionId),
    onError: error => {
      toast.error(error?.message || 'Error al obtener las opciones');
    },
  });

  return { data, isLoading, isError, refetch };
};

export default useGetOppositePoliticalPhrases;
