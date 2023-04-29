// import { IoClose } from 'react-icons/io5';
import {
  Descriptions,
  ImageItem,
  ShoppingItem,
  Bage,
  CloseButton,
} from './ShoppingList.styled';
import { useDispatch, useSelector } from 'react-redux';

import { deleteItem, getList } from '../../redux/shoppingList/shoppingListOperations';
// import { Loader } from 'components/Loader/Loader';


export const ShoppingListItem = ({ item }) => {
  const dispatch = useDispatch();
  const darkMode = useSelector(state => state.theme);
  const isDeleting = useSelector(state => state.shoppings.isDeleting);


  const handleDeleteItem = item => {
    if (isDeleting) return;
    
    const bodyPost = {
      iid: item.iid,
      number: item.number,
    };
dispatch(deleteItem(bodyPost))
dispatch(getList())
  };

  return (
    <ShoppingItem>
      <Descriptions>
        <ImageItem src={item.thb} alt={item.ttl} />
        <p>{item.ttl}</p>
      </Descriptions>
      <div>
        <Bage>
          {item.number}
        </Bage>
        <CloseButton
          disabled={isDeleting}
          dark={darkMode.darkMode}
          onClick={() => handleDeleteItem(item)}
        > X
          {/* {isDeleting && deletingId ? (
            <Loader size="28" />
          ) : (
            <IoClose size={24} />
          )} */}
        </CloseButton>
      </div>
    </ShoppingItem>


  );
};