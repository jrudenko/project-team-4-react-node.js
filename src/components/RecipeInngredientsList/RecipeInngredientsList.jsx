import {useState, useEffect} from 'react'
import { toast } from 'react-toastify';
import {Wrapper, TableData,
    Container,
    Title,
    List,
    Item,
    RecipeImage,
    IngredientTitle,
    MeasureInfo,
    ContainerCheckbox,
    Checkbox,
    Icon, Box} from './RecipeInngredientsList.styled'
    import { BsCheckLg } from 'react-icons/bs';
    import {
      addShoppingItem,
      deleteShoppingItem,
    } from '../../service/API/shoppingList';


const RecipeInngredientsList = ({ingredients, ingList}) => {
   
const [allIngredients, setAllIngredients] = useState(null)
const [isLoading, setIsLoading] = useState(false);


useEffect(() => {
    if (ingredients && ingList) {
        const mergeArray = ingredients.map(item1 => {
            const {ttl, thb} = ingList.find(item2 => { return item2._id === item1.id})
            return {...item1, ttl:ttl, thb:thb}
        })
        setAllIngredients(mergeArray)
        
    }
}, [ingredients, ingList])


    const hendlerToggle = async (e, ing) => {
      console.log(`isLoading`, isLoading)
      if (isLoading) return;
      setIsLoading(true);
      const body = {
        iid: ing.id,
        ttl: ing.ttl,
        thb: ing.thb,
        number: ing.measure
      }
      if (e.target.checked) {
        try {
        const a =  await addShoppingItem(body);
          setIsLoading(false);
          toast.success(`${ing.ttl} add to shopping list`)

          console.log(`AAAA`, a)
        } catch (error) {
          console.log(error)
        }
      }
      setIsLoading(false);
console.log(ing.id)
    }

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
      { allIngredients.map (ing => (
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
                    
                    onChange={e => {hendlerToggle(e, ing)}}
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
        {/* {error && <ShowToastError msg="Failed to add to shopping cart" />} */}
      </Wrapper>
    )
    
 )
}

export default RecipeInngredientsList
