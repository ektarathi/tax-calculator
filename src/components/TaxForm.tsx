import React from "react";
import Checkbox from "./Checkbox";
import DropDown from "./DropDown";
import FormDetails from './FormDetails';
import { calculateIncomeTax } from "../utiities/IncomeTax";
import { calculateNationalInsurance } from "../utiities/NI";
import { studentLoan } from "../utiities/StudentLoan";

import Table from "./Table";
export interface FormProps {}

const Form: React.SFC<FormProps> = () => {
  const [value, setValue] = React.useState("" as any);
  const [loanSelect, setLoanSelect] = React.useState('Repayment Plan 1');
  const [ageChecked, setAgeChecked] = React.useState(false);
  const [taxYear, setTaxYear] = React.useState("2019/20");
  const [displayTable, setDisplayTable] = React.useState(false);
  const [taxableSalary, setTaxableSalary] = React.useState("" as any);
  const [incomeTax, setIncomeTax] = React.useState("" as any);
  const [nationalInsurance, setNationalInsurance] = React.useState("" as any);
  const [takeHomeSalary, setTakeHomeSalary] = React.useState("" as any);
  const [loan, setLoan] = React.useState("" as any);
  const [error, setError] = React.useState(false);

  const calculateTax = (event: any) => {
    event.preventDefault();

    // Displaying the error messages
    if (value < 12500) {
      setDisplayTable(false);
      setError(true);
    } else {
      setDisplayTable(true);
    }

    if (loanSelect === "Repayment Plan 2") {
      if (value < 26575 && taxYear === "2020/21") {
        setDisplayTable(false);
        setError(true);
      } else if (value < 25725 && taxYear === "2019/20") {
        setDisplayTable(false);
        setError(true);
      } else {
        setDisplayTable(true);
        setError(false);
      }
    }

    // calculating Taxable Salary
    let salary = value - 12500;
    setTaxableSalary(salary);

    // Calculating Tax Paid
    let tax = calculateIncomeTax(value);
    setIncomeTax(tax);

    //Calculating National Insurance
    let ni: any = calculateNationalInsurance(value, ageChecked, taxYear);
    setNationalInsurance(ni);

    // Calculate Student Loan
    let stLoan = studentLoan(value, loanSelect, taxYear);
    console.log(stLoan);
    setLoan(stLoan);

    if (stLoan !== undefined) {
      // take home pay yearly
      let takeHomeYear = (value - tax - ni - stLoan).toFixed(2);
      setTakeHomeSalary(takeHomeYear);
    } else {
      // take home pay yearly
      let takeHomeYear = (value - tax - ni).toFixed(2);
      setTakeHomeSalary(takeHomeYear);
    }
  };

  const handleChange = (event: any) => {
    setTaxYear(event.target.value);
  };

  const selectLoanValue = (event: any) => {
    console.log(event.target.value);
    setLoanSelect(event.target.value);
  };

  return (
    <div className="taxCalculator">
      <h1>Income Tax Calculator</h1>
      <form className="formQuestions">
        <h2>Enter your details</h2>
        <FormDetails error={error} onChange={(event) => setValue(event.target.value)} value={value}/>
        <DropDown
          label="Student Loan"
          id="loanPlan"
          onChange={selectLoanValue}
          value={loanSelect}
          option1="Repayment Plan 1"
          option2="Repayment Plan 2"
        />
        <Checkbox
          text="Are you over 65 years old?"
          id="over65"
          checked={ageChecked}
          onChange={(e) => setAgeChecked(!ageChecked)}
        />
        <DropDown label="TaxYear" id="taxYear" onChange={handleChange} value={taxYear} option1="2019/20" option2="2020/21"/>
        <button id="submitTax" className="btn" onClick={calculateTax}>
          Calculate your tax
        </button>
      </form>
      {displayTable ? (
        <Table
          salary={parseInt(value)}
          taxableIncome={taxableSalary}
          incomeTax={incomeTax}
          nationalIns={nationalInsurance}
          takeHome={takeHomeSalary}
          studentLoan={loan}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Form;
