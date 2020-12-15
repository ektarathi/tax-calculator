import React, { Component } from 'react'
export interface DropDownProps {
    label: string; onChange: (event: any) => void;
}
 
const DropDown: React.SFC<DropDownProps> = ({label, onChange}: DropDownProps) => {
    return ( 
        <div className="tax-year">
            <label htmlFor="taxYear">{label}</label>
            <select id="taxYear" onChange={onChange}>
                <option>Select Value</option>
                <option value="19/20">
                    2019/20
                </option>
                <option value="20/21">2020/21</option>
            </select>
        </div>
     );
}
 
export default DropDown;