import { Navigate } from "react-router-dom";
import { ReactComponentElement } from "react";
import { PATH } from "./router";

type PropsType = {
  children: ReactComponentElement<any>;
};

export const ProtectedRoute = ({ children }: PropsType) => {
  const logged = false

  return logged
    ? children : <Navigate to={PATH.ERROR404} />;
};
