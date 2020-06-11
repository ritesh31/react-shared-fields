import React, { useState, useEffect } from "react";
import { ReactSharedField } from "./FieldRenderer";

function Card(props) {
  console.log(props);
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
  ];

  const handleFieldChange = ({ key, value }) => {
    console.log('inside handle change function')
  };

  return (
    <React.Fragment>
      <div>Card Component</div>
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
};

export default Card;
