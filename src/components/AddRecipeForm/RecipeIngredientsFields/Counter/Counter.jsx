import PropTypes from 'prop-types';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { Container, Button, Value } from './Counter.styled';

export const Counter = ({ value, handleDecrement, handleIncrement }) => {
  return (
    <Container>
      <Button
        type="button"
        aria-label="button-decrement"
        value={value}
        disabled={value <= 1}
        onClick={handleDecrement}
      >
        <FaMinus />
      </Button>
      <Value>{value}</Value>
      <Button
        type="button"
        aria-label="button-increment"
        onClick={handleIncrement}
      >
        <FaPlus />
      </Button>
    </Container>
  );
};

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  handleDecrement: PropTypes.func.isRequired,
  handleIncrement: PropTypes.func.isRequired,
};
