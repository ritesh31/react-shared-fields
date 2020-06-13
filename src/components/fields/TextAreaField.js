import React from 'react';
import PropTypes from 'prop-types';

import { ErrorLabel, FormField } from '../styledcomponents/Global';

const TextAreaField = (props) => {
  const fieldChange = (event) => {
    props.onChange({
      key: props.fieldKey,
      value: event.target.value,
    });
  };

  const {
    subType,
    name,
    label,
    value,
    error,
    readOnly,
    id,
    inputClass,
    rows,
    cols,
  } = props;
  return (
    <FormField className="form-group">
      <label htmlFor={id}>{label}</label>
      <textarea
        type={subType}
        name={name}
        onChange={(event) => fieldChange(event)}
        readOnly={readOnly}
        id={id}
        className={inputClass}
        rows={rows || 4}
        cols={cols || 50}
        style={{ width: '100%', padding: '10px' }}
        value={value}
      />
      <ErrorLabel>{error || ''}</ErrorLabel>
    </FormField>
  );
};

TextAreaField.propTypes = {
  fieldKey: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  inputClass: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  subType: PropTypes.string.isRequired,
  readOnly: PropTypes.bool.isRequired,
  rows: PropTypes.number.isRequired,
  cols: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
};

export default TextAreaField;
