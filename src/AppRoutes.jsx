import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '@pages/HomePage/HomePage';
import MarketplacePage from '@pages/MarketplacePage/MarketplacePage';
import RankingsPage from '@pages/RankingsPage/RankingsPage';
import ConnectWalletPage from '@pages/ConnectWalletPage/ConnectWalletPage';
import AuthPage from '@pages/AuthPage/AuthPage';
import ErrorPage from '@pages/ErrorPage/ErrorPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/marketplace" element={<MarketplacePage />} />
      <Route path="/rankings" element={<RankingsPage />} />
      <Route path="/connect-wallet" element={<ConnectWalletPage />} />
      <Route path="/auth-page" element={<AuthPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRoutes;
