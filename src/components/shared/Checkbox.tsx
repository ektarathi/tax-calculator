import React from "react";
export interface CheckboxProps {
  text: string;
  id: string;
  checked: boolean;
  onChange: (e: any) => void;
}

const Checkbox: React.SFC<CheckboxProps> = ({ id, text, onChange, checked }: CheckboxProps) => {
  return (
    <div className="question">
      <label>{text}</label>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className="checkbox"
      />
    </div>
  );
};

export default Checkbox;
