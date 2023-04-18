import Header from 'components/Header';
import Footer from 'components/Footer';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { SharedLayoutContainer } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <SharedLayoutContainer>
      <Header />
      <Outlet />
      <Footer />
    </SharedLayoutContainer>
  );
};

export default SharedLayout;


