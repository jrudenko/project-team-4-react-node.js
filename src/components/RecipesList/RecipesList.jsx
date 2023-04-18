import { Thumb, Label, StyledLink, Image } from './RecipesList.styled';

export default function RecipesList({ recipes }) {
  return (
    <ul>
      {recipes.map(({ id, thumb, title }) => (
        <li key={id}>
          <StyledLink to={`recipe/${id}`}>
            <Thumb>
              <Image src={thumb} alt={title} loading="lazy" />
              <Label>{title}</Label>
            </Thumb>
          </StyledLink>
        </li>
      ))}
    </ul>
  );
}
