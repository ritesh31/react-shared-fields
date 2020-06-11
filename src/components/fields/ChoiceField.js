import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// import MenuItem from "@material-ui/core/MenuItem";
// import Select from "@material-ui/core/Select";
// import Chip from "@material-ui/core/Chip";
// import CancelIcon from "@material-ui/icons/Cancel";

/* CSS Theme */
import styled from "styled-components";
import { ErrorLabel, FormField } from "../../styledcomponents/Global";

const ChoiceField = (props) => {
  const [formValue, setFormValue] = useState("");
  const {
    label,
    placeholder,
    name,
    options,
    value,
    subType,
    error,
    id,
    disabled,
    question,
    keyLabel,
    keyValue,
    fieldKey,
    onChange,
    editable,
    setIsEditing,
  } = props;
  useEffect(() => {
    setFormValue(value);
  }, [value]);

  const fieldChange = (event) => {
    if (editable) {
      setFormValue(event.target.value);
    } else if (subType === "multiChoice") {
      onChange({
        key: fieldKey,
        value: event.target.value,
      });
    } else {
      onChange({
        key: fieldKey,
        value: event.target.value,
      });
    }
  };

  const getOptionLabel = (option) => {
    return option[keyLabel];
  };

  const getOptionValue = (option) => {
    return option[keyValue];
  };

  const getOptions = () => {
    return options.map((option) => {
      return (
        <MenuItem key={getOptionValue(option)} value={getOptionValue(option)}>
          {getOptionLabel(option)}
        </MenuItem>
      );
    });
  };
  const onDelete = (chipToDelete) => {
    if (editable) {
      setFormValue([...value.filter((item) => item !== chipToDelete)]);
    } else {
      onChange({
        key: fieldKey,
        value: value.filter((item) => item !== chipToDelete),
      });
    }
  };
  const renderValue = (selected) => {
    if (subType === "multiChoice") {
      return (
        <div style={{ display: "grid", margin: "-7px 0px" }}>
          {selected.map((item) => (
            <Chip
              key={item}
              label={item}
              style={{ marginBottom: 1 }}
              onDelete={() => onDelete(item)}
              deleteIcon={
                <div style={{ position: "absolute", right: "42px" }}>
                  <CancelIcon />
                </div>
              }
            />
          ))}
        </div>
      );
    }
    const selectedValue = options.find(
      (option) => getOptionValue(option) === selected
    );
    return selected ? getOptionLabel(selectedValue) : "";
  };
  const setEditingValue = () => {
    setIsEditing(false);
    onChange({
      key: fieldKey,
      value: formValue,
    });
  };
  const getFieldLabel = () => {
    if (label) {
      if (question) {
        return <span> {label} </span>;
      }
      return <label htmlFor={id}>{label}</label>;
    }
    return "";
  };
  const getFieldValue = () => {
    if (editable) {
      return formValue;
    }
    if (subType === "multiChoice") {
      return value || [];
    }
    return value || "";
  };
  return (
    <FormField className="form-group">
      <SelectPanel editable={editable} multiple={subType === "multiChoice"}>
        {getFieldLabel()}

        <Select
          className="form-control"
          name={name}
          id={id}
          placeholder={placeholder}
          value={getFieldValue()}
          onChange={(event) => fieldChange(event)}
          multiple={subType === "multiChoice"}
          renderValue={renderValue}
          disabled={disabled}
        >
          {getOptions()}
        </Select>
        {editable ? (
          <div
            style={{ position: "absolute", top: "35px", right: "20px" }}
            className="pull-right"
          >
            <i
              onClick={setEditingValue}
              className="fa fa-check-circle fa-2x mr-2"
              aria-hidden="true"
            />
            <i
              onClick={() => setIsEditing(false)}
              className="fa fa-times-circle fa-2x"
              aria-hidden="true"
            />
          </div>
        ) : (
          ""
        )}
        <ErrorLabel> {error || ""}</ErrorLabel>
      </SelectPanel>
    </FormField>
  );
};

ChoiceField.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  subType: PropTypes.string,
  keyValue: PropTypes.string,
  keyLabel: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  fieldKey: PropTypes.string.isRequired,
  error: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),
  question: PropTypes.bool,
  editable: PropTypes.bool,
  disabled: PropTypes.bool,
  setIsEditing: PropTypes.func.isRequired,
};
ChoiceField.defaultProps = {
  name: "",
  value: "",
  subType: "",
  keyValue: "value",
  keyLabel: "label",
  error: "",
  question: false,
  disabled: false,
  editable: false,
};
export const SelectPanel = styled.div`
  .css-g1d714-ValueContainer {
    padding: 35px 0 1px 15px;
    font-size: 14px;
  }
  .css-b8ldur-Input {
    margin: -22px 0 0 0;
  }
  .css-1wa3eu0-placeholder {
    top: 24px;
    font-size: 14px;
  }
  label {
    z-index: 1;
  }
  .MuiInputBase-root {
    &:before {
      border-bottom: none;
    }
    &:hover,
    &:after {
      border-bottom: none;
    }
  }
  .MuiInput-root {
    height: ${(props) =>
      props.multiple ? "auto" : "calc(1.5em + 1.3rem + 2px)"};
    width: ${(props) => (props.editable ? "calc(100% - 65px)" : "100%")};
  }
`;

export default ChoiceField;
