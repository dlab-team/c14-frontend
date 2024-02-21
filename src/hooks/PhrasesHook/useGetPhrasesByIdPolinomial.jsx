import { PhrasesService } from '@/services/phrases.service';
import { toast } from 'sonner';
import { useQuery } from 'react-query';

const useGetPhrasesByIdPolinomial = idPolinomial => {
  const { data, isLoading, isError, refetch } = useQuery(
    ['phrases', 'polynomial', idPolinomial],
    () => PhrasesService.getPhrasesByIdPolinomial(idPolinomial),
    {
      onError: error => {
        toast.error(error?.message || 'Error al obtener las frases');
      },
    }
  );

  return { data, isLoading, isError, refetch };
};

export default useGetPhrasesByIdPolinomial;
