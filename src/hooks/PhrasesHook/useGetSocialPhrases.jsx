import { PhrasesService } from '@/services/phrases.service';
import { toast } from 'sonner';
import { useQuery } from 'react-query';

const useGetSocialPhrases = optionIds => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryHash: ['socialPhrases', optionIds],
    queryFn: () => PhrasesService.getSocialPhrases(optionIds),
    onError: error => {
      toast.error(error?.message || 'Error al obtener las opciones');
    },
  });

  return { data, isLoading, isError, refetch };
};

export default useGetSocialPhrases;
