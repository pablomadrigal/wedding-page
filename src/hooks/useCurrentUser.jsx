import { useEffect } from 'react';
import { useDispatch, useSelector } from './useRedux';
import {
  fetchCurrentUser,
  currentUserLogout,
  meSelector,
} from '../Store/Slices/currentUser';
import useAuth from './useAuth';
import { AuthStates } from '../Constants/authConstants';

export default function useCurrentUser() {
  const { currentUser, requestStatus, error } = useSelector(meSelector);
  const { authStatus, deleteSessionToken } = useAuth({ forceAuth: false });

  const dispatch = useDispatch();
  useEffect(() => {
    if (
      currentUser === null &&
      requestStatus !== 'pending' &&
      authStatus === AuthStates.LOGGED_IN
    ) {
      dispatch(fetchCurrentUser());
    }
  }, [currentUser, authStatus]);

  const userCan = (property) => {
    return currentUser.admin_actions.includes(property);
  };

  const userCanAtLeastOne = (propertyList) => {
    const filteredArray = currentUser.admin_actions.filter((value) =>
      propertyList.includes(value)
    );
    if (filteredArray.length > 0) return true;
    return false;
  };

  const logout = () => {
    deleteSessionToken();
    dispatch(currentUserLogout());
  };

  return {
    currentUser,
    requestStatus,
    error,
    logout,
    userCan,
    userCanAtLeastOne,
  };
}
