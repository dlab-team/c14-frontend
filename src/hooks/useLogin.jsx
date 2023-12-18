import { useMutation } from 'react-query'
import { useNavigate } from 'react-router'
import { LoginService } from '../services/login.service'
import { toast } from 'sonner';
import useAuthStore from '../store/useAuthStore'

const useLogin = () => {
  const { setAuth } = useAuthStore()
  const navigate = useNavigate()

  return useMutation(LoginService.login, {
    onSuccess: ( data ) => {
      const { token, ...user } = data
      navigate('/auth/admin')  
      toast.success('Sesion iniciada correctamente')
      setAuth({ user })      
    },
    onError: () => {
      toast.error('Credenciales inválidas');
      console.log("error")
    },
  })
}

export default useLogin
