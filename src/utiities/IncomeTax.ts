export const calculateIncomeTax = (value: any) => {
  let tax1250L = 12500;
  // user taxable salary
  let taxableSalary = value - tax1250L;
  // make tax percent a decimal for calculation
  let taxTakenPercent = 20 / 100;
  // additional tax brackets
  if (taxableSalary >= 50000 && value <= 150000) {
    taxTakenPercent = 40 / 100;
  } else if (taxableSalary > 150000) {
    taxTakenPercent = 45 / 100;
  }
  
  // calculate tax taken yearly
  let taxTakenAmount = taxTakenPercent * taxableSalary;
  return taxTakenAmount;
};
