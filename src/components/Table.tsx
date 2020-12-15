import React, { Component } from "react";
import TableData from './TableData';
export interface TableProps {}

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const Table: React.SFC<TableProps> = () => {
  return (
    <table>
      <thead>
        <tr>
          <td>Dessert (100g serving)</td>
          <td align="right">Calories</td>
          <td align="right">Fat&nbsp;(g)</td>
          <td align="right">Carbs&nbsp;(g)</td>
          <td align="right">Protein&nbsp;(g)</td>
        </tr>
      </thead>
      <tbody>
          {rows.map((row) => {
              return <TableData data={row} key={row.name}/>
          })}
      </tbody>
    </table>
  );
};

export default Table;
