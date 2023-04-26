export const createArrTimesPrepare = (min, max, step) => {
  let result = [min];
  let arrLegth = max / min - result.length;

  for (let i = 0; i < arrLegth; i += 1) {
    let lastItem = result[result.length - 1];
    let currentValue = lastItem + step;
    result.push(currentValue);
  }
  return result;
};
