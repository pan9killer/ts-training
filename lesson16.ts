const electricityUserData = {
  readings: 95,
  units: 'kWt',
  mode: 'double'
};

const userDataTuple: [...boolean[], number, string] = [true, false, 40, 'John'];
// userDataTuple[3];
// userDataTuple.push(50);
// userDataTuple[3];

const res = userDataTuple.map(el => `${el} - data`);

const [bthd, age, userName] = userDataTuple;

const waterUserData = {
  readings: 3,
  units: 'm3'
};

const elRate = 0.45;
const wRate = 2;

const monthPayments: number[] = [0, 0]; // [electricity, water]

const calculatePayments = (
  { readings, mode }: { readings: number; mode: string },
  wReadings: number,
  elRate: number,
  wRate: number
): void => {
  if (mode === 'double' && readings < 50) {
    monthPayments[0] = readings * elRate * 0.7;
  } else {
    monthPayments[0] = readings * elRate;
  }

  monthPayments[1] = wReadings * wRate;
};

calculatePayments(electricityUserData, waterUserData.readings, elRate, wRate);

const sendInvoice = (
  [el, water]: number[],
  electricityUserData: { readings: number; units: string },
  waterUserData: { readings: number; units: string }
): string => {
  const text = `    Hello!
    This month you used ${electricityUserData.readings} ${electricityUserData.units} of electricity
    It will cost: ${el}€
    
    This month you used ${waterUserData.readings}${waterUserData.units} of water
    It will cost: ${water}€`;

  return text;
};

const invoice = sendInvoice(monthPayments, electricityUserData, waterUserData);
console.log(invoice);
