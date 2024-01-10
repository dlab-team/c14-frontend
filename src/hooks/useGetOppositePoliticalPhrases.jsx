import { PhrasesService } from '@/services/phrases.service';
import { toast } from 'sonner';
import { useQuery } from 'react-query';

const useGetOppositePoliticalPhrases = group => {

  const newGroup = group;
  const { data, isLoading, isError } = useQuery(
    ['group', newGroup],
    () => PhrasesService.getExtrmPoliticalPhrases(newGroup),
    {
      onError: error => {
        toast.error(error?.message || 'Error al obtener las frases');
      },
    }
  );


  return { data, isLoading, isError };
};

export default useGetOppositePoliticalPhrases;
