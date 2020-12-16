import React from "react";
export interface LoanDropdownProps {
  label: string;
  id: string;
  onChange: (event: any) => void;
  value: any;
  option1: string;
  option2: string;
}

const LoanDropdown: React.SFC<LoanDropdownProps> = ({
  label,
  id,
  onChange,
  value,
  option1,
  option2,
}: LoanDropdownProps) => {
  return (
    <div className="question">
      <label htmlFor={id}>{label}</label>
      <select className={id} value={value} id="taxYear" onChange={onChange}>
        <option>Select</option>
        <option value={option1}>{option1}</option>
        <option value={option2}>{option2}</option>
      </select>
    </div>
  );
};

export default LoanDropdown;
