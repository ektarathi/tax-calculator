import React from "react";
import TableData from './TableData';
export interface TableProps {
  salary: any;
  taxableIncome: any;
  incomeTax: number;
  nationalIns: any;
  takeHome: any; 
  studentLoan: any;
}

function createData(
  name: string,
  yearly: number,
  monthly: number,
  weekly: number,
) {
  return { name, yearly, monthly, weekly };
}

const Table: React.SFC<TableProps> = ({salary, taxableIncome, incomeTax, nationalIns, takeHome, studentLoan}: TableProps) => {
  let rows;
  if(studentLoan !== undefined) {
    rows = [
      createData("Gross Income", salary, salary/12, salary/52),
      createData("Taxable Income", taxableIncome, taxableIncome/12, taxableIncome/52),
      createData("Tax Paid", incomeTax, incomeTax/12, incomeTax/52),
      createData("National Insurance", nationalIns, nationalIns/12, nationalIns/52),
      createData("Student Loan", studentLoan, studentLoan/12, studentLoan/52),
      createData("Take Home", takeHome, takeHome/12, takeHome/52),
    ];
  } else {
    rows = [
      createData("Gross Income", salary, salary/12, salary/52),
      createData("Taxable Income", taxableIncome, taxableIncome/12, taxableIncome/52),
      createData("Tax Paid", incomeTax, incomeTax/12, incomeTax/52),
      createData("National Insurance", nationalIns, nationalIns/12, nationalIns/52),
      createData("Take Home", takeHome, takeHome/12, takeHome/52),
    ];
  }

  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Yearly</th>
          <th>Monthly</th>
          <th>Weekly</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => {
            return <TableData data={row} key={index}/>
        })}
      </tbody>
    </table>
  );
};

export default Table;
