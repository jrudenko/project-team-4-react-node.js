import { CirclesWithBar } from 'react-loader-spinner';

export const Loader = ({ size = '100', pageHeight, outcolor = '#8BAA36' }) => {
  return (
    <>
      <CirclesWithBar
        height={pageHeight ?? size}
        width={size}
        color="#4fa94d"
        wrapperStyle={{ display: 'flex', justifyContent: 'center' }}
        wrapperClass=""
        visible={true}
        outerCircleColor={outcolor}
        innerCircleColor="#3E4462"
        barColor="#1E1F28"
        ariaLabel="circles-with-bar-loading"
      />
    </>
  );
};
