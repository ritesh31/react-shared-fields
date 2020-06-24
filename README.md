## React-Shared-Fields
A package used to generate form fields like Input, Choice, DatePicker, etc. fields, built with ReactJS and CSS.

## Project Status
This package is currently in development. Users can generate some form fields bypassing some required data to the component. Functionality to edit form fields and some design changes is in progress.

## Installation and Setup Instructions
Installation:

```sh
npm install --save react-shared-fields
```

## Usage

An import the package into your project.

```jsx
import React from "react";
import { ReactSharedField } from "react-shared-fields";

export default class App extends React.Component {
  ...
}
```
## Quick Start
Using React class component

```jsx
import React  from "react";
import { ReactSharedField } from "react-shared-fields";

export default class App extends React.Component {
  state = {
    formConstant: [],
    formData: {},
    formError: {}
  }

  componentDidMount = () => {
    let fields = [
      {
        type: "input",
        subType: "text",
        id: "inputEmail",
        label: "Email",
        placeholder: "Email",
        key: "email",
        formClass: "form-control",
        required: true,
      },
      {
        type: "input",
        subType: "password",
        id: "inputPassword",
        label: "Password",
        placeholder: "Password",
        key: "password",
        formClass: "form-control",
        required: true,
      },
      {
        type: "number",
        subType: "text",
        id: "inputPhone",
        label: "Company Phone",
        placeholder: "Enter Phone",
        key: "company_phone",
        format: "(###) ###-####",
        prefix: "+1",
        required: true,
      },
      {
        type: "textarea",
        subType: "text",
        id: "inputAboutCompany",
        label: "About Company",
        key: "about_company",
        required: true,
      }
    ];

    this.setState({ formConstant: fields });
  }

  handleFieldChange = ({ key, value }) => {
    this.setState({
      formData: {
        ...this.state.formData,
        [key]: value
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <form>
          <ReactSharedField
            fields={this.state.formConstant}
            data={this.state.formData}
            error={this.state.formError}
            handleOnChange={this.handleFieldChange}
          />
        </form>
      </React.Fragment>
    );
  }
}
```

Using React hooks

```jsx
import React, { useState }  from "react";
import { ReactSharedField } from "react-shared-fields";

function App(props) {
  const [formData, setFormData] = useState({});
  const [formError, setFormError] = useState({});
  const formConstant = [
    {
      type: "input",
      subType: "text",
      id: "inputEmail",
      label: "Email",
      placeholder: "Email",
      key: "email",
      formClass: "form-control",
      required: true,
    },
    {
      type: "input",
      subType: "password",
      id: "inputPassword",
      label: "Password",
      placeholder: "Password",
      key: "password",
      formClass: "form-control",
      required: true,
    },
    {
      type: "number",
      subType: "text",
      id: "inputPhone",
      label: "Company Phone",
      placeholder: "Enter Phone",
      key: "company_phone",
      format: "(###) ###-####",
      prefix: "+1",
      required: true,
    },
    {
      type: "textarea",
      subType: "text",
      id: "inputAboutCompany",
      label: "About Company",
      key: "about_company",
      required: true,
    }
  ];

  const handleFieldChange = ({ key, value }) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  return (
    <React.Fragment>
      <form>
        <ReactSharedField
          fields={formConstant}
          data={formData}
          error={formError}
          handleOnChange={handleFieldChange}
        />
      </form>
    </React.Fragment>
  );
}

export default App;
```

## Params

Name | Type | Default | Description
--- | --- | --- | --- |
`fields` | Array | - | **Required.** List of form fields array with type, label, placeholder, etc.
`data` | Object | - | **Required.** Object of form fields
`error` | Object | - | **Required.** Object of form fields error 
`handleOnChange` | Function | - | Form field change handler and set form field object

## Fields constant

#### Input Field

Name | Type | Description | Example
--- | --- | --- | --- |
`type` | String | - | type="input"
`subType` | String | Depends on input field type | Input, password
`id` | String | Attribute specifies a unique id for an HTML element | id="username"
`label` | String | Defines a label for input element | Username
`placeholder` | String | Specifies a short hint that describes the expected <br> value of an input field| placeholder="enter username"
`key` | String | key is a string (also called a “property name”) <br> on formdata object | formdata={<br>username: ""<br>}
`formClass` | String | - | -
`required` | Boolean | Specifies that an input field must be filled out <br> before submitting the form | required=true


