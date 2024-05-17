import React from 'react';
import { Header } from '../header';
import { Outlet } from 'react-router-dom';
import { Footer } from '../footer';
import styled from 'styled-components';

export const Layout = () => {
  return (
    <div className="d-flex flex-column">
      <Header />
      <StyledContent className="py-3">
        <Outlet />
      </StyledContent>
      <Footer />
    </div>
  );
};

const StyledContent = styled.div`
  min-height: calc(100vh - 120px);
`;
