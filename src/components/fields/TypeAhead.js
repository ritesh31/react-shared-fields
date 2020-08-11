import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { AsyncTypeahead, Typeahead } from "react-bootstrap-typeahead";

import { ErrorLabel, FormField } from "../theme/css/Global";
import "react-bootstrap-typeahead/css/Typeahead.css";

const TypeAheadField = (props) => {
  const [formValue, setFormValue] = useState("");
  const {
    label,
    value,
    error,
    id,
    typeAheadData,
    options,
    placeholder,
    subType,
    keyLabel,
    minLength,
    multiple,
    allowNew,
    onChange,
    fieldKey,
    keyValue,
    editable,
    setIsEditing,
    clearButton,
    question,
  } = props;
  useEffect(() => {
    setFormValue(value);
  }, [value]);
  const getOptionValue = (option) => {
    if (
      allowNew &&
      Object.prototype.hasOwnProperty.call(option, "customOption")
    ) {
      return option.Name;
    }
    if (typeof option === "string") return option;
    return option[keyValue];
  };

  const fieldChange = (event) => {
    if (subType === "multiChoice" || multiple) {
      const newValue = event.map((option) => getOptionValue(option));
      if (editable) {
        setFormValue(newValue);
      } else {
        onChange({
          key: fieldKey,
          value: newValue,
        });
      }
    } else if (editable) {
      setFormValue(event.length === 1 ? getOptionValue(event[0]) : "");
    } else {
      onChange({
        key: fieldKey,
        value: event.length === 1 ? getOptionValue(event[0]) : "",
      });
    }
  };

  const getSelected = () => {
    const selectedValue = editable ? formValue : value;
    if (subType === "multiChoice" || multiple) {
      if (options.length !== 0 && subType !== "async") {
        let selected = [];
        if (selectedValue) {
          selected = options.filter((option) =>
            selectedValue.includes(getOptionValue(option))
          );
        }
        return selected;
      }
      if (typeof selectedValue === typeof "String") {
        if (selectedValue) {
          return [selectedValue];
        }
        return [];
      }
      return selectedValue;
    }
    if (
      subType === "async" &&
      (selectedValue !== undefined || selectedValue !== "") &&
      (!options || options.length === 0)
    ) {
      if (selectedValue) {
        if (
          typeof selectedValue === typeof {} ||
          typeof selectedValue === typeof []
        ) {
          return selectedValue;
        }
        return [selectedValue];
      }
      return [];
    }
    const selected = options.find(
      (option) => getOptionValue(option) === selectedValue
    );
    return selected ? [selected] : [];
  };
  const setEditingValue = () => {
    setIsEditing(false);
    onChange({
      key: fieldKey,
      value: formValue,
    });
  };

  const getlabel = () => {
    if (question) {
      return <div className="label"> {label}</div>;
    }
    return <Label htmlFor={id}>{label}</Label>;
  };
  const Component = subType === "async" ? AsyncTypeahead : Typeahead;
  return (
    <FormField className="form-group">
      {label ? getlabel() : ""}
      <SelectPanel editable={editable}>
        <Component
          id={id}
          minLength={minLength}
          onSearch={typeAheadData.fun}
          isLoading={typeAheadData.loader}
          options={options}
          labelKey={keyLabel || "label"}
          valueKey={getOptionValue}
          selected={getSelected()}
          onChange={fieldChange}
          placeholder={placeholder}
          multiple={subType === "multiChoice" || multiple}
          useCache={false}
          allowNew={allowNew}
          clearButton={clearButton}
        />
      </SelectPanel>
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
      <ErrorLabel>{error || ""}</ErrorLabel>
    </FormField>
  );
};

TypeAheadField.propTypes = {
  setIsEditing: PropTypes.func.isRequired,
  multiple: PropTypes.bool,
  keyLabel: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.any).isRequired,
  typeAheadData: PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.any),
    PropTypes.func,
  ]).isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.objectOf(PropTypes.any),
    PropTypes.number,
  ]),
  subType: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  allowNew: PropTypes.bool,
  minLength: PropTypes.number,
  fieldKey: PropTypes.string.isRequired,
  keyValue: PropTypes.string,
  editable: PropTypes.bool,
  clearButton: PropTypes.bool,
  question: PropTypes.bool,
};

TypeAheadField.defaultProps = {
  minLength: 0,
  clearButton: false,
  question: false,
  editable: false,
  allowNew: false,
  error: "",
  value: "",
  multiple: false,
  label: "",
  subType: "",
  placeholder: "",
  keyLabel: "label",
  keyValue: "value",
};
const Label = styled.label`
  z-index: 1;
`;
const SelectPanel = styled.div`
  width: ${(props) => (props.editable ? "calc(100% - 65px)" : "100%")};
  .rbt-token {
    background-color: #f7f7f7;
  }
  .rbt-menu {
    min-width: 100%;
    width: auto !important;
  }
`;
export default TypeAheadField;
