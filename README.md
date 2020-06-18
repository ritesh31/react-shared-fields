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
import React from 'react';
import { ReactSharedField } from "react-shared-fields";

export default class App extends React.Component {
  ...
}
```
## Quick Start
Using React class component

```jsx
import React  from 'react';
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
import React, { useState }  from 'react';
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
`fields` | Array | | **Required.** List of form fields array with type, label, placehiolder, etc.
`data` | Object | | **Required.** Object of form fields
`error` | Object | | **Required.** Object of form fields error 
`handleOnChange` | Function | | Form field change handler and set form field object