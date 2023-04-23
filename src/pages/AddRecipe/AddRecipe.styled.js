import styled from 'styled-components';

const StyledDiv = styled.div`
  margin: 30px;

  h1 {
    font-size: 2rem;
    margin-bottom: 20px;
  }

  label {
    font-size: 1.2rem;
    margin-top: 10px;
  }

  input,
  textarea {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
  }

  .error {
    color: red;
    font-size: 0.8rem;
    margin-top: 5px;
  }

  button[type='submit'] {
    margin-top: 20px;
    width: 100%;
    background-color: #3b5998;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 1.2rem;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export default StyledDiv;
