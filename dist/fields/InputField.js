import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { ErrorLabel, Input, FormField } from "../styledcomponents/Global";

const InputField = props => {
  const [formValue, setFormValue] = useState("");
  const {
    subType,
    name,
    label,
    value,
    error,
    readOnly,
    id,
    inputClass,
    minValue,
    editable,
    setIsEditing,
    fieldKey,
    onChange,
    question
  } = props;
  useEffect(() => {
    setFormValue(value);
  }, [value]);

  const fieldChange = event => {
    if (editable) {
      setFormValue(event.target.value);
    } else {
      onChange({
        key: fieldKey,
        value: event.target.value
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

  return /*#__PURE__*/React.createElement(FormField, {
    editable: editable,
    className: "form-group"
  }, question ? /*#__PURE__*/React.createElement("div", {
    className: "label"
  }, " ", label) : /*#__PURE__*/React.createElement("label", {
    htmlFor: id
  }, label), /*#__PURE__*/React.createElement(Input, {
    type: subType,
    name: name,
    value: editable ? formValue : value,
    onChange: event => fieldChange(event),
    readOnly: readOnly,
    id: id,
    className: inputClass,
    min: minValue || 0,
    editable: editable
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
  })) : "", /*#__PURE__*/React.createElement(ErrorLabel, null, error || ""));
};

InputField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  subType: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  inputClass: PropTypes.string.isRequired,
  minValue: PropTypes.number,
  readOnly: PropTypes.bool,
  editable: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  setIsEditing: PropTypes.func.isRequired,
  fieldKey: PropTypes.string.isRequired,
  question: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]).isRequired
};
InputField.defaultProps = {
  error: "",
  question: false,
  editable: false,
  readOnly: false,
  minValue: null,
  inputClass: "",
  value: "",
  name: ""
};
export default InputField;