import React from "react";
export interface DropDownProps {
  label: string;
  id: string;
  onChange: (event: any) => void;
  value: any;
  option1: string;
  option2: string;
  error: any;
}

const DropDown: React.SFC<DropDownProps> = ({
  label,
  id,
  onChange,
  value,
  option1,
  option2,
  error,
}: DropDownProps) => {
  return (
    <div className="question">
      <label htmlFor={id}>{label}</label>
      <select className={id} value={value} id="taxYear" onChange={onChange}>
        <option value={option1}>{option1}</option>
        <option value={option2}>{option2}</option>
      </select>
      {error ? <p className="errorMessage">Please select the value</p> : ""}
    </div>
  );
};

export default DropDown;
