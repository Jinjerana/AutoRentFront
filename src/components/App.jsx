import { Navigate } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy, Suspense } from 'react';
import { Layout } from './Layout';

import HomePage from '../pages/HomePage';
import CatalogPage from '../pages/CatalogPage';
import FavoritesPage from '../pages/FavoritesPage';
import { Welcome } from '../components/Welcome/WelcomeP';
import { fetchAutos } from '../Redux/Autos/autosAPI';

// const HomePage = lazy(() => import('../pages/HomePage'));
// const CatalogPage = lazy(() => import('../pages/CatalogPage'));
// const FavoritesPage = lazy(() => import('../pages/FavoritesPage'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAutos());
  }, [dispatch]);

  return (
    <>
      {/* <BrowserRouter> */}
      <Suspense>
        {/* <Layout> */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/AutoRentFront" element={<Welcome />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            {/* <Route path="*" element={<Navigate to="/" />} /> */}
          </Route>
        </Routes>
        {/* </Layout> */}
      </Suspense>
      {/* </BrowserRouter> */}
    </>
  );
};
