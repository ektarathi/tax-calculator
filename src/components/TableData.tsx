import React from "react";
export interface TableDataProps {
  data: {
    name: string,
    yearly: number,
    monthly: number,
    weekly: number,
  };
}

const TableData: React.SFC<TableDataProps> = ({ data }: TableDataProps) => {
  return (
    <>
      <tr>
        <td>{data.name}</td>
        <td>{data.yearly}</td>
        <td>{(data.monthly).toFixed(2)}</td>
        <td>{(data.weekly).toFixed(2)}</td>
      </tr>
    </>
  );
};

export default TableData;
