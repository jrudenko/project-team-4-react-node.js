// import { useDispatch } from 'react-redux';

import { DeleteBtnWrapper } from './ButtonDelete.styled';

const ButtonDelete = ({ location, id }) => {
    // const dispatch = useDispatch();
    
    return (
    <DeleteBtnWrapper
      type="button"     
      location={location}
    >
      <svg>
        <use/>
      </svg>
    </DeleteBtnWrapper>
  );
 }

export default ButtonDelete;