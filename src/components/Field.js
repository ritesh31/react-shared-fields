import React, { useState } from "react";
import PropTypes from "prop-types";

// Components
import InputField from "./fields/InputField";
// import ChoiceField from "./fields/ChoiceField";
import NumberField from "./fields/NumberField";
// import DatePicker from './DatePicker';
// import TypeAheadField from './TypeAhead';
// import FileUploader from './FileUploader';
// import TextAreaField from './TextAreaFeild';
import InputRangeField from "./fields/InputRange";
// import ChecklistField from './ChecklistField';
import LabelField from './fields/LabelField';

const Field = (props) => {
  const { type, editable, isLabel } = props;
  const [isEditing, setIsEditing] = useState(null);
  if ((editable && !isEditing) || (isLabel && !isEditing)) {
    return <LabelField setIsEditing={setIsEditing} {...props} />;
  }
  switch (type) {
    case "input":
      return <InputField {...props} setIsEditing={setIsEditing} />;
    // case "choices":
    //   return <ChoiceField {...props} setIsEditing={setIsEditing} />;
    case "number":
      return <NumberField {...props} setIsEditing={setIsEditing} />;
    // case 'date':
    //   return <DatePicker {...props} setIsEditing={setIsEditing} />;
    // case 'typeahead':
    //   return <TypeAheadField {...props} setIsEditing={setIsEditing} />;
    // case 'file':
    //   return <FileUploader {...props} setIsEditing={setIsEditing} />;
    // case 'textarea':
    //   return <TextAreaField {...props} setIsEditing={setIsEditing} />;
    case "input-range":
      return <InputRangeField {...props} setIsEditing={setIsEditing} />;
    // case 'checklist':
    //   return <ChecklistField {...props} setIsEditing={setIsEditing} />;
    default:
      return null;
  }
};

Field.propTypes = {
  type: PropTypes.string.isRequired,
  editable: PropTypes.bool,
  isLabel: PropTypes.bool,
};
Field.defaultProps = {
  isLabel: false,
  editable: false,
};
export default Field;
