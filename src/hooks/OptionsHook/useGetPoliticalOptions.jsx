import { OptPolynomialsService } from '@/services/optionPolynomial.service';
import { toast } from 'sonner';
import { useQuery } from 'react-query';

const useGetOptions = () => {
  const { data, isLoading, isError, refetch } = useQuery(
    'politicalOptions',
    OptPolynomialsService.getOptPoliticalPolynomial,
    {
      onError: error => {
        toast.error(error?.message || 'Error al obtener las opciones');
      },
    }
  );

  return { data, isLoading, isError, refetch };
};

export default useGetOptions;
