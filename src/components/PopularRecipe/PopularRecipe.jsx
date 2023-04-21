import { popularArray } from './ExampleArray';
import {
  WrapperPoular,
  List,
  PopularTitle,
  Item,
  StyledLink,
  ImgWrapper,
  TextWrapper,
  ItemTitle,
  ItemDescription,
} from './PopularRecipe.styled';


const PopularRecipe = () => {
  return (
    <WrapperPoular>
      <PopularTitle>Popular recipe</PopularTitle>
      {popularArray.length > 0 && (
        <List>
          {popularArray.map(({ _id, thumb, instructions, title }) => {
            return (
              <Item key={_id}>
                <StyledLink to={`/recipe/${_id}`}>
                  <ImgWrapper>
                    <img src={thumb} alt={title} />
                  </ImgWrapper>
                  <TextWrapper>
                    <ItemTitle>
                      {title.length > 30 ? title.slice(0, 35) + '...' : title}
                    </ItemTitle>
                    <ItemDescription>
                      {instructions.slice(0, 80)}...
                    </ItemDescription>
                  </TextWrapper>
                </StyledLink>
              </Item>
            );
          })}
        </List>
      )}
    </WrapperPoular>
  );
};

export default PopularRecipe;
