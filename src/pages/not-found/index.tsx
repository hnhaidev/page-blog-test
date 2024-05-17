import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { SITE_MAP } from '../../utils/constants/site-map';

const NotFoundPage = () => {
  return (
    <StyledNotFoundPage>
      <h3>Oop's sorry we can't find that page!</h3>
      <Link to={SITE_MAP.HOME.path} className="btn btn-primary">
        Back to home
      </Link>
    </StyledNotFoundPage>
  );
};

export default NotFoundPage;

const StyledNotFoundPage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
