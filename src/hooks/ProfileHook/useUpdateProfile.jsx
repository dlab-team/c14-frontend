import { AdministrationService } from '@/services/administration.service';
import { useMutation } from 'react-query';

const useUpdateProfile = () => {
  return useMutation(payload => AdministrationService.updateProfile(payload));
};

export default useUpdateProfile;
