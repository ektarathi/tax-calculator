import React from "react";
import Checkbox from "./Checkbox";
import DropDown from './DropDown';
import StudentLoan from './StudentLoan';
import { calculateIncomeTax } from '../utiities/IncomeTax';
import { calculateNationalInsurance } from '../utiities/NI';
import Table from './Table';
export interface FormProps {}

const Form: React.SFC<FormProps> = () => {
  const [value, setValue] = React.useState("" as any);
  const [loanSelect, setLoanSelect] = React.useState('');
  const [ageChecked, setAgeChecked] = React.useState(false);
  const [taxYear, setTaxYear] = React.useState('19/20');
  
  const calculateTax = (event: any) => {
    event.preventDefault();
    let incomeTax = calculateIncomeTax(value);
    let nationalInsurance: any= calculateNationalInsurance(value, ageChecked, taxYear);

    // take home pay yearly
    let takeHomeYear: any = (value - incomeTax - nationalInsurance).toFixed(2);
    console.log(takeHomeYear);
    // monthly take home pay formatting
    let takeHomeMonthly = (takeHomeYear / 12).toFixed(2);
    console.log(taxYear);
  };

  const handleChange = (event:any) => {
    setTaxYear(event.target.value);
  }

  const selectLoanValue = (event: any) => {
    setLoanSelect(event.target.value);
  }

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
            className="form-input"
          />
          <p>
            <small>This calculator assumes your tax code is: 1250L</small>
          </p>
        </div>
        <StudentLoan label="Student Loan" onChange={selectLoanValue} value={loanSelect}/>
        <Checkbox text="Are you over 65 years old?" id="over65" checked={ageChecked}
          onChange={(e) => setAgeChecked(!ageChecked)}/>
        <DropDown label="TaxYear" onChange={handleChange} value={taxYear}/>
        <button id="submitTax" className="btn" onClick={calculateTax}>
          Calculate your tax
        </button>
      </form>
      <Table/>
    </div>
  );
};

export default Form;
