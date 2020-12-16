export const studentLoan = (value: any, option: any, year: any) => {
    // student loan threshold
    let studentLoanThresh;
    if(option === 'plan1') {
        studentLoanThresh = 17330;
    } else {
        if(year === '19/20') {
            studentLoanThresh = 25725;
        } else {
            studentLoanThresh = 26575;
        }
    }
    // student loan taxable
    let studentLoanTaxable = value - studentLoanThresh;
    // calculate student loan taken yearly
    let studentLoan = .09 * studentLoanTaxable;
    return studentLoan
  };
  