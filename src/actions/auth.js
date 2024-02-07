import { useNavigate } from 'react-router-dom';
import useAxiosWrapper from './request';
import { LOGIN_URL } from '../constants/api';

export const useAuthActions = () => {
  const api = useAxiosWrapper();
  const navigate = useNavigate();


  const login = async payload => {
    try {
          const _response = await api.post(LOGIN_URL, payload);
      debugger;
          navigate('/', { replace: true });
      } catch (error) {
          console.warn(401, error);
          return error;
      }
  };

  return { login };
};

export default useAuthActions;
