import React, { Component } from 'react'
export interface DropDownProps {
    label: string;
    onChange: (event: any) => void;
    value: any;
}
 
const DropDown: React.SFC<DropDownProps> = ({label, onChange, value}: DropDownProps) => {
    return ( 
        <div className="question">
            <label htmlFor="taxYear">{label}</label>
            <select className="taxYear" value={value} id="taxYear" onChange={onChange}>
                <option value="19/20">
                    2019/20
                </option>
                <option value="20/21">2020/21</option>
            </select>
        </div>
     );
}
 
export default DropDown;