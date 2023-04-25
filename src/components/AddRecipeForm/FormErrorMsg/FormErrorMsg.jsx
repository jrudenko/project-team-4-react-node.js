import PropTypes from 'prop-types';
import { ErrorMessage } from 'formik';
import { ErrorText } from './FormErrorMsg.styled';

export const FormErrorMsg = ({ name, position }) => {
  return (
    <ErrorMessage
      name={name}
      render={msg => <ErrorText position={position}>{msg}</ErrorText>}
    />
  );
};

FormErrorMsg.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string,
};
