import{MenuItems,Item,Link} from './Footer.styled'

export const FooterMenu = () => {
  return (
    <>
      <MenuItems>
        <Item>
          <Link to="/search">Ingredients</Link>
        </Item>
        <Item>
           <Link to="/add">Add recipes</Link>
        </Item>
        <Item>
          <Link to="/my">My recipes</Link>
        </Item>
        <Item>
         <Link to="/favorite">Favorite</Link>
        </Item>
        <Item>
         <Link to="/shopping-list">Shopping list</Link>
        </Item>
      </MenuItems>
    </>
  );
};
