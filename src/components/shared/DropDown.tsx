import React from "react";
export interface DropDownProps {
  label: string;
  id: string;
  onChange: (event: any) => void;
  value: any;
  option1: string;
  option2: string;
}

const DropDown: React.SFC<DropDownProps> = ({
  label,
  id,
  onChange,
  value,
  option1,
  option2,
}: DropDownProps) => {
  return (
    <div className="criteria">
      <label htmlFor={id}>{label}</label>
      <select className={id} value={value} id="taxYear" onChange={onChange}>
        <option value={option1}>{option1}</option>
        <option value={option2}>{option2}</option>
      </select>
    </div>
  );
};

export default DropDown;
