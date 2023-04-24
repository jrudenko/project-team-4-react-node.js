import{MenuItems, Item } from './Footer.styled'
import { Link } from 'react-router-dom';

export const FooterMenu = () => {
  return (
    <>
      <MenuItems>
        <Item>
          <Link to="/search" style={{ color: "white", textDecoration: 'none'}}>Ingredients</Link>
        </Item>
        <Item>
           <Link to="/add" style={{ color: "white", textDecoration: 'none'}}>Add recipes</Link>
        </Item>
        <Item>
          <Link to="/my" style={{ color: "white", textDecoration: 'none'}}>My recipes</Link>
        </Item>
        <Item>
         <Link to="/favorite" style={{ color: "white", textDecoration: 'none'}}>Favorite</Link>
        </Item>
        <Item>
         <Link to="/shopping-list" style={{ color: "white", textDecoration: 'none'}}>Shopping list</Link>
        </Item>
      </MenuItems>
    </>
  );
};
