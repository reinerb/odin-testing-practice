const _average = (arr) => {
  let total = arr.reduce((prev, curr) => prev + curr, 0);

  return total / arr.length;
};

const analyzeArray = (arr) => {
  if (arr.length === 0) {
    throw new Error("Arrays of zero length are not supported");
  }

  return {
    average: _average(arr),
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
};

export default analyzeArray;
