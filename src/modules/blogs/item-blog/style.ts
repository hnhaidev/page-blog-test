import styled from 'styled-components';

export const StyledItemBlog = styled.div`
  overflow: hidden;
  .card-thumbnail {
    height: 225px;
    border-radius: 0;
  }
  .card-content {
    height: 130px;
  }
  .item-title {
    height: 44px;
    margin-bottom: 1rem;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  .card-date {
    width: 70px;
    height: 18px;
  }
`;
