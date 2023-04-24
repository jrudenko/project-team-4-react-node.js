// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
// import { StyledPaginator } from './Paginator.styled';
// import { useEffect, useState } from 'react';

// export const Paginator = ({
//   totalItems = [],
//   perPage = 8,
//   totalData,
//   setCurrentItems = () => {},
//   setPage = () => {},
//   page = 1,
// }) => {
//   const [itemOffset, setItemOffset] = useState(0);

//   useEffect(() => {
//     if (totalItems.length) {
//       const endOffset = itemOffset + perPage;
//       const currentItems = totalItems.slice(itemOffset, endOffset);
//       setCurrentItems(currentItems);
//     }
//   }, [itemOffset, perPage, setCurrentItems, totalItems]);

//   const handlePageClick = event => {
//     const newOffset = (event.selected * perPage) % totalItems.length;
//     setItemOffset(newOffset);
//     setPage(event.selected + 1);
//   };

//   return (
//     <StyledPaginator
//       breakLabel="..."
//       nextLabel={<FaChevronRight size={18} />}
//       onPageChange={handlePageClick}
//       pageRangeDisplayed={4}
//       marginPagesDisplayed={4}
//       pageCount={
//         Math.ceil(totalItems.length / perPage) || Math.ceil(totalData / perPage)
//       }
//       previousLabel={<FaChevronLeft size={18} />}
//       renderOnZeroPageCount={null}
//       pageClassName="pageBtn"
//       previousClassName="arrowBtn"
//       nextClassName="arrowBtn"
//       pageLinkClassName="pageLink"
//       previousLinkClassName="previousLink"
//       nextLinkClassName="nextLink"
//       forcePage={page - 1}
//     />
//   );
// };