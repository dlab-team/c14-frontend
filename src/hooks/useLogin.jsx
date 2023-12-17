import { useMutation } from 'react-query'
import { useNavigate } from 'react-router'
import { LoginService } from '../services/login.service'

import useAuthStore from '../store/useAuthStore'

const useLogin = () => {
  const { setAuth } = useAuthStore()
  const navigate = useNavigate()

  return useMutation(LoginService.login, {
    onSuccess: ({ user }) => {
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
