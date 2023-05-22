import { lazy, Suspense } from "react";
import { RouteObject } from "react-router-dom";
import { useRoutes } from "react-router-dom";

const Home = lazy(() => import("@/views/HomePage"));
const Login = lazy(() => import("@/views/LoginPage"));
const Register = lazy(() => import("@/views/RegisterPage"));
const Exam = lazy(() => import("@/views/ExamPage"));
const WorkBookPage = lazy(() => import("@/views/WorkBookPage"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/workBook",
    element: <WorkBookPage />,
  },
  {
    path: "/exam/:id",
    element: <Exam />,
  },
];

export default function AppRouter() {
  const router = useRoutes(routes);
  return <Suspense>{router}</Suspense>;
}
