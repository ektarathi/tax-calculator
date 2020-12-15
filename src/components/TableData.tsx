import React from "react";
export interface TableDataProps {
  data: {
    name: string;
    calories: number;
    fat: number;
    carbs: number;
    protein: number;
  };
}

const TableData: React.SFC<TableDataProps> = ({ data }: TableDataProps) => {
  return (
    <>
      <tr>
        <td>{data.name}</td>
        <td>{data.calories}</td>
        <td>{data.fat}</td>
        <td>{data.carbs}</td>
        <td>{data.protein}</td>
      </tr>
    </>
  );
};

export default TableData;
