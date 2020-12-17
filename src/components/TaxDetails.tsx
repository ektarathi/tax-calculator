import * as React from "react";
import { Dispatch } from "react";
import Checkbox from "./shared/Checkbox";
import DropDown from "./shared/DropDown";
import LoanDropdown from "./shared/LoanDropdown";
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
  type: string;
}

const YearlyTax: React.SFC<YearlyTaxProps> = ({
  value,
  setTaxableSalary,
  setIncomeTax,
  setNationalInsurance,
  setTakeHomeSalary,
  setLoan,
  setDisplayTable,
  type
}: YearlyTaxProps) => {
  const [loanSelect, setLoanSelect] = React.useState("");
  const [ageChecked, setAgeChecked] = React.useState(false);
  const [taxYear, setTaxYear] = React.useState("2020/21");
  const [error, setError] = React.useState(false);

  const calculateTax = (event: any) => {
    event.preventDefault();
    // Displaying the error messages
    //displayErrorMessage();
    setDisplayTable(true)
    let salary;

    if(type === 'monthly') {
        salary = value * 12;
    } else {
        salary = value
    }
    calculateTaxDetails(salary);
  };

  const displayErrorMessage = () => {
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
  };

  const calculateTaxDetails = (value: any) => {
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
  }

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
        option1="2020/21"
        option2="2019/20"

      />
      <button id="submitTax" className="btn" onClick={calculateTax}>
        Calculate your tax
      </button>
    </React.Fragment>
  );
};

export default YearlyTax;