#### Number Field

Name | Type | Description | Example
--- | --- | --- | --- |
`type` | String | - | type="number"
`subType` | String | - | text
`id` | String | Attribute specifies a unique id for an HTML element | id="phone"
`label` | String | Defines a label for input element | Phone
`placeholder` | String | Specifies a short hint that describes the expected <br> value of an input field| placeholder="enter phone number"
`key` | String | key is a string (also called a “property name”) <br> on formdata object | formdata={<br>phonenumber: ""<br>}
`format` | String | If format given as hash string allow number input inplace of hash. <br>If format given as function, component calls the function <br>with unformatted number and expects formatted number. | {<br>format: "(###) ###-####"<br>}<br>O/P: (011) 650-8962
`prefix` | String | Add a prefix before the number | String (ex : $)
`required` | Boolean | Specifies that an input field must be filled out <br> before submitting the form | required=true


#### Textarea Field

Name | Type | Description | Example
--- | --- | --- | --- |
`type` | String | - | type="textarea"
`subType` | String | - | text
`id` | String | Attribute specifies a unique id for an HTML element | id="description"
`label` | String | Defines a label for input element | Description
`key` | String | key is a string (also called a “property name”) <br> on formdata object | formdata={<br>description: ""<br>}
`required` | Boolean | Specifies that an input field must be filled out <br> before submitting the form | required=true


#### Checklist Field

Name | Type | Description | Example
--- | --- | --- | --- |
`type` | String | - | type="checklist"
`id` | String | Attribute specifies a unique id for an HTML element | id="cultivartype"
`label` | String | Defines a label for input element | Cultivar type
`key` | String | key is a string (also called a “property name”) <br> on formdata object | formdata={<br>cultivar_type: ""<br>}
`options` | Array | List of one or more options. | options: [ <br> "Sativa", <br> "Indica" <br>]


#### Choice Field

Name | Type | Description | Example
--- | --- | --- | --- |
`type` | String | - | type="choices"
`subType` | String | - | text
`id` | String | Attribute specifies a unique id for an HTML element | id="designation"
`label` | String | Defines a label for input element | Designation
`placeholder` | String | Specifies a short hint that describes the expected <br> value of an input field| placeholder="enter designation"
`key` | String | key is a string (also called a “property name”) <br> on formdata object | formdata={<br>designation: ""<br>}
`options` | Array | List of one or more options with key value pair. | options: [<br>{ label: "Owner", value: "owner" },<br> { label: "Manager", value: "Manager" }<br>]


#### InputRange Field

Name | Type | Description | Example
--- | --- | --- | --- |
`type` | String | - | type="input-range"
`id` | String | Attribute specifies a unique id for an HTML element | id="quantity"
`label` | String | Defines a label for input element | Quantity
`key` | String | key is a string (also called a “property name”) <br> on formdata object | formdata={<br>quantity: ""<br>}
`minValue` | Number | Set a minimum value for your component. <br>You cannot drag your slider under this value. | formdata={<br>minValue: ""<br>}
`maxValue` | Number | Set a maximum value for your component. <br>You cannot drag your slider beyond this value.. | formdata={<br>maxValue: ""<br>}
`formatLabel` | (value: number, type: string): string | By default, value labels are displayed as plain numbers. <br>If you want to change the display, <br>you can do so by passing in a function. <br>The function can return something different, <br>i.e.: append a unit, reduce the precision of a number.. | formdata={ <br>formatLabel: (value) => `${value}`<br>}


#### Date Field

Name | Type | Description | Example
--- | --- | --- | --- |
`type` | String | - | type="date"
`subType` | String | - | text
`id` | String | Attribute specifies a unique id for an HTML element | id="dateofbirth"
`label` | String | Defines a label for input element | Date Of Birth
`placeholder` | String | Specifies a short hint that describes the expected <br> value of an input field| placeholder="Date of birth"
`key` | String | key is a string (also called a “property name”) <br> on formdata object | formdata= { <br> date_of_birth: ""<br>}
`maxDate` | Number | Specify the maximum enterable date in the DatePicker. | formdata={<br>maxDate: moment().subtract(21, "years")<br>}
`format` | String | The date format, combination of <br>d, dd, D, DD, m, mm, M, MM, yy, yyyy. | formdata={<br>format: "yyyy-MM-dd"<br>}
`required` | Boolean | Specifies that an input field must be filled out <br> before submitting the form | required=true