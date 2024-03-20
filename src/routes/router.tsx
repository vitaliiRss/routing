import App from "../App";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { Brand } from '../components/pages/Brand';
import { Model } from "../components/pages/Model";
import { ProtectedPage } from "../components/pages/ProtectedPage";
import { Error404 } from "../components/pages/Error404";
import { ProtectedRoute } from "./ProtectedRoute";


export const PATH = {
  ROOT: "/",
  ADIDAS: "/adidas",

  PROTECTED: "/protected",
  ERROR404: "/error404",

  BRAND: '/:brand',
  MODEL: '/:brand/:id',
} as const

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
    children: [
      {
        path: PATH.ROOT,
        element: <Navigate to={PATH.ADIDAS} />
      },
      {
        path: PATH.BRAND,
        element: (
          <Brand />
        ),
      },
      {
        path: PATH.MODEL,
        element: (
          <Model />
        ),
      },
      {
        path: PATH.PROTECTED,
        element: (
          <ProtectedRoute>
            <ProtectedPage />
          </ProtectedRoute>
        ),
      },
      {
        path: PATH.ERROR404,
        element: (
          <Error404 />
        ),
      }
    ],
  },
]);
