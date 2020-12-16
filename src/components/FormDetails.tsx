import React, { Component } from "react";
export interface FormDetailsProps {
    error: boolean; onChange: (event: any) => void; value: any;
}

const FormDetails: React.SFC<FormDetailsProps> = ({
  error,
  onChange, value
}: FormDetailsProps) => {
  return (
    <div className="question">
      <input
        id="yearlySalary"
        name="yearlySalary"
        type="number"
        onChange={onChange}
        className="form-input"
      />
      <select id="salary">
        <option value="yearly">Year</option>
        <option value="monthly">Month - (12 Months)</option>
      </select>
      {error ? (
        <p className="errorMessage">
          The selected salary of {value} is less than the threshold value
        </p>
      ) : (
        ""
      )}
      <p>
        <small>This calculator assumes your tax code is: 1250L</small>
      </p>
    </div>
  );
};

export default FormDetails;