import {useState, useEffect} from 'react'
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
    import { BiCheckSquare } from 'react-icons/bi';


const RecipeInngredientsList = ({ingredients, ingList}) => {
    console.log(`ingredients`, ingredients)
    console.log(`ingList`, ingList)
const [allIngredients, setAllIngredients] = useState(null)

const a = ingList?.find(e => e._id === '640c2dd963a319ea671e372e')

console.log(`AAAA`, a)

useEffect(() => {
    if (ingredients && ingList) {
        const mergeArray = ingredients.map(item1 => {
            const {ttl, thb} = ingList.find(item2 => { return item2._id === item1.id})
            return {...item1, ttl:ttl, thb:thb}
        })
        setAllIngredients(mergeArray)
        
    }
}, [ingredients, ingList])


console.log(`allIngredients`, allIngredients)


    const hendler = (e) => {
console.log(e)
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
                    checked={true}
                    onChange={hendler}
                    name="CheckboxName"
                  />
                  <Icon>
                    <BiCheckSquare />
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