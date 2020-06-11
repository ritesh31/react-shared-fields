import React from "react";
import InputRange from "react-input-range";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FormField } from "../../styledcomponents/Global";
import "react-input-range/lib/css/index.css";

const InputRangeField = (props) => {
  const {
    value,
    minValue,
    maxValue,
    label,
    onChange,
    fieldKey,
    formatLabel,
    step,
    id,
  } = props;

  const fieldChange = (selectedValue) => {
    onChange({
      key: fieldKey,
      value: selectedValue,
    });
  };
  return (
    <RangeFormField className="form-group">
      <label htmlFor={id}>{label}</label>
      <div className="row">
        <div className="col-9">
          <InputRange
            value={value}
            onChange={fieldChange}
            minValue={minValue}
            maxValue={maxValue}
            step={step}
            id={id}
          />
        </div>
        <div className="col-2">
          <div className="average"> {formatLabel(value)}</div>
        </div>
      </div>
    </RangeFormField>
  );
};
InputRangeField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number,
  maxValue: PropTypes.number.isRequired,
  minValue: PropTypes.number.isRequired,
  step: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  fieldKey: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  formatLabel: PropTypes.func.isRequired,
};

InputRangeField.defaultProps = {
  value: 0,
  step: null,
};

const RangeFormField = styled(FormField)`
  label {
    bottom: 0px;
    top: -10px;
    margin: 0px;
    margin-bottom: 0.5rem;
  }
  .col-2 {
    padding-left: 0px;
  }
  .average {
    padding-left: 0px !important;
  }
`;

export default InputRangeField;
