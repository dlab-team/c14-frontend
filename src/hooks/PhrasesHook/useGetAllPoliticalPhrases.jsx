import { PhrasesService } from '@/services/phrases.service';
import { toast } from 'sonner';
import { useQuery } from 'react-query';

const useGetAllPoliticalPhrases = () => {
  const { data, isLoading, isError, refetch } = useQuery(
    'political-phrases',
    PhrasesService.getAllPoliticalPhrases,
    {
      onError: error => {
        toast(error?.message || 'Error al obtener las frases');
      },
    }
  );

  return { data, isLoading, isError, refetch };
};

export default useGetAllPoliticalPhrases;
