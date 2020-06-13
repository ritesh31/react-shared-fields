function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState } from "react";
import PropTypes from "prop-types"; // Components

import InputField from "./fields/InputField";
import ChoiceField from "./fields/ChoiceField";
import NumberField from "./fields/NumberField";
import DatePicker from './fields/DatePicker'; // import TypeAheadField from './TypeAhead';
// import FileUploader from './FileUploader';

import TextAreaField from './fields/TextAreaField';
import InputRangeField from "./fields/InputRange";
import ChecklistField from './fields/ChecklistField';
import LabelField from './fields/LabelField';

const Field = props => {
  const {
    type,
    editable,
    isLabel
  } = props;
  const [isEditing, setIsEditing] = useState(null);

  if (editable && !isEditing || isLabel && !isEditing) {
    return /*#__PURE__*/React.createElement(LabelField, _extends({
      setIsEditing: setIsEditing
    }, props));
  }

  switch (type) {
    case "input":
      return /*#__PURE__*/React.createElement(InputField, _extends({}, props, {
        setIsEditing: setIsEditing
      }));

    case "choices":
      return /*#__PURE__*/React.createElement(ChoiceField, _extends({}, props, {
        setIsEditing: setIsEditing
      }));

    case "number":
      return /*#__PURE__*/React.createElement(NumberField, _extends({}, props, {
        setIsEditing: setIsEditing
      }));
    // case 'date':
    //   return <DatePicker {...props} setIsEditing={setIsEditing} />;

    case 'textarea':
      return /*#__PURE__*/React.createElement(TextAreaField, _extends({}, props, {
        setIsEditing: setIsEditing
      }));
    // case "input-range":
    //   return <InputRangeField {...props} setIsEditing={setIsEditing} />;

    case 'checklist':
      return /*#__PURE__*/React.createElement(ChecklistField, _extends({}, props, {
        setIsEditing: setIsEditing
      }));

    default:
      return null;
  }
};

Field.propTypes = {
  type: PropTypes.string.isRequired,
  editable: PropTypes.bool,
  isLabel: PropTypes.bool
};
Field.defaultProps = {
  isLabel: false,
  editable: false
};
export default Field;