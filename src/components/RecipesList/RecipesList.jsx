import {
  Thumb,
  Label,
  StyledLink,
  Image,
  List,
  ListWrapper,
  TextBox,
} from './RecipesList.styled';

export default function RecipesList({ recipes }) {
  return (
    <ListWrapper>
      <List>
        {recipes.map(({ _id, thumb, title }) => (
          <li key={_id.$oid}>
            <StyledLink to={`recipe/${_id.$oid}`}>
              <Thumb>
                <Image src={thumb} alt={title} loading="lazy" />
                <TextBox>
                  <Label>{title}</Label>
                </TextBox>
              </Thumb>
            </StyledLink>
          </li>
        ))}
      </List>
    </ListWrapper>
  );
}
