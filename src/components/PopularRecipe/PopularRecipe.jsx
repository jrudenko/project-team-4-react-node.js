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
import {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getPopularList} from '../../redux/popular/popularOperation';
import {selectPopular} from '../../redux/popular/popularSelectors';



const PopularRecipe = () => {

  const dispatch = useDispatch();
  const PopularRecipe = useSelector(selectPopular);
  
  console.log(`This POPULAR`, PopularRecipe)

  useEffect(() => {
dispatch(getPopularList())
  }, [dispatch])

  return (
    <WrapperPoular>
      <PopularTitle>Popular recipe</PopularTitle>
      {popularArray.length > 0 && (
        <List>
          {PopularRecipe.map(({ _id, thumb, instructions, title }) => {
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
