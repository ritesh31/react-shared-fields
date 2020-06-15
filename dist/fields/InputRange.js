import React from "react";
import InputRange from "react-input-range";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FormField } from "../styledcomponents/Global";
import "react-input-range/lib/css/index.css";

const InputRangeField = props => {
  const {
    value,
    minValue,
    maxValue,
    label,
    onChange,
    fieldKey,
    formatLabel,
    step,
    id
  } = props;

  const fieldChange = selectedValue => {
    onChange({
      key: fieldKey,
      value: selectedValue
    });
  };

  return /*#__PURE__*/React.createElement(RangeFormField, {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: id
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-9"
  }, /*#__PURE__*/React.createElement(InputRange, {
    value: value,
    onChange: fieldChange,
    minValue: minValue,
    maxValue: maxValue // step={step}
    ,
    id: id
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "average"
  }, " ", formatLabel(value)))));
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
  formatLabel: PropTypes.func.isRequired
};
InputRangeField.defaultProps = {
  value: 0,
  step: null
};
const RangeFormField = styled(FormField)`
  width: 50%;
  margin-top: 30px;
  padding: 0px 10px;
  label {
    bottom: 0px;
    top: -10px;
    margin: 0px;
    margin-bottom: 0.5rem;
  }
  .col-2 {
    padding-left: 0px;
  }
  .col-9 {
    margin-top: 25px;
    padding-left: 5px;
  }
  .average {
    padding-left: 0px !important;
  }
`;
export default InputRangeField;