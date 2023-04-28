
import styled from 'styled-components';
import { ColorRing } from 'react-loader-spinner';

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Loader = ({ pageHeight, size = '100' }) => {
  return (
    <LoaderWrapper>
      <ColorRing
        visible={true}
        height={pageHeight ?? size}
        width={size}
        ariaLabel="blocks-loading"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    </LoaderWrapper>
  );
};

