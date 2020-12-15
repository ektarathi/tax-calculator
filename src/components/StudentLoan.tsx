import React, { Component } from 'react'
export interface StudentLoanProps {
    label: string;
    onChange: (event: any) => void;
    value: any;
}
 
const StudentLoan: React.SFC<StudentLoanProps> = ({label, onChange, value}: StudentLoanProps) => {
    return ( 
        <div className="question">
            <label htmlFor="taxYear">{label}</label>
            <select value={value} id="taxYear" onChange={onChange}>
                <option value="plan1">
                    Repayment Plan 1
                </option>
                <option value="plan2">Repayment Plan 2</option>
            </select>
        </div>
     );
}
 
export default StudentLoan;