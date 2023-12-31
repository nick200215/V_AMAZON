import { useDispatch } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

import { useMemo } from "react";
import jwtDecode from "jwt-decode";
import { handleLogin } from "../features/userSlice";
import { UserType } from "../types/user";

export const ProtectedRoute = () => {
  const dispatch = useDispatch();

  const isLoggedIn = useMemo(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded: UserType = jwtDecode(token);
        if (decoded.exp * 1000 < Date.now()) {
          return false;
        }

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        dispatch(handleLogin(decoded));
        return true;
      } catch (e) {
        return false;
      }
    }

    // return false;
  }, []);

  if (!isLoggedIn) {
    return <Navigate to="/Amazon-Clone-Project/" replace />;
  }

  return <Outlet />;
};
