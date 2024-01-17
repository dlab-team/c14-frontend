import { PhrasesService } from '@/services/phrases.service';
import { toast } from 'sonner';
import { useQuery } from 'react-query';

const useGetPoliticalPhrases = valor => {
  const { data, isLoading, isError, refetch } = useQuery(
    'politicalPhrases',
    PhrasesService.getPoliticalPhrases(valor),
    {
      onError: error => {
        toast.error(error?.message || 'Error al obtener las opciones');
      },
    }
  );

  return { data, isLoading, isError, refetch };
};

export default useGetPoliticalPhrases;
