import styled from 'styled-components';

export const CategoriesList = styled.div`
  border-bottom: 1px solid #e0e0e0;
  height: 56px;
  text-decoration: none;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #bdbdbd;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  gap: 28px;
  white-space: nowrap;
  overflow-x: auto;
  scrollbar-width: 2px;

  /* Add custom scrollbar */
  scrollbar-color: transparent;
  scrollbar-width: 2px;

  /* Style the track */
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  /* Style the thumb */
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }

  .active {
    color: #8baa36;
    border-bottom: 2px solid #8baa36;
  }
`;
