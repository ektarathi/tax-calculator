import React, { Component } from 'react'
export interface StudentLoanProps {
    label: string;
    onChange: (event: any) => void;
    value: any;
    option1: string; option2: string;
}
 
const StudentLoan: React.SFC<StudentLoanProps> = ({label, onChange, value, option2, option1}: StudentLoanProps) => {
    return ( 
        <div className="question">
            <label htmlFor="taxYear">{label}</label>
            <select value={value} id="taxYear" onChange={onChange}>
                <option></option>
                <option value={option1}>
                    {option1}
                </option>
                <option value={option2}>{option2}</option>
            </select>
        </div>
     );
}
 
export default StudentLoan;