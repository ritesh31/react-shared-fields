import React from 'react';
import PropTypes from 'prop-types';

const ChecklistField = (props) => {
  const { value, options, label, fieldKey, onChange, id } = props;

  const fieldChange = (option) => {
    let values = value ? value.split(',') : [];
    if (values.includes(option)) {
      values.splice(values.indexOf(option), 1);
    } else {
      values = [...values, option];
    }
    onChange({
      key: fieldKey,
      value: values.join(','),
    });
  };
  const getOptions = () => {
    return options.map((option, index) => {
      return (
        <div key={`${id}-${option}`} id={id} className="collapse mt-2">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id={`${id}-${index}`}
              onChange={() => fieldChange(option)}
              checked={value.split(',').indexOf(option) !== -1}
            />
            <label className="custom-control-label" htmlFor={`${id}-${index}`}>
              {option}
            </label>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="dropdown-check text-left  mb-3 mt-3">
      <div
        className="collapse-btn"
        data-toggle="collapse"
        data-target={`#${id}`}
      >
        <h3>
          {label}
          <i className="fa fa-sort-desc ml-1" aria-hidden="true" />
        </h3>
      </div>
      {getOptions()}
    </div>
  );
};

ChecklistField.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.objectOf(PropTypes.any),
    ])
  ).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  fieldKey: PropTypes.string.isRequired,
};

ChecklistField.defaultProps = {
  value: '',
};
export default ChecklistField;
