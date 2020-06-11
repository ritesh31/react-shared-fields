import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import moment from 'moment';
import { FormField } from '../../styledcomponents/Global';

const numeral = require('numeral');

export default function LabelField(props) {
  const {
    label,
    value,
    editable,
    format,
    layout,
    setIsEditing,
    type,
    subType,
    prefix,
    suffix,
    keyLabel,
    logo,
    labelClass,
    multiple,
    editType,
  } = props;
  const getValue = () => {
    if (value) {
      switch (type) {
        case 'number':
          switch (subType) {
            case 'text':
              if (format) {
                let j = 0;
                let formattedValue = prefix || '';
                for (let i = 0; i < format.length; i += 1) {
                  if (format[i] === '#') {
                    formattedValue += value[j];
                    j += 1;
                  } else {
                    formattedValue += format[i];
                  }
                }
                formattedValue += suffix || '';
                return formattedValue;
              }

              return `${prefix || ''} ${numeral(value).format('0,0.00')} ${
                suffix || ''
              }`;
            case 'currency':
              return `$ ${numeral(value).format('0,0.00')}`;
            default:
              return value;
          }
        case 'text':
          return value;
        case 'typeahead':
          switch (subType) {
            case 'async':
            case 'multiChoice':
              if (typeof value[0] !== 'string') {
                const values = value.map((item) => item[keyLabel || 'label']);
                return values.join(', ');
              }
              return value.join(', ');
            default:
              return value;
          }
        case 'date':
          if (multiple) {
            const values = value.map((item) =>
              moment(item).format('MM/DD/YYYY')
            );
            return values.join(', ');
          }
          return moment(value).format('MM/DD/YYYY');
        default:
          return value;
      }
    }
    return 'N/A';
  };
  const onClick = () => {
    if (editable) {
      setIsEditing(true);
    }
  };
  return (
    <Field
      className="form-group"
      editable={editable}
      editType={editType}
      onClick={onClick}
    >
      {layout === 'inline' ? (
        <div className="label">
          {label} : <span>{getValue()}</span>
          {editable ? (
            <i
              onClick={() => setIsEditing(true)}
              className="fa fa-pencil fa-1x pull-right"
              aria-hidden="true"
            />
          ) : (
            ''
          )}
        </div>
      ) : (
        <Field.VerticalBox
          className={
            labelClass ? `${labelClass} vertical-align` : 'vertical-align'
          }
        >
          {logo ? (
            <Field.LogoBox>
              <Logo src={logo} />
            </Field.LogoBox>
          ) : (
            ''
          )}

          <Field.VerticalBox.Label className="label">
            <div>{label} :</div>
            <span>
              {getValue()}
              {editable ? (
                <i className="fa fa-pencil pl-3 fa-1x" aria-hidden="true" />
              ) : (
                ''
              )}
            </span>
          </Field.VerticalBox.Label>
        </Field.VerticalBox>
      )}
    </Field>
  );
}

const Field = styled(FormField)`
  i {
    display: none;
  }
  &:hover {
    cursor: ${(props) => (props.editable ? 'pointer' : 'auto')};
    i {
      display: inline-block;
    }
  }
  .label {
    margin-bottom: 5px !important;
  }
`;
LabelField.propTypes = {
  format: PropTypes.string,
  subType: PropTypes.string,
  label: PropTypes.string.isRequired,
  prefix: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.objectOf(PropTypes.any),
  ]),
  editable: PropTypes.bool.isRequired,
  setIsEditing: PropTypes.func.isRequired,
  layout: PropTypes.string,
  type: PropTypes.string.isRequired,
  suffix: PropTypes.string,
  keyLabel: PropTypes.string,
  labelClass: PropTypes.string,
  multiple: PropTypes.bool,
  logo: PropTypes.string,
  editType: PropTypes.string,
};

LabelField.defaultProps = {
  value: null,
  keyLabel: '',
  layout: '',
  logo: '',
  multiple: false,
  labelClass: '',
  suffix: '',
  prefix: '',
  subType: '',
  format: '',
  editType: '',
};
Field.VerticalBox = styled.div`
  &.box-layout {
    text-align: center;
    margin: 0 auto;
    border: 1px solid #e2e5ec;
    border-radius: 12px;
    min-width: 200px;
    max-width: 350px;
    padding: 10px;
  }
`;
Field.LogoBox = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
  padding-bottom: 5px;
`;
Field.VerticalBox.Label = styled.div`
  display: inline-block;
  vertical-align: middle;
`;
const Logo = styled.img`
  min-width: 30px;
  max-width: 45px;
  width: 100%;
  border-radius: 50%;
`;
