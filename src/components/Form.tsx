import React from "react";
import Checkbox from "./Checkbox";
import DropDown from './DropDown';
import { calculateIncomeTax } from '../utiities/IncomeTax';
import { calculateNationalInsurance } from '../utiities/NI';
export interface FormProps {}

const Form: React.SFC<FormProps> = () => {
  const [value, setValue] = React.useState("" as any);
  const [ageChecked, setAgeChecked] = React.useState(false);
  const [taxYear, setTaxYear] = React.useState('' as any);
  
  const calculateTax = (event: any) => {
    event.preventDefault();
    let incomeTax = calculateIncomeTax(value);
    let nationalInsurance: any= calculateNationalInsurance(value, ageChecked, taxYear);

    // take home pay yearly
    let takeHomeYear: any = (value - incomeTax - nationalInsurance).toFixed(2);

    // monthly take home pay formatting
    let takeHomeMonthly = (takeHomeYear / 12).toFixed(2);
  };

  return (
    <div className="taxCalculator">
      <h1>Income Tax Calculator</h1>
      <form className="formQuestions">
        <h2>Enter your details</h2>
        <div className="question">
          <label htmlFor="yearlySalary">Yearly Salary</label>
          <input
            id="yearlySalary"
            name="yearlySalary"
            type="number"
            onChange={(event) => setValue(event.target.value)}
          />
          <p>
            <small>This calculator assumes your tax code is: 1250L</small>
          </p>
        </div>
        <Checkbox text="Are you over 65 years old?" id="over65" checked={ageChecked}
          onChange={(e) => setAgeChecked(!ageChecked)}/>
        <DropDown label="taxYear" onChange={event => setTaxYear(event.target.value)}/>
        <button id="submitTax" className="btn" onClick={calculateTax}>
          Calculate your tax
        </button>
      </form>
    </div>
  );
};

export default Form;
