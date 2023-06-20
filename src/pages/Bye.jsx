import { useEffect } from 'react';
import useCurrentUser from '../hooks/useCurrentUser';

const Bye = () => {
  const { logout } = useCurrentUser();

  useEffect(() => {
    logout();
  }, []);

  return <div />;
};

export default Bye;
