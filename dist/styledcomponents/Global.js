import styled from 'styled-components';
import { Theme } from './theme';
export const Input = styled.input`
  display: block;
  width: ${props => props.editable ? 'calc(100% - 65px)' : '100%'};
  padding: 1.2rem 1rem 0.65rem 1rem;
  font-weight: ${Theme['$font-w-400']};
  line-height: 1.5;
  font-size: ${Theme['$base-f-size']};
  color: ${Theme['$gray-90']};
  background-color: ${Theme['$a-white']};
  border: 1px solid ${Theme['$gray-5']};
  background-clip: padding-box;
  border-radius: 4px;
  -webkit-transition: border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:active {
    box-shadow: none !important;
  }

  &:focus {
    box-shadow: none !important;
    color: ${Theme['$gray-90']};
    background-color: ${Theme['$a-white']};
    border-color: ${Theme['$light-blue']};
    outline: 0;
  }

  &:disabled {
    background-color: transparent;
    opacity: 1;
    border-color: ${Theme['$gray-4']};
  }

  &[readonly] {
    background-color: #e9ecef;
    opacity: 1;
    border-color: ${Theme['$gray-4']};
  }
  .input-text {
    padding: 10px;
  }
`;
export const FormField = styled.div`
  label {
    margin: 0 0 0 10px;
    font-size: ${Theme['$small-f-size']};
    position: relative;
    bottom: -11px;
    background: ${Theme['$dark-green']};
    padding: 3px 10px;
    color: ${Theme['$a-white']};
    border-radius: 4px;
  }
  .rbt-input-multi {
    height: auto !important;
  }
`;
export const ErrorLabel = styled.div`
  color: #9d323a;
  font-size: ${Theme['$small-f-size']};
  padding: 0;
  margin: 0 0 0 0;
`;