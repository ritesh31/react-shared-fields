import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";
/* CSS Theme */

import styled from "styled-components";
import { ErrorLabel, FormField } from "../styledcomponents/Global";

const NumberField = props => {
  const [formValue, setFormValue] = useState("");
  const {
    label,
    name,
    value,
    error,
    subType,
    id,
    format,
    prefix,
    inputClass,
    thousandSeparator,
    minValue,
    onChange,
    fieldKey,
    editable,
    setIsEditing,
    decimalScale,
    readOnly
  } = props;
  useEffect(() => {
    setFormValue(value);
  }, [value]);

  const fieldChange = event => {
    if (editable) {
      setFormValue(event.target.value.replace(/[^0-9.]/g, ""));
    } else {
      onChange({
        key: fieldKey,
        value: event.target.value.replace(/[^0-9.]/g, "")
      });
    }
  };

  const setEditingValue = () => {
    setIsEditing(false);
    onChange({
      key: fieldKey,
      value: formValue
    });
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FormField, {
    className: "form-group"
  }, /*#__PURE__*/React.createElement(NumFieldBox, null, /*#__PURE__*/React.createElement("label", {
    htmlFor: id
  }, label), /*#__PURE__*/React.createElement(NumberFormat, {
    className: `form-control ${inputClass}`,
    type: subType === "currency" ? "text" : subType,
    format: format,
    name: name,
    prefix: prefix,
    allowNegative: false,
    autoComplete: "off",
    value: editable ? formValue : value,
    thousandSeparator: subType === "currency" ? true : thousandSeparator,
    min: minValue || 0,
    onChange: event => fieldChange(event),
    decimalScale: decimalScale || null,
    readOnly: readOnly
  }), editable ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "35px",
      right: "20px"
    },
    className: "pull-right"
  }, /*#__PURE__*/React.createElement("i", {
    onClick: setEditingValue,
    className: "fa fa-check-circle fa-2x mr-2",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("i", {
    onClick: () => setIsEditing(false),
    className: "fa fa-times-circle fa-2x",
    "aria-hidden": "true"
  })) : "", /*#__PURE__*/React.createElement(ErrorLabel, null, error || ""))));
};

NumberField.propTypes = {
  fieldKey: PropTypes.string.isRequired,
  minValue: PropTypes.number,
  thousandSeparator: PropTypes.bool,
  inputClass: PropTypes.string,
  format: PropTypes.string,
  subType: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  // placeholder: PropTypes.string,
  prefix: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func.isRequired,
  error: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.string]),
  editable: PropTypes.bool,
  setIsEditing: PropTypes.func.isRequired,
  decimalScale: PropTypes.number,
  readOnly: PropTypes.bool
};
NumberField.defaultProps = {
  readOnly: false,
  decimalScale: 0,
  editable: false,
  error: "",
  value: "",
  name: "",
  prefix: "",
  inputClass: "",
  thousandSeparator: false,
  minValue: null,
  format: null
};
export const NumFieldBox = styled.div`
  width: 15%;
  input {
    padding: 1.2rem 1rem 0.65rem 1rem;
  }
`;
export default NumberField;