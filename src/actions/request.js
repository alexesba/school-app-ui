import { useRecoilState } from 'recoil';
import axios from 'axios';
import AuthAtom from '../atoms/auth';
import { Session } from '../constants/auth/actions';
import { pick } from 'lodash';
import { useLocation, useNavigate } from 'react-router-dom';


const getAuthHeaders = response => {
  return pick(
    response.headers,
    ["access-token", "client", "expiry", "uid", "token-type"]
  )
}

const useAxiosWrapper = () => {
  const api = axios.create();
  const [headers, setAuth] = useRecoilState(AuthAtom);

  const navigate = useNavigate();

  const successResponse = response => {
    const authHeaders = getAuthHeaders(response);
    if (authHeaders['access-token']) {
      setAuth(authHeaders)
      Session.setToken(JSON.stringify(authHeaders));
    }
    return response;
  };

  const errorResponse = error => {
    navigate('/login');
    return error;
  }

  const setRequestHeaders = (config) => {
    config.headers = headers
    return config;
  }

  // Refresh the token on each request
  api.interceptors.response.use(
    successResponse,
    errorResponse
  )

  // Set the header tokens on each request
  api.interceptors.request.use(setRequestHeaders)

  return api;
}

export default useAxiosWrapper;
