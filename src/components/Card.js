import React, { useState, useEffect } from "react";
import moment from "moment";
import { ReactSharedField } from "./FieldRenderer";

function Card(props) {
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
    },
    {
      type: "checklist",
      id: "inputCultivatorType",
      label: "CULTIVAR TYPE",
      key: "cf_cultivar_type__in",
      class: "col-12",
      options: [
        "Sativa",
        "Indica",
        "Hybrid - Sativa Dominant",
        "Hybrid - Indica Dominant",
      ],
    },
    {
      type: "choices",
      subType: "text",
      id: "inputOwnerOrManager",
      label: "Owner Or Manager",
      placeholder: "Owner Or Manager",
      options: [
        { label: "Owner", value: "owner" },
        { label: "Manager", value: "Manager" },
      ],
      key: "owner_or_manager",
      required: true,
      randomId: true,
    },
    {
      type: "input-range",
      id: "inputMinQuantityLBS",
      label: "MINIMUM BATCH QUANTITY(lbs)",
      key: "available_stock__gte",
      class: "col-12",
      minValue: 0,
      maxValue: 100,
      formatLabel: (value) => `${value}`,
    },
    {
      type: "date",
      subType: "date",
      id: "inputDateOfBirth",
      label: "Date Of Birth",
      placeholder: "Date of Birth",
      key: "date_of_birth",
      maxDate: moment().subtract(21, "years"),
      format: "yyyy-MM-dd",
      required: true,
    },
  ];

  const handleFieldChange = ({ key, value }) => {
    setFormData({
      ...formData,
      [key]: value,
    });
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
}

export default Card;
