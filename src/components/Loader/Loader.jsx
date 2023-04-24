import { ColorRing } from 'react-loader-spinner';

export const Loader = ({ outcolor = '#8BAA36' }) => {
  return (
    <>
      <ColorRing
  visible={true}
  height="150"
  width=""
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    </>
  );
};

