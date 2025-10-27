
import { lazy } from 'react';
import Loadable from '../layouts/full/shared/loadable/Loadable';
import HeaderLayout from 'src/layouts/blank/HeaderLayout';
import AuthLayout from 'src/layouts/auth/AuthLayout';

/* ***Layouts**** */
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));

/* **** Dall Pages***** */
const LandingPage = Loadable(lazy(() => import('../pages/landingpage/Landingpage')));
const Options = Loadable(lazy(() => import('../pages/landingpage/Options')));
const Login = Loadable(lazy(() => import('../pages/auth/login/Login')));
const NotFound = Loadable(lazy(() => import('../pages/error/Error')));
const Category = Loadable(lazy(() => import('../pages/category/CategoryPage')));
const AllJobs = Loadable(lazy(() => import('../pages/all-jobs/AllJobsPage')));

const Router = [
  {
    path: '/',
    element: <BlankLayout />,
    children: [
      { path: '/', element: <Options /> },
      { path: '/error_page', element: <NotFound/>},
      { path: '*', element: <NotFound/>},
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: '/auth/login/:id', element: <Login /> },
    ],
  },
  {
    path: '/',
    element: <HeaderLayout />,
    children: [
      { path: '/:id', element: <LandingPage /> },
      { path: '/:id/category/:id', element: <Category/>},
      { path: '/:id/all-jobs', element: <AllJobs/>},
    ],
  },
];

export default Router;
