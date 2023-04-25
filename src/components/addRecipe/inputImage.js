import React from 'react';

const ImageUploadField = ({ field, form }) => {
  const handleImageChange = e => {
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      // remove the old image if it exists
      if (form.values.imagePreviewUrl) {
        URL.revokeObjectURL(form.values.imagePreviewUrl);
      }

      form.setFieldValue(field.name, file);
      form.setFieldValue('imagePreviewUrl', URL.createObjectURL(file));
    };
    reader.readAsDataURL(file);
  };

  // const { value } = field || {};
  const imagePreviewUrl = form?.values?.imagePreviewUrl;

  return (
    <label htmlFor="image" style={{ maxWidth: '300px' }}>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {imagePreviewUrl && <img src={imagePreviewUrl} alt="preview" />}
    </label>
  );
};

export default ImageUploadField;
