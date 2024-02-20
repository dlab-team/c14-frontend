import { useQuery } from 'react-query';

import { PolynomialsService } from '@/services/polynomials.service';

const useGetPoliticalPolynomial = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['political-polynomial'],
    queryFn: () => PolynomialsService.getPoliticalPolynomial(),
  });

  return { data, isLoading };
};

export default useGetPoliticalPolynomial;
