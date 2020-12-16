import React from "react";
import YearlyTax from "./YearlyTax";
import FormDetails from "./FormDetails";

import Table from "./Table";
export interface FormProps {}

const Form: React.SFC<FormProps> = () => {
  const [value, setValue] = React.useState("" as any);
  const [type, setType] = React.useState("Year");
  const [displayTable, setDisplayTable] = React.useState(false);
  const [taxableSalary, setTaxableSalary] = React.useState("" as any);
  const [incomeTax, setIncomeTax] = React.useState("" as any);
  const [nationalInsurance, setNationalInsurance] = React.useState("" as any);
  const [takeHomeSalary, setTakeHomeSalary] = React.useState("" as any);
  const [loan, setLoan] = React.useState("" as any);
  const [error, setError] = React.useState(false);

  const getSalaryType = (event: any) => {
    setType(event.target.value);
  };

  const getSalary = (event: any) => {
    setValue(event.target.value);
  };

  return (
    <div className="taxCalculator">
      <h1>Income Tax Calculator</h1>
      <form className="formQuestions">
        <h2>Enter your details</h2>
        <FormDetails
          error={error}
          onChange={getSalary}
          value={value}
          handleChange={getSalaryType}
        />
        {type === "yearly" ? (
          <YearlyTax
            value={value}
            setTaxableSalary={setTaxableSalary}
            setIncomeTax={setIncomeTax}
            setNationalInsurance={setNationalInsurance}
            setTakeHomeSalary={setTakeHomeSalary}
            setLoan={setLoan}
            setDisplayTable={setDisplayTable}
          />
        ) : (
          ""
        )}
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
