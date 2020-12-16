import React, { Component } from 'react'
export interface StudentLoanProps {
    label: string;
    onChange: (event: any) => void;
    loanSelect: any;
}
 
const StudentLoan: React.SFC<StudentLoanProps> = ({label, onChange, loanSelect}: StudentLoanProps) => {
    return ( 
        <div className="question">
            <label htmlFor="loanPlan">{label}</label>
            <select value={loanSelect} id="loanPlan" onChange={onChange}>
                <option></option>
                <option value="plan1">
                    Repayment Plan 1
                </option>
                <option value="plan2">Repayment Plan 2</option>
            </select>
        </div>
     );
}
 
export default StudentLoan;