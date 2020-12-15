export const calculateNationalInsurance = (value: any, ageValue: any, taxYear: any) => {
  let natInsurance, natInsureThresh;
  // national insurance threshold
  if(taxYear === '19/20') {
    natInsureThresh = 719;
  } else {
    natInsureThresh = 792;
  }
  // national insurance taxable
  let natInsureTaxable = value - natInsureThresh;
  // make national insurance percent a decimal for calculation
  let natInsurePercent = 12 / 100;
  // calculate national insurance taken yearly
  if (ageValue) {
    // OVER 65s NATIONAL INSURANCE CORRECT
    natInsurance = 0;
  } else {
    natInsurance = (natInsurePercent * natInsureTaxable).toFixed(2);
  }

  return natInsurance;
};
