import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import {
  Wrapper,
  TableData,
  Container,
  Title,
  List,
  Item,
  RecipeImage,
  IngredientTitle,
  MeasureInfo,
  ContainerCheckbox,
  Checkbox,
  Icon,
  Box,
} from './RecipeInngredientsList.styled';
import { BsCheckLg } from 'react-icons/bs';
import {
  addShoppingItem,
  deleteShoppingItem,
} from '../../service/API/shoppingList';

const RecipeInngredientsList = ({ ingredients, ingList }) => {
  const [allIngredients, setAllIngredients] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (ingredients && ingList) {
      const mergeArray = ingredients.map(item1 => {
        const { ttl, thb } = ingList.find(item2 => {
          return item2._id === item1.id;
        });
        return { ...item1, ttl: ttl, thb: thb };
      });
      setAllIngredients(mergeArray);
    }
  }, [ingredients, ingList]);

  const hendlerToggle = async (e, ing) => {
    if (isLoading) return;
    setIsLoading(true);
    const bodyPost = {
      iid: ing.id,
      number: ing.measure,
    };

    if (e.target.checked) {
      try {
        await addShoppingItem(bodyPost);
        setIsLoading(false);
        toast.success(`${ing.ttl} add to shopping list`);
      } catch (err) {
        toast.error('Something went wrong by adding ingredients');
      }
    }
    if (!e.target.checked) {
      try {
        await deleteShoppingItem(bodyPost);
        setIsLoading(false);
        toast.success(`${ing.ttl} remove from shopping list`);
      } catch (err) {
        toast.error('Something went wrong by removing ingredients');
      }
    }
    setIsLoading(false);
  };

  return (
    allIngredients && (
      <Wrapper>
        <TableData>
          <Title>Ingredients</Title>
          <Container>
            <Title>Number</Title>
            <Title>Add to list</Title>
          </Container>
        </TableData>
        <List>
          {allIngredients.map(ing => (
            <Item key={ing.id}>
              <Box>
                <RecipeImage src={ing.thb} alt={ing.ttl} />
                <IngredientTitle>{ing.ttl}</IngredientTitle>
              </Box>
              <Container>
                <MeasureInfo>{ing.measure}</MeasureInfo>
                <ContainerCheckbox>
                  <Checkbox
                    type="checkbox"
                    onChange={e => {
                      hendlerToggle(e, ing);
                    }}
                    name={ing.id}
                  />
                  <Icon>
                    <BsCheckLg />
                  </Icon>
                </ContainerCheckbox>
              </Container>
            </Item>
          ))}
        </List>
      </Wrapper>
    )
  );
};

export default RecipeInngredientsList;
