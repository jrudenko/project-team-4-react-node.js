import React from 'react';
import { useField } from 'formik';

const FormikImageUpload = ({ name, previewSize = '150px', ...rest }) => {
  const [field, meta, helpers] = useField(name);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      helpers.setValue(reader.result);
    };
  };

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const inputRef = React.useRef();

  return (
    <div
      style={{
        backgroundImage: `url(${field.value})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
              height: '100%',
        //  border: '1px solid rgba(51, 51, 51, 0.3)',
            borderRadius: '18px',
      }}
      onClick={handleImageClick}
    >
      <input
        type="file"
        ref={inputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
        {...rest}
      />
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </div>
  );
};

export default FormikImageUpload;