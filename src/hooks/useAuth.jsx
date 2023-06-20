import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthStates } from '../constants/authConstants';
import { getCookie, deleteCookie, setCookie } from "../utils/cookiesUtils";

export default function useAuth({ redirectTo = '/', forceAuth = true } = {}) {
  const navigate = useNavigate();
  const location = useLocation();
  const [authStatus, setAuthStatus] = useState(AuthStates.LOADING);

  const getSessionToken = () => {
    const cookie = getCookie('CANTORAL-TOKEN');
    return cookie || null;
  };

  const setSessionToken = (value) => {
    let duration = 5;
    // eslint-disable-next-line no-undef
    if (process.env.NODE_ENV === 'development') duration = 45;
    setCookie('CANTORAL-TOKEN', value, duration);
  };

  const deleteSessionToken = () => {
    deleteCookie('CANTORAL-TOKEN');
    navigate('/');
    window.location.reload();
  };

  useEffect(() => {
    const cookie = getCookie('CANTORAL-TOKEN');
    if (cookie) {
      setAuthStatus(AuthStates.LOGGED_IN);
    } else {
      setAuthStatus(AuthStates.LOGGED_OUT);
      if (forceAuth && redirectTo && location.pathname !== redirectTo) {
        navigate(redirectTo);
      }
    }
  }, []);

  return {
    authStatus,
    getSessionToken,
    setSessionToken,
    deleteSessionToken,
  };
}
