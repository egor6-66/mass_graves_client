import React, { lazy } from 'react';
import { Route } from 'react-router-dom';

// const MainPage = lazy(() => import('./ui'));
import MainPage from './ui';

const mainRoutes = <Route path="/main" element={<MainPage />} />;
//
export default mainRoutes;
