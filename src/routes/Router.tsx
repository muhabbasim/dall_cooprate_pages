
import { lazy } from 'react';
import Loadable from '../layouts/full/shared/loadable/Loadable';
import HeaderLayout from 'src/layouts/blank/HeaderLayout';

/* ***Layouts**** */
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));

/* **** Dall Pages***** */
const LandingPage = Loadable(lazy(() => import('../pages/landingpage/Landingpage')));
const Options = Loadable(lazy(() => import('../pages/landingpage/Options')));
const Login = Loadable(lazy(() => import('../pages/auth/login/Login')));
const NotFound = Loadable(lazy(() => import('../pages/error/Error')));
const Category = Loadable(lazy(() => import('../pages/category/CategoryPage')));

const Router = [
  {
    path: '/',
    element: <BlankLayout />,
    children: [
      // Acc routes
      { path: '/', element: <Options /> },
      { path: '/auth/login', element: <Login /> },
      { path: '/error_page', element: <NotFound/>},
      { path: '*', element: <NotFound/>},

    ],
  },
  {
    path: '/',
    element: <HeaderLayout />,
    children: [
      // Acc routes
      { path: '/:id', element: <LandingPage /> },
      { path: '/:id/category/:id', element: <Category/>},
    ],
  },
];

export default Router;
