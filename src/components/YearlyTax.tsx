import * as React from "react";
import { Dispatch } from "react";
import Checkbox from "./shared/Checkbox";
import DropDown from "./shared/DropDown";
import LoanDropdown from './shared/LoanDropdown';
import { calculateIncomeTax } from "../utiities/IncomeTax";
import { calculateNationalInsurance } from "../utiities/NI";
import { studentLoan } from "../utiities/StudentLoan";
export interface YearlyTaxProps {
  value: any;
  setTaxableSalary: Dispatch<any>;
  setIncomeTax: Dispatch<any>;
  setNationalInsurance: Dispatch<any>;
  setTakeHomeSalary: Dispatch<any>;
  setLoan: Dispatch<any>;
  setDisplayTable: Dispatch<any>;
}

const YearlyTax: React.SFC<YearlyTaxProps> = ({
  value,
  setTaxableSalary,
  setIncomeTax,
  setNationalInsurance,
  setTakeHomeSalary,
  setLoan,
  setDisplayTable,
}: YearlyTaxProps) => {
  const [loanSelect, setLoanSelect] = React.useState("");
  const [ageChecked, setAgeChecked] = React.useState(false);
  const [taxYear, setTaxYear] = React.useState("2019/20");
  const [error, setError] = React.useState(false);

  const calculateTax = (event: any) => {
    console.log("getting", taxYear, loanSelect);
    event.preventDefault();
    // Displaying the error messages
    displayErrorMessage();

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

  const displayErrorMessage = () => {
    if (value < 12500) {
      setDisplayTable(false);
      setError(true);
    } else {
      setDisplayTable(true);
    }
    if (taxYear === "") {
      setDisplayTable(false);
      setError(true);
    } else {
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
    }
  };
  const handleChange = (event: any) => {
    setTaxYear(event.target.value);
  };

  const selectLoanValue = (event: any) => {
    setLoanSelect(event.target.value);
  };

  return (
    <React.Fragment>
      <LoanDropdown
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
      <DropDown
        label="TaxYear"
        id="taxYear"
        onChange={handleChange}
        value={taxYear}
        option1="2019/20"
        option2="2020/21"
        error={error}
      />
      <button id="submitTax" className="btn" onClick={calculateTax}>
        Calculate your tax
      </button>
    </React.Fragment>
  );
};

export default YearlyTax;
