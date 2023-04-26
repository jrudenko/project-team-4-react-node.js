export const createOptionCategory = data => {
  return data.map(item => ({
    value: item,
    label: item[0].toUpperCase() + item.slice(1),
  }));
};

export const createOptionTimes = data => {
  return data.map(num => ({
    value: num.toString(),
    label: `${num} min`,
  }));
};

export const createOptionMeasure = (data = ['tbs', 'tsp', 'kg', 'g']) => {
  return data.map(item => ({
    value: item,
    label: item,
  }));
};

export const createOptionIngredients = data => {
  return data.map(item => ({
    value: item._id,
    label: item.ttl,
  }));
};
