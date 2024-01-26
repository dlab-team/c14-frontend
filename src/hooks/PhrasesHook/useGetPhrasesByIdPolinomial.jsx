import { PhrasesService } from '@/services/phrases.service';
import { toast } from 'sonner';
import { useQuery } from 'react-query';

const useGetPhrasesByIdPolinomial = idPolinomial => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryHash: 'PhrasesByidPolinomial',
    queryFn: () => PhrasesService.getPhrasesByIdPolinomial(idPolinomial),
    onError: error => {
      toast.error(error?.message || 'Error al obtener las opciones');
    },
  });

  return { data, isLoading, isError, refetch };
};

export default useGetPhrasesByIdPolinomial;
