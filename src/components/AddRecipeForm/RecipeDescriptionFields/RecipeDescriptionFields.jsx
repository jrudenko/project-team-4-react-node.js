import { useState } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import placeholder from 'images/mobile/form-add-placeholder.png';
import { Loader } from 'components/Loader/Loader';
import { Box } from 'components/Box';
import { IoMdRemoveCircle } from 'react-icons/io';
import { FormErrorMsg } from '../FormErrorMsg/FormErrorMsg';
import {
  FieldsetDesc,
  LabelFile,
  InputFile,
  ThumbImg,
  RemoveFileBtn,
  Label,
  InputText,
  DisabledInput,
  Placeholder,
  StyledSelect,
} from './RecipeDescriptionFields.styled';

export const RecipeDescriptionFields = ({
  setFieldValue,
  values,
  optionsCategory,
  optionsTimes,
}) => {
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileUpload = async e => {
    const selectedFile = e.target.files[0];
    setLoading(true);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
      setLoading(false);
    };
    reader.readAsDataURL(selectedFile);
    setFieldValue('file', selectedFile);
  };

  const removeFileUpload = () => {
    setPreview(null);
    setFieldValue('file', '');
  };

  return (
    <>
      <FieldsetDesc>
        <Box mb={30}>
          <LabelFile isLoading={loading}>
            {loading ? (
              <Loader />
            ) : (
              <ThumbImg
                src={preview || placeholder}
                width="280"
                height="270"
                alt="preview"
              />
            )}
            {preview && (
              <RemoveFileBtn onClick={removeFileUpload}>
                <IoMdRemoveCircle />{' '}
              </RemoveFileBtn>
            )}

            {!preview && (
              <InputFile
                type="file"
                accept="image/*,.png, .jpeg,.gif,.web"
                name="file"
                onChange={handleFileUpload}
              />
            )}
          </LabelFile>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          width="100%"
        >
          <Label>
            <InputText
              type="text"
              name="title"
              placeholder="Enter item title"
            />
            <FormErrorMsg name="title" position="left" />
          </Label>
          <Label>
            <InputText
              type="text"
              name="about"
              placeholder="Enter about recipe"
            />
            <FormErrorMsg name="about" position="left" />
          </Label>
          <Label>
            <DisabledInput>
              <Placeholder>Category</Placeholder>
              <Field name="category">
                {({ field }) => (
                  <StyledSelect
                    options={optionsCategory}
                    defaultValue={{ value: 'breakfast', label: 'Breakfast' }}
                    isSearchable={false}
                    className="сustom-select-container"
                    classNamePrefix="сustom-select"
                    onChange={option => setFieldValue(field.name, option.value)}
                    zIndex={110}
                  />
                )}
              </Field>
            </DisabledInput>
          </Label>
          <Label>
            <DisabledInput>
              <Placeholder>Cooking time</Placeholder>
              <Field name="time">
                {({ field }) => (
                  <StyledSelect
                    options={optionsTimes}
                    defaultValue={optionsTimes.find(
                      ({ value }) => value === values.time
                    )}
                    isSearchable={false}
                    className="сustom-select-container"
                    classNamePrefix="сustom-select"
                    onChange={option => setFieldValue(field.name, option.value)}
                    zIndex={105}
                  />
                )}
              </Field>
            </DisabledInput>
          </Label>
        </Box>
      </FieldsetDesc>
    </>
  );
};

RecipeDescriptionFields.propTypes = {
  setFieldValue: PropTypes.func.isRequired,
  values: PropTypes.object,
  optionsCategory: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ).isRequired,
  optionsTimes: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ).isRequired,
};
