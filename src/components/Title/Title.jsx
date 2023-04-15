import { TitleConteiner } from './Title.styled';

const Title = ({ children }) => {  

  return (
    <TitleConteiner>
      <h2>{children}</h2>
    </TitleConteiner>
  );
};

export default Title;