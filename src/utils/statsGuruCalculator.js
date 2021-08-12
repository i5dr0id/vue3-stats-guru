const mean = (array) => array.reduce((acc, val) => acc + val, 0) / array.length;

const median = (array) => {
  let median = 0;
  let arrayLength = array.length;
  array.sort();
  if (arrayLength % 2 === 0) {
    median = (array[arrayLength / 2 - 1] + array[arrayLength / 2]) / 2;
  } else {
    median = array[(arrayLength - 1) / 2];
  }
  return median;
};

const mode = (array) => {
  let mode = [];
  let maxFrequency = 0;
  const frequencyTable = {};

  array.forEach((element) => {
    frequencyTable[element] = frequencyTable[element] + 1 || 1;
  });

  for (const key in frequencyTable) {
    if (frequencyTable[key] > maxFrequency) {
      mode = [Number(key)];
      maxFrequency = frequencyTable[key];
    } else if (frequencyTable[key] === maxFrequency) {
      mode.push(Number(key));
    }
  }

  if (mode.length === Object.keys(frequencyTable).length) {
    mode = [];
  }

  return mode.toString();
};

const stdDeviation = (array) => {
  let meanAverage;
  let meanAverageArray2X;
  let arraySum;
  let std;

  meanAverage = mean(array);

  meanAverageArray2X = array.map((k) => (k - meanAverage) ** 2);

  arraySum = meanAverageArray2X.reduce((acc, curr) => acc + curr, 0);

  std = Math.sqrt(arraySum / meanAverageArray2X.length);
  std = std.toFixed(3);

  return std;
};

export { mean, median, mode, stdDeviation };
