import { Thumb, Label } from './RecipesList.styled';

export default function RecipesList({ recipes }) {
  return (
    <ul>
      {recipes.map(({ id, thumb, title }) => (
        <li key={id}>
          <a href={'http'}>
            <Thumb>
              <img src={thumb} alt={title} loading="lazy" />
              <Label>{title}</Label>
            </Thumb>
          </a>
        </li>
      ))}
    </ul>
  );
}
